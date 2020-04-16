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
  if (form.checkValidity()) {
    //send to restdb/api
    console.log("SUBMIT READY");
  } else {
    if (!form.elements.real_name.checkValidity()) {
      const err = form.elements.real_name.validity;
      if (err.valueMissing) {
        console.log("please fill in whatever");
      }
    }
  }
});

/*
1. remove all error messages
2. loop through 
3. show error messages
  4. create with JS
  5. have them in the DOM hide/show
  6. 
*/
