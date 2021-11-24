import React from "react";
import classes from "../../styles/Signup.module.css";
import Form from "../Form";
import Illustration from "../Illustration";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className={classes.column}>
        <Illustration />
        <Form className={`${classes.signup}`} />
      </div>
    </>
  );
}
