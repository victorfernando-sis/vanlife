import React from "react";

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
  }

  return (
    <div className="login-page">
      <h1>Sign in to your account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          aria-label="email"
          placeholder="Email address"
          className="login-email"
        />
        <input
          type="password"
          aria-label="password"
          placeholder="Password"
          className="login-password"
        />
        <button className='btn btn_primary'>Sign in</button>
      </form>
      <p>
        Don't have an account? <a href="/"> Create one now</a>
      </p>
    </div>
  );
}

export default Login;
