"use strict";

const btn = document.querySelector(".btn");
const form = document.querySelector("form");
const emailInput = document.querySelector(".email");
const errMessage = document.querySelector(".error-message");
const errIcon = document.querySelector(".error-icon");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    emailInput.value === "" ||
    !emailInput.value.includes("@") ||
    !emailInput.value.includes(".")
  ) {
    emailInput.classList.add("notValid");
    errMessage.classList.remove("error-hidden");
    errIcon.classList.remove("error-hidden");
  } else {
    emailInput.value = "";
  }
});

form.addEventListener("focusout", () => {
  emailInput.classList.remove("notValid");
  errMessage.classList.add("error-hidden");
  errIcon.classList.add("error-hidden");
});