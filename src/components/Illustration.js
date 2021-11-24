import React from "react";
import classes from "../../styles/Illustration.module.css";
import signupImg from "../assets/images/signup.svg";

export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={signupImg} alt="Signup" />
    </div>
  );
}
