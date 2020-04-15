import { endpoint, apiKey } from "./modules/settings";

const form = document.querySelector("form");
window.form = form;
const elements = form.elements;
window.elements = elements;

elements.unknown.addEventListener("click", (e) => {
  elements.dob.disabled = !elements.dob.disabled;
  setTimeout(() => {
    elements.unknown.click();
  }, 1000);
});

elements.real_name.addEventListener("click", (e) => {
  elements.real_name.blur();
});
