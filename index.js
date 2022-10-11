"use strict";

const OPTIONS_BTN = document.getElementById("options-btn");

const OPTIONS_MENU = document.getElementById("options-menu");

OPTIONS_BTN.onclick = () => {
  if (OPTIONS_MENU.style.display === "block") {
    OPTIONS_MENU.style.display = "none";
  } else {
    OPTIONS_MENU.style.display = "block";
  }
};
