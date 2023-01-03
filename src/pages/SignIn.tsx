import type { NextPage } from "next";
import { useState, useRef } from "react";
import Background from "../components/ui/Background";
import constructionImage from "../assets/images/construction.jpg";

const SignIn: NextPage = () => {

  
  return (
    <Background>
          <img src={constructionImage.src}/>
    </Background>
  );
};

export default SignIn;
