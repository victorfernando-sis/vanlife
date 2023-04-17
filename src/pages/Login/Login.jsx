import React from "react";
import { useLoaderData, Form } from "react-router-dom";
import Warning from "../../components/Warning";
import { loginUser } from "../../api";

export function loader({ request }) {
  return new URL(document.location).searchParams.get("message");
}
export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const data = await loginUser({ email, password });
    const redirectTo = new URL(request.url).searchParams.get('redirectTo') || '/host'
    localStorage.setItem("user", JSON.stringify(data));
    return (window.location.href = `${redirectTo}`);
  } catch (error) {
    return error.message;
  }
}

export default function Login() {
  const message = useLoaderData();

  return (
    <div className="login-page">
      {message && <Warning message={message} />}
      <h1>Sign in to your account</h1>
      <Form method="post" className="login-form" replace>
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
        <button className="btn btn_primary">Sign in</button>
      </Form>
      <p>
        Don't have an account? <a href="/"> Create one now</a>
      </p>
    </div>
  );
}
