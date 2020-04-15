import { endpoint, apiKey } from "./modules/settings";

const form = document.querySelector("form");
window.form = form;
const elements = form.elements;
window.elements = elements;
elements.enemies.value = 12;
