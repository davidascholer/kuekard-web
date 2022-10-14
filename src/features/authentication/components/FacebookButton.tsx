import React from "react";
/*Generic Button*/
// import FacebookLogin from "react-facebook-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

export default function FacebookMediaLogin() {
  const facebookAppID: string = String(process.env.NEXT_PUBLIC_FACEBOOK_APPID);
  console.log("fb: "+facebookAppID)
  const facebookColor:string = "#4064AD";
  const facebookButtonStyles:object = {
    color: "#fff",
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: facebookColor,
    maxWidth: "500px",
    padding: "20px",
    width: "80vw",
  };

  const responseFacebook = (response: object) => {
    console.log(response);
  };

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <FacebookLogin
        appId={facebookAppID}
        callback={responseFacebook}
        fields="name,email,picture"
        /*Omit Render For A Generic Button*/
        render={(renderProps) => (
          <button onClick={renderProps.onClick} style={facebookButtonStyles}>
            Sign In With Facebook
          </button>
        )}
      />
    </div>
  );
}
