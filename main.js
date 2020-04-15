import { endpoint, apiKey } from "./modules/settings";

const form = document.querySelector("form");
window.form = form;
const elements = form.elements;
window.elements = elements;

elements.unknown.addEventListener("click", (e) => {
  elements.dob.disabled = !elements.dob.disabled;
});

elements.real_name.addEventListener("keyup", (e) => {
  document.querySelector("h1").textContent = e.target.value;
});
form.setAttribute("novalidate", true);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submitted");
});
