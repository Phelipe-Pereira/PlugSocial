import { requireAuth } from "./auth.js";

document.addEventListener("DOMContentLoaded", () => {
  requireAuth({ redirectTo: "./login.html" });
});
