import { endpoint, apiKey } from "./modules/settings";

window.addEventListener("load", init);

function init() {
  setupForm();
  getSuperheroes();
}
function setupForm() {
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
    let validForm = true;
    const formElements = form.querySelectorAll("input");
    formElements.forEach((el) => {
      el.classList.remove("invalid");
    });

    const cbs = [...form.querySelectorAll(`[name=powers]`)];
    const checked = cbs.filter((el) => el.checked);

    const errorContainerPowers = form.querySelector("fieldset p");
    if (checked.length === 0) {
      validForm = false;
      errorContainerPowers.classList.remove("hidden");
    } else {
      errorContainerPowers.classList.add("hidden");
    }
    if (form.checkValidity() && validForm) {
      postSuperhero({
        real_name: form.elements.real_name.value,
        alias: form.elements.alias.value,
        dob: form.elements.dob.value, //TODO:
        enemies: form.elements.enemies.value,
        powers: checked.map((el) => el.value),
      });
      form.reset();
    } else {
      //!awesome
      formElements.forEach((el) => {
        if (!el.checkValidity()) {
          el.classList.add("invalid");
        }
      });
    }
  });
}
function postSuperhero(payload) {
  const postData = JSON.stringify(payload);
  fetch(endpoint + "rest/superheroes", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": apiKey,
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showSuperhero(data);
    });
}

function getSuperheroes() {
  fetch(endpoint + "rest/superheroes", {
    method: "get",
    headers: {
      accept: "application/json",
      "x-apikey": apiKey,
      "cache-control": "no-cache",
    },
  })
    .then((res) => res.json())
    .then((data) => data.forEach(showSuperhero));
}

const template = document.querySelector("template").content;
const heroContainer = document.querySelector("#herolist");
function showSuperhero(hero) {
  const clone = template.cloneNode(true);
  clone.querySelector("h2").textContent = hero.alias;
  clone.querySelector("h3 span").textContent = hero.real_name;
  const ul = clone.querySelector("ul");
  hero.powers.forEach((pow) => {
    const li = document.createElement("li");
    li.textContent = pow;
    ul.appendChild(li);
  });
  heroContainer.appendChild(clone);
}
