import { endpoint, apiKey } from "./modules/settings";

const form = document.querySelector("form");
window.form = form;
const elements = form.elements;
window.elements = elements;

elements.unknown.addEventListener("click", (e) => {
  elements.dob.disabled = !elements.dob.disabled;
});

form.setAttribute("novalidate", true);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.checkValidity()) {
    //send to restdb/api
    console.log("SUBMIT READY");
  } else {
    //!aweseom
    const formElements = form.querySelectorAll("input");
    formElements.forEach((el) => {
      el.classList.remove("invalid");
      if (!el.checkValidity()) {
        el.classList.add("invalid");
      }
    });
  }
});

/*
1. remove all error messages
2. loop through 
3. show error messages
  4. create with JS
  5. have them in the DOM hide/show
  6. 
  const postData = JSON.stringify(data);
fetch("someurl", {
  method: "post",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "x-apikey": "your-cors-api-key",
    "cache-control": "no-cache"
  },
  body: postData
})
  .then(res => res.json())
  .then(data => console.log(data));
*/
