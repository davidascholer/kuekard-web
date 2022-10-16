import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import jwt_decode from "jwt-decode";
import GoogleButton from "./GoogleButton";
import FacebookButton from "./FacebookButton";
import { GoogleOAuthProvider } from "@react-oauth/google";
import useWindowSize from "../../../hooks/useWindowSize";
import styles from "../../../assets/styles/media_login_button_list.module.scss"

const MediaLoginButtonList: NextPage = () => {
  const googleButtonRef = useRef();
  const [user, setUser] = useState(false);
  const [width] = useWindowSize();

  // Takes in a percentage and calculates the pixel representation.
  const screenViewWidth = (percentage: number): string => {
    return String((width * percentage) / 100);
  };

  return (
    <div className={styles.media_container}>
      {/*No need to hide clientId. Origin and redirect safe on Google backend.*/}
      <GoogleOAuthProvider clientId="885298568210-cpjrvfjagtf87ndtlm6oopf10olv8aed.apps.googleusercontent.com">
        <GoogleButton buttonStyle={`${styles.button} ${styles.google}`} imageStyle={styles.image} />
        <FacebookButton buttonStyle={`${styles.button} ${styles.facebook}`} imageStyle={styles.image}/>
      </GoogleOAuthProvider>
    </div>
  );
};

export default MediaLoginButtonList;
