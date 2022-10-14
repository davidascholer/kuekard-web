import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import jwt_decode from "jwt-decode";
import GoogleButton from "./GoogleButton";
import FacebookButton from "./FacebookButton";
import { GoogleOAuthProvider } from "@react-oauth/google";

const MediaButtonList: NextPage = () => {
  const googleButtonRef = useRef();
  const [user, setUser] = useState(false);

  return (
    <div>
      {/*No need to hide clientId. Origin and redirect safe on Google backend.*/}
      <GoogleOAuthProvider clientId="885298568210-cpjrvfjagtf87ndtlm6oopf10olv8aed.apps.googleusercontent.com">
        <GoogleButton />
        <FacebookButton/>
      </GoogleOAuthProvider>
    </div>
  );
};

export default MediaButtonList;
