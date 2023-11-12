import React, { useState } from 'react';
import { Buffer } from 'buffer';
//import qs from 'qs';
import axios from 'axios';
import { redirect, useSearchParams } from 'react-router-dom';

function AuthOkPage(){

    const [searchParams, setSearchParams] = useSearchParams();
    const [isAuthed, setIsAuthed] = useState(false);

    const spotify_client_id = process.env.REACT_APP_CLIENT_ID;
    const spotify_client_secret = process.env.REACT_APP_CLIENT_SECRET;

    var code = searchParams.get("code");

    const params = new URLSearchParams();
    params.append('code', code);
    params.append('grant_type', 'authorization_code');
    params.append('redirect_uri', process.env.REACT_APP_APP_HOST+"/oauth");

    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        method: 'post',
        headers: {
          'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64')),
          'Content-Type' : 'application/x-www-form-urlencoded'
        }
      };

      console.log(authOptions)

    axios(authOptions)
    .then(response=> {
        console.log(response.data);
        setIsAuthed(true);
    })
    .error(error=>{
        console.log('Axios error');
        console.log(error);
    })

    return (
        <div>
            {isAuthed ? 'OK!' : 'requesting token...'}
        </div>
    );
}

export default AuthOkPage;