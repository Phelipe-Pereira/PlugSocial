export function isValidEmail(email) {
  const value = String(email || "")
    .trim()
    .toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

export function passwordPolicy(password) {
  const value = String(password || "");
  const checks = {
    minLen: value.length >= 8,
    hasUpper: /[A-Z]/.test(value),
    hasLower: /[a-z]/.test(value),
    hasNumber: /\d/.test(value),
  };

  const score = Object.values(checks).filter(Boolean).length;

  let label = "Fraca";
  if (score >= 4) label = "Forte";
  else if (score >= 3) label = "Média";

  return { checks, score, label };
}

export function required(value) {
  return String(value || "").trim().length > 0;
}
