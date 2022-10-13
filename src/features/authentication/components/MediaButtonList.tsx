import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import jwt_decode from "jwt-decode";
import GoogleButton from "./GoogleButton";
import { GoogleOAuthProvider } from "@react-oauth/google";

const MediaButtonList: NextPage = () => {
  const googleButtonRef = useRef();
  const [user, setUser] = useState(false);


  
  return (
    <GoogleOAuthProvider clientId="885298568210-cpjrvfjagtf87ndtlm6oopf10olv8aed.apps.googleusercontent.com">
      <GoogleButton/>
    </GoogleOAuthProvider>
  );
};

export default MediaButtonList;
