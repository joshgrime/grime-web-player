import React from 'react';
import { Link } from 'react-router-dom';

function HomePage(){

    const spotify_client_id = process.env.REACT_APP_CLIENT_ID;

    var scope = "streaming user-read-email user-read-private"

    var state = generateRandomString(16);

    var auth_query_parameters = new URLSearchParams({
        response_type: "code",
        client_id: spotify_client_id,
        scope: scope,
        redirect_uri: process.env.REACT_APP_APP_HOST+"/oauth",
        state: state
    })

    return (
        <div>
                Log in:<p />
                <a href={"https://accounts.spotify.com/authorize/?" + auth_query_parameters.toString()}>click</a>
        </div>
    );
}

var generateRandomString = function (length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

export default HomePage;