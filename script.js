"use strict";

document.querySelector(".show-modal").addEventListener("click", function () {
  document.querySelector(".modal").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
});

document.querySelector(".close-modal").addEventListener("click", function () {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
});

document.querySelector(".show-modal").addEventListener("click", function () {
  const nameInput = document.querySelector(".nameInput").value;
  console.log(nameInput);
  document.querySelector(".modelName").textContent = nameInput;
  const surnameInput = document.querySelector(".surnameInput").value;
  console.log(surnameInput);
  document.querySelector(".modelSurname").textContent = surnameInput;
});

document.querySelector(".changebtn").addEventListener("click", function () {
  const changeName = document.querySelector(".changeName").value;
  console.log(changeName);

  const changeSurname = document.querySelector(".changeSurname").value;
  console.log(changeSurname);
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");

  if (changeName == 0) {
    document.querySelector(".nameInput").textContent;
  } else {
    document.getElementById("nameInput").value = changeName;
  }

  if (changeSurname == 0) {
    document.querySelector(".surnameInput").textContent;
  } else {
    document.getElementById("surnameInput").value = changeSurname;
  }
});
