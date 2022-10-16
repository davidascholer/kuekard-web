// For use with a default stylized Google button, use
// import { GoogleLogin } from "@react-oauth/google";
// For use with a custom Google login button, use
// import { useGoogleLogin } from "@react-oauth/google";

import type { NextPage } from "next";
import { useGoogleLogin } from "@react-oauth/google";
import { ButtonStyles } from "../util/interface";
import GoogleIcon from "../../../assets/images/media/google_icon_64.png"

const GoogleButton: NextPage<ButtonStyles> = ({buttonStyle,imageStyle}) => {

  /*For use with a custom Google login button.*/
  /*
    //  Note: Only retrieves an access token (a string), not an ID token (a JWT w user info). 
    const login = useGoogleLogin({
      onSuccess: (tokenResponse) => console.log(tokenResponse),
      onError: () => console.log("Login Failed"),
    });
  */

  // Returns and authentication response (w JWT credential).
  interface googleLoginSuccessReturnObject {
    clientId: string;
    credential: string; //<JWT token>
    select_by: string;
  }

  // Returns and authorization response (no JWT credential).
  interface useGoogleLoginSuccessReturnObject {
    code: string;
    // "access_token": string;
    // "token_type": string;
    // "expires_in": string;
    scope: string;
    authuser: string;
    prompt: string;
  }

  // Create an any type as the google type is an Omit<custom> type, though
  // should return the googleSuccessRetornObject or useGoogleSuccessRetornObject type.
  const googleLoginSuccessCallback = (
    credentialResponse: useGoogleLoginSuccessReturnObject | any
  ): void => {
    console.log(credentialResponse);
  };

  const googleLoginErrorCallback = (): void => {
    console.log("failed");
  };

  return (
    <>
      {/* Custom login button implementation.*/}
      <button
        className={buttonStyle}
        onClick={useGoogleLogin({
          onSuccess: (codeResponse) => googleLoginSuccessCallback(codeResponse),
          flow: "auth-code",
          onError: () => googleLoginErrorCallback(),
        })}
      >
        <span>Sign in with Google</span>
        <img src={GoogleIcon.src} alt="Google Icon" className={imageStyle}/>
      </button>
      {
        // Stylized login button implementation.
        /*
      <GoogleLogin
        onSuccess={(codeResponse) => googleLoginSuccessCallback(codeResponse)}
        onError={ () => googleLoginErrorCallback()}
        width={screenViewWidth(80)+"px"}
        size="medium"
      />
      */
      }
    </>
  );
};

export default GoogleButton;
