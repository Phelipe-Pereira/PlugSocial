import { isValidEmail, required } from "./validators.js";
import { showAlert, hideAlert } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("alertBox");

  if (!form) return;

  hideAlert(alertBox);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("cName")?.value;
    const email = document.getElementById("cEmail")?.value;
    const msg = document.getElementById("cMsg")?.value;

    if (!required(name)) {
      showAlert(alertBox, "warning", "Informe seu nome.");
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

    if (!required(msg) || msg.trim().length < 10) {
      showAlert(
        alertBox,
        "warning",
        "Mensagem muito curta. Escreva pelo menos 10 caracteres.",
      );
      return;
    }

    showAlert(
      alertBox,
      "success",
      "Mensagem enviada (simulação)! Obrigado por contribuir.",
    );
    form.reset();
  });
});
