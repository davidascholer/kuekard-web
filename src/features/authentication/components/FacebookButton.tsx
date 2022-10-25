// For use with a default stylized Facebook button, use
// import FacebookLogin from "react-facebook-login";
// For use with a custom Facebook login button, use
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import type { NextPage } from "next"
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"
import { MediaLoginComponent } from "../util/interface"
import FacebookIcon from "../../../assets/images/media/facebook_icon_64.png"

const FacebookButton: NextPage<MediaLoginComponent> = ({mediaLoginStyle,facebookId,loginSuccess,loginError}) => {

  const facebookLoginSuccessCallback = (response: object) => {
    loginSuccess(response)
  };

  const facebookLoginErrorCallback = () => {
    loginError()
  };

  return (
    <>
      <FacebookLogin
        appId={String(facebookId)}
        callback={facebookLoginSuccessCallback}
        onFailure={facebookLoginErrorCallback}
        fields="name,email,picture"
        /*Omit Render For A Generic Button*/
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            className={mediaLoginStyle.buttonStyle}
            data-cy="facebook-login"
          >
            <span>Sign In With Facebook</span>
            <img src={FacebookIcon.src} alt="Facebook Icon" className={mediaLoginStyle.imageStyle}/>
          </button>
        )}
      />
    </>
  );
};

export default FacebookButton;
