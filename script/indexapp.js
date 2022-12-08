"use strict";
//#region ***  DOM references                           ***********
let htmlLogin, htmlButton;

const requestDelay = 500;
var resetTime = 30;
//#endregion

//#region ***  Callback-Visualisation - show___         ***********
//#endregion

//#region ***  Callback-No Visualisation - callback___  ***********
const callbackShowOverlay = function () {
  htmlLogin.classList.add("active");
};

const callbackLoginSubmit = function () {
  htmlLogin.classList.remove("active");
};
//#endregion

//#region ***  Data Access - get___                     ***********
//#endregion

//#region ***  Event Listeners - listenTo___            ***********
const listenToButton = function () {
  htmlButton.addEventListener("click", function () {
    console.log("button clicked");
    callbackShowOverlay();
  });
};
//#endregion

//#region ***  Init / DOMContentLoaded                  ***********
const init = function () {
  console.log("DOM Content Loaded.");
  htmlLogin = document.querySelector(".js-login");
  htmlButton = document.querySelector(".js-button");

  listenToButton();
};

document.addEventListener("DOMContentLoaded", init);
//#endregion
