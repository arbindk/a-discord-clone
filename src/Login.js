import React from "react";
import "./Login.css";
import DiscordImage from "./images/Discordlogo.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";

function Login() {
  const signIn = () => {
    //do clever google login shizz...
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={DiscordImage} alt="" />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
