export function showAlert(alertBox, type, msg) {
  if (!alertBox) return;

  alertBox.className = `alert alert-${type}`;
  alertBox.textContent = msg;
  alertBox.classList.remove("d-none");
}

export function hideAlert(alertBox) {
  if (!alertBox) return;
  alertBox.classList.add("d-none");
}
