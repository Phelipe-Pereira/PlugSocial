import { isValidEmail, passwordPolicy } from "./validators.js";

const USERS_KEY = "id.users.v1";
const SESSION_KEY = "id.session.v1";

function getUsers(){
  const raw = localStorage.getItem(USERS_KEY);
  if(!raw) return [];
  try { return JSON.parse(raw); } catch { return []; }
}
function saveUsers(users){
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function seedDefaultUser(){
  const users = getUsers();
  if(users.some(u => u.email === "aluno@exemplo.com")) return;

  users.push({
    name: "Aluno Exemplo",
    email: "aluno@exemplo.com",
    password: "Aluno1234"
  });
  saveUsers(users);
}

export function registerUser({ name, email, password, confirmPassword }){
  const cleanName = String(name || "").trim();
  const cleanEmail = String(email || "").trim().toLowerCase();

  if(cleanName.length < 3){
    return { ok:false, message:"Informe seu nome (mín. 3 caracteres)." };
  }
  if(!isValidEmail(cleanEmail)){
    return { ok:false, message:"E-mail inválido. Verifique e tente novamente." };
  }

  const policy = passwordPolicy(password);
  if(policy.score < 3){
    return { ok:false, message:"Senha fraca. Use 8+ caracteres com maiúsculas, minúsculas e números." };
  }

  if(password !== confirmPassword){
    return { ok:false, message:"As senhas não coincidem. Confirme novamente." };
  }

  const users = getUsers();
  if(users.some(u => u.email === cleanEmail)){
    return { ok:false, message:"Este e-mail já está cadastrado. Tente fazer login." };
  }

  users.push({ name: cleanName, email: cleanEmail, password });
  saveUsers(users);
  return { ok:true, message:"Cadastro concluído! Agora você pode entrar." };
}

export function loginUser({ email, password }){
  const cleanEmail = String(email || "").trim().toLowerCase();
  const cleanPass = String(password || "");

  const users = getUsers();
  const found = users.find(u => u.email === cleanEmail && u.password === cleanPass);

  if(!found){
    return { ok:false, message:"Credenciais inválidas. Verifique e tente novamente." };
  }

  sessionStorage.setItem(SESSION_KEY, JSON.stringify({
    email: found.email,
    name: found.name,
    ts: Date.now()
  }));

  return { ok:true, message:"Login realizado com sucesso." };
}

export function logoutUser(){
  sessionStorage.removeItem(SESSION_KEY);
}

export function getSession(){
  const raw = sessionStorage.getItem(SESSION_KEY);
  if(!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

export function requireAuth(){
  const session = getSession();
  if(!session){
    window.location.href = "./login.html";
    return false;
  }
  return true;
}

export function fillUserUI(){
  const session = getSession();
  const userNameElement = document.querySelector("[data-user-name]");
  if(userNameElement) {
    userNameElement.textContent = session?.name || "Visitante";
  }
}

const session = getSession();
const isLoggedIn = Boolean(session);
