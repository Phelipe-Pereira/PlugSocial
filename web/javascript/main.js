import { seedDefaultUser, fillUserUI, updateAuthUI, bindLogoutButtons } from "./auth.js";

seedDefaultUser();

document.addEventListener("DOMContentLoaded", () => {
  fillUserUI();
  updateAuthUI();
  bindLogoutButtons();
});