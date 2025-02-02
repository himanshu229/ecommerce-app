import React from "react";
import { useNavigate } from "react-router-dom";
import GoogleLoginButton from "../components/GoogleLoginButton";

const LoginPage = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  return (
    <div className="login-prompt">
      {isAuthenticated ? (
        <p>
          User Logedin{" "}
          <span onClick={() => navigate("/")}>Click here Back to Home</span>
        </p>
      ) : (
        <p>Please log in to access the application.</p>
      )}
      {!isAuthenticated && (
        <GoogleLoginButton
          onSuccess={(credentialResponse) => {
            localStorage.setItem("userToken", credentialResponse.credential);
            window.location.href = "/";
          }}
        />
      )}
    </div>
  );
};

export default LoginPage;
