
export async function requireAuth() {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return window.location.href = `/login?message=You must login first`;
  }
}

export const bkgColor = (type) => {
  if (type === "simple") return "orangeBkg";
  if (type === "rugged") return "greenBkg";
  if (type === "luxury") return "blackBkg";
};
