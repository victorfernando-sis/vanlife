
export async function requireAuth(request) {
  const isLoggedIn = await JSON.parse(localStorage.getItem('user'));
  const url = new URL(request.url)
  const pathname = url.pathname || ''

  if (!isLoggedIn) {
    return window.location.href = `/login?message=You must login first&redirectTo=${pathname}`;
  }
}

export const bkgColor = (type) => {
  if (type === "simple") return "orangeBkg";
  if (type === "rugged") return "greenBkg";
  if (type === "luxury") return "blackBkg";
};
