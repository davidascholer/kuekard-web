// For use with a default stylized Facebook button, use
// import FacebookLogin from "react-facebook-login";
// For use with a custom Facebook login button, use
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import type { NextPage } from "next"
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"
import { ButtonStyles } from "../util/interface"
import FacebookIcon from "../../../assets/images/media/facebook_icon_64.png"

const FacebookButton: NextPage<ButtonStyles> = ({buttonStyle,imageStyle}) => {
  const facebookAppID: string = String(process.env.NEXT_PUBLIC_FACEBOOK_APPID);

  const responseFacebook = (response: object) => {
    console.log(response);
  };

  return (
    <>
      <FacebookLogin
        appId={facebookAppID}
        callback={responseFacebook}
        fields="name,email,picture"
        /*Omit Render For A Generic Button*/
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            className={buttonStyle}
          >
            <span>Sign In With Facebook</span>
            <img src={FacebookIcon.src} className={imageStyle}/>
          </button>
        )}
      />
    </>
  );
};

export default FacebookButton;
