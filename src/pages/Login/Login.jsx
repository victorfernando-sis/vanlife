import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Warning from "../../components/Warning";
import { createNewUser, signinUser, signinWithGoogle } from "../../api/auth";
import { FcGoogle } from "react-icons/fc";


export function loader({ request }) {
  return new URL(document.location).searchParams.get("message");
}

export default function Login() {
  const [formName, setFormName] = useState("signin");
  const message = useLoaderData();

  function changeForm(name = "signin") {
    setFormName(name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const action = formData.get("action");
    try {
      const data =
        action === "signin"
          ? signinUser({ email, password })
          : createNewUser({ email, password });

      const redirectTo =
        new URL(window.location.href).searchParams.get("redirectTo") || "/host";
      localStorage.setItem("user", JSON.stringify(data));
      return (window.location.href = `${redirectTo}`);
    } catch (error) {
      return (window.location.href = `?message=${error.message}`);
    }
  }

  return (
    <div className="login-page">
      {message && <Warning message={message} />}
      {formName === "signin" ? (
        <h1>Sign in to your account</h1>
      ) : (
        <h1>Create your account</h1>
      )}
      <form
        method="post"
        name={formName}
        onSubmit={handleSubmit}
        className="login-form"
      >
        <input type="hidden" name="action" value={formName} />
        <input
          type="text"
          name="email"
          aria-label="email"
          placeholder="Email address"
          className="login-email"
        />
        <input
          type="password"
          name="password"
          aria-label="password"
          placeholder="Password"
          className="login-password"
        />
        {formName === "signup" && (
          <input
            type="password"
            name="confirmPassword"
            aria-label="Confirm Password"
            placeholder="Confirm Password"
            className="login-password"
          />
        )}
        <button className="btn btn_primary" name="action">
          {formName === "signup" ? "Sign up" : "Sign in"}
        </button>
      </form>
      <span>
        <strong>or</strong>
      </span>
      <br></br>
      <button className="google-button" onClick={() => signinWithGoogle()}><FcGoogle/> Sign in with Google</button>
      {formName === "signup" ? (
        <p>
          Already have an acount?
          <button className="btn-link" onClick={() => changeForm("signin")}>
            Sign in
          </button>
        </p>
      ) : (
        <p>
          Don't have an account?
          <button className="btn-link" onClick={() => changeForm("signup")}>
            Create one now
          </button>
        </p>
      )}
    </div>
  );
}
