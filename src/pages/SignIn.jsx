import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "57px",
        alignItems: "center",
      }}
    >
      <h1>Sign In</h1>
      <div style={{ marginBottom: "16px" }}>
        <InputLabel
          htmlFor="email"
          style={{ marginBottom: "17px", color: "black", fontWeight: "700" }}
        >
          Email Address
        </InputLabel>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          style={{ width: "550px" }}
        />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <InputLabel
          htmlFor="password"
          style={{ marginBottom: "17px", color: "black", fontWeight: "700" }}
        >
          Password{" "}
          <span
            style={{
              color: "#E87070",
              marginLeft: "320px",
              cursor: "pointer",
            }}
          >
            Forgot Password?
          </span>
        </InputLabel>
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          style={{ width: "550px" }}
        />
      </div>
      <Button
        style={{
          backgroundColor: "#163A4E",
          padding: "15px",
          color: "#ffffff",
          width: "550px",
          borderRadius: "15px",
          marginTop: "18px",
        }}
        color="inherit"
      >
        Sign In
      </Button>
      <p style={{ fontWeight: "500", marginTop: "15px" }}>
        Don’t have an account?{" "}
        <Link to="/register">
          <span
            style={{
              color: "#285975",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Sign Up Here
          </span>
        </Link>
      </p>
      <p style={{ color: "#8E8E93", marginTop: "9px" }}>OR</p>
      <Button
        style={{
          backgroundColor: "#E87070",
          padding: "15px",
          color: "#ffffff",
          width: "550px",
          borderRadius: "15px",
          marginTop: "12px",
        }}
        color="inherit"
      >
        Sign In with Google
      </Button>
      <p
        style={{
          color: "#8E8E93",
          marginTop: "21px",
          textAlign: "center",
          fontSize: "13px",
          fontWeight: "600",
        }}
      >
        By signing up or signing in, you are agreeing to Levels.fyi's{" "}
        <span style={{ color: "#285975" }}>Terms of Use</span>
        <br /> and <span style={{ color: "#285975" }}>Privacy Policy</span>
      </p>
    </div>
  );
}
