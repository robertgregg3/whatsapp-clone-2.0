import React from "react";
import "../css/Login.css";
import whatsapp from "../images/logo.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { actionTypes } from "../Contexts/reducer";
import { useStateValue } from "../Contexts/StateProvider";

function Login() {
  const [{}, dispatch] = useStateValue(); // useStateValue from State Provider (pull from data layer)

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={whatsapp} alt="Whatsapp logo" />
        <div className="login__text">
          <h1>Sign in to Whatsapp</h1>
        </div>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
