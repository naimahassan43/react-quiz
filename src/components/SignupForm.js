import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "./Form";
import TextInput from "./TextInput";
import Button from "./Button";
import CheckBox from "./CheckBox";
import { useAuth } from "../contexts/AuthContext";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password doesn't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create account");
    }
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        required
        placeholder="Enter name"
        icon="person"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <TextInput
        type="text"
        required
        placeholder="Enter  email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        type="password"
        required
        placeholder="Enter  password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextInput
        type="password"
        required
        placeholder="Confirm  password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <CheckBox
        text="I agree to the Terms &amp; Conditions"
        required
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />
      <Button disabled={loading} type="submit">
        <span>Submit now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account?
        <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
