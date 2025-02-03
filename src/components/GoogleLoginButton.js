import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = ({ onSuccess }) => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          localStorage.setItem('userToken', credentialResponse.credential);
          onSuccess(credentialResponse);
        }}
        onError={() => console.log('Login Failed')}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;