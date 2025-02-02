import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = ({ onSuccess }) => {
  return (
    <GoogleOAuthProvider clientId={"60157734107-hq2fi6iunlmlttnhi52ars2fppsu7dkd.apps.googleusercontent.com"}>
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