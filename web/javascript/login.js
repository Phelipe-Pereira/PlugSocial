import { loginUser } from "./auth.js";
import { isValidEmail } from "./validators.js";
import { showAlert, hideAlert } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const alertBox = document.getElementById("alertBox");

  if (!form) return;

  hideAlert(alertBox);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email")?.value;
    const password = document.getElementById("password")?.value;

    if (!isValidEmail(email)) {
      showAlert(
        alertBox,
        "warning",
        "E-mail inválido. Verifique o formato e tente novamente.",
      );
      return;
    }

    if (String(password || "").length < 1) {
      showAlert(alertBox, "warning", "Informe sua senha.");
      return;
    }

    const result = loginUser({ email, password });
    if (!result.ok) {
      showAlert(alertBox, "danger", result.message);
      return;
    }

    showAlert(alertBox, "success", "Login realizado! Redirecionando…");
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 600);
  });
});
