import type { NextPage } from "next";
import { useLayoutEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import useWindowSize from "../../../hooks/useWindowSize";

const GoogleButton: NextPage = () => {
  const [width] = useWindowSize();

  const screenWidthSize = (ratio: number): string => {
    return String(width * ratio);
  };

/*
// For use with a custom Google login button.
//  Note: Only retrieves an access token (a string), not an ID token (a JWT w user info). 
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: () => console.log("Login Failed"),
});
// Return object structure:
{"access_token": "","token_type": "","expires_in": ,"scope": "","authuser": "","prompt": ""}
*/

  return (
    <div style={{ width: "100vw", display: "flex", justifyContent: "center", textAlign: "center" }}>
      {" "}
      {
      /* Custom login button implementation.*/
      /* <button onClick={() => login()}>Sign in with Google 🚀 </button> */
      }
      <GoogleLogin
        /* Return object structure: {"clientId": "","credential": "<JWT token>",select_by": ""}*/
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        width={screenWidthSize(0.8)}
      />
    </div>
  );
};

export default GoogleButton;
