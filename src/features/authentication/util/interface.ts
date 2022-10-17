export interface ButtonStyles {
    buttonStyle:string;
    imageStyle:string;
  }

  type loginSuccess = (o: object) => void;

  export interface MediaLoginComponent {
    facebookId?: string;
    mediaLoginStyle:ButtonStyles;
    loginSuccess:Function;
    loginError:Function;
  }