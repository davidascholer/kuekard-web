import type { NextPage } from "next";
import { useState, useRef } from "react";
import Background from "../components/ui/Background";
import constructionImage from "../assets/images/construction.jpg";

const SignIn: NextPage = () => {

  
  return (
    <Background>
          <img src={constructionImage.src}/>
      <p>Kuecards is going through some major changes. It will be up again by 2-1-23. Please check back!</p>
    </Background>
  );
};

export default SignIn;
