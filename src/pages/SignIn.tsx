import type { NextPage } from "next";
import { useState, useRef } from "react";
import MediaButtonList from "../features/authentication/components/MediaLoginButtonList";
import FormBody from "../components/form/FormBody";
import Background from "../components/ui/Background";
// style
import logoStyles from "../assets/styles/logo.module.scss";
// images
import leftImage from "../assets/images/logo/svg/kuekard_left_128_64.svg";
import rightImage from "../assets/images/logo/svg/kuekard_right_128_64.svg";
import rightAltImage from "../assets/images/logo/svg/kuekard_right_alt_128_64.svg";

const SignIn: NextPage = () => {
  const [cardClasses, setCardClasses] = useState<string>("");
  const rightCard = useRef<HTMLImageElement>(null);

  const flipCard = () => {
    setCardClasses(`${logoStyles.flip90}`);
    setTimeout(() => {
      rightCard.current!.src = rightAltImage.src;
      setCardClasses(`${logoStyles.flip180}`);
    }, 500);
  };
  
  return (
    <Background>
    </Background>
  );
};

export default SignIn;
