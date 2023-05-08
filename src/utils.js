export async function requireAuth(request) {
  const isLoggedIn = await JSON.parse(localStorage.getItem("user"));
  const url = new URL(request.url);
  const pathname = url.pathname || "";

  if (!isLoggedIn) {
    return (window.location.href = `/login?message=You must login first&redirectTo=${pathname}`);
  }
}

export const bkgColor = (type) => {
  if (type === "simple") return "orangeBkg";
  if (type === "rugged") return "greenBkg";
  if (type === "luxury") return "blackBkg";
};

export function getErrorMessage(errorCode) {
  let errorMessage = "An unknown error occurred. Please try again later.";
  switch (errorCode) {
    case "auth/invalid-email":
      errorMessage = "Please enter a valid email address.";
      break;
    case "auth/user-not-found":
      errorMessage = "We could not find a user with that email address.";
      break;
    case "auth/wrong-password":
      errorMessage = "The password you entered is incorrect.";
      break;
    case "auth/different-password":
      errorMessage = "The passwords don't match";
    default:
  }
  return errorMessage;
}

export function validateLoginForm(data) {
  if (data.password !== data.confirmPassword) {
    throw new Error("Passwords do not match!");
  }
}
