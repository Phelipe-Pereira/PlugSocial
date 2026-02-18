import { seedDefaultUser, fillUserUI, logoutUser, getSession } from "./auth.js";

seedDefaultUser();

document.addEventListener("DOMContentLoaded", () => {
  fillUserUI();

  const session = getSession();

  document.querySelectorAll("[data-auth='in']").forEach(el => {
    el.classList.toggle("d-none", !session);
  });

  document.querySelectorAll("[data-auth='out']").forEach(el => {
    el.classList.toggle("d-none", !!session);
  });

  document.querySelectorAll("[data-action='logout']").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      logoutUser();
      window.location.href = "../pages/login.html";
    });
  });
});
