import { registerUser } from "./auth.js";
import { isValidEmail, passwordPolicy } from "./validators.js";
import { showAlert, hideAlert } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const alertBox = document.getElementById("alertBox");

  const pwd = document.getElementById("password");
  const pwdStrength = document.getElementById("pwdStrength");
  const pwdBar = document.getElementById("pwdBar");

  if (!form) return;

  hideAlert(alertBox);

  function updatePasswordUI() {
    if (!pwd || !pwdStrength || !pwdBar) return;

    const pol = passwordPolicy(pwd.value);
    pwdStrength.textContent = pol.label;

    const pct = Math.min(100, (pol.score / 4) * 100);
    pwdBar.style.width = `${pct}%`;

    pwdBar.className = "progress-bar";
    if (pol.label === "Fraca") pwdBar.classList.add("bg-danger");
    else if (pol.label === "Média") pwdBar.classList.add("bg-warning");
    else pwdBar.classList.add("bg-success");
  }

  if (pwd) {
    pwd.addEventListener("input", updatePasswordUI);
    updatePasswordUI();
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value;
    const email = document.getElementById("email")?.value;
    const password = document.getElementById("password")?.value;
    const confirmPassword = document.getElementById("confirmPassword")?.value;

    if (String(name || "").trim().length < 3) {
      showAlert(alertBox, "warning", "Informe seu nome (mín. 3 caracteres).");
      return;
    }

    if (!isValidEmail(email)) {
      showAlert(
        alertBox,
        "warning",
        "E-mail inválido. Verifique e tente novamente.",
      );
      return;
    }

    const result = registerUser({ name, email, password, confirmPassword });
    if (!result.ok) {
      showAlert(alertBox, "danger", result.message);
      return;
    }

    showAlert(alertBox, "success", `${result.message} Redirecionando…`);
    setTimeout(() => {
      window.location.href = "./login.html";
    }, 800);
  });
});
