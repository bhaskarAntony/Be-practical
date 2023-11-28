// GoogleSignIn.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleSignIn = ({ onSuccess, onFailure }) => {
  const clientId = '33762067390-pucms537m6gbvqr6gu66aliu1ksjj9q2.apps.googleusercontent.com'; // Replace with your actual Client ID

  return (
    <div className='w-100 bg-primary text-white'>
        <GoogleLogin
      clientId={clientId}
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      className='w-100 bg-primary text-white'
      cookiePolicy={'single_host_origin'}
    />
    </div>
  );
};

export default GoogleSignIn;
