import type { NextPage } from "next";
import GoogleButton from "./GoogleButton";
import FacebookButton from "./FacebookButton";
import { GoogleOAuthProvider } from "@react-oauth/google";
import styles from "../../../assets/styles/media_login_button_list.module.scss";

const MediaLoginButtonList: NextPage = () => {
  //No need to hide the Google clientId. Origin and redirect safe on Google backend.
  const googleClientID =
    "885298568210-cpjrvfjagtf87ndtlm6oopf10olv8aed.apps.googleusercontent.com";
  const facebookAppID: string = String(process.env.NEXT_PUBLIC_FACEBOOK_APPID);

  const onMediaLoginSuccess = (response: object): void => {
    alert("success: " + JSON.stringify(response));
  };

  const onMediaLoginError = () => {
    alert("error");
  };

  return (
    <div className={styles.media_container}>
      <GoogleOAuthProvider clientId={googleClientID}>
        <GoogleButton
          mediaLoginStyle={{
            buttonStyle: `${styles.button} ${styles.google}`,
            imageStyle: styles.image,
          }}
          loginSuccess={onMediaLoginSuccess}
          loginError={onMediaLoginError}
          />
        <FacebookButton
          facebookId={facebookAppID}
          mediaLoginStyle={{
            buttonStyle: `${styles.button} ${styles.facebook}`,
            imageStyle: styles.image,
          }}
          loginSuccess={onMediaLoginSuccess}
          loginError={onMediaLoginError}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default MediaLoginButtonList;
