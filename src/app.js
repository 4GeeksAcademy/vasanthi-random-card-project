/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let suits = ["♠", "♣", "♥", "♦"];
let values = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];

function randomValue() {
  let randomValIndex = Math.floor(Math.random() * values.length);
  return values[randomValIndex];
}

function randomSuits() {
  let randomSuitsIndex = Math.floor(Math.random() * suits.length);
  return suits[randomSuitsIndex];
}

function generateRandomCard() {
  const genrateRandomVal = randomValue();
  const genrateRandomSuit = randomSuits();
  let suitsEl = document.querySelectorAll("#suits");
  suitsEl.forEach(el => {
    if (genrateRandomSuit == "♦" || genrateRandomSuit == "♥") {
      el.style.color = "red";
    } else {
      el.style.color = "black";
    }
    el.innerHTML = genrateRandomSuit;
  });
  document.querySelector("#cardNo").innerHTML = genrateRandomVal;
}

window.onload = function() {
  document.body.style.background = "green";
  return generateRandomCard();
};

window.generateRandomCardOnClick = function generateRandomCardOnClick() {
  return generateRandomCard();
};

window.generateRandomCardDimensions = function generateRandomCardDimensions() {
  let widthVal = document.getElementById("width").value;
  let heightVal = document.getElementById("height").value;
  document.querySelector("#cardNo").style.height = heightVal + "px";
  document.querySelector("#card").style.width = widthVal + "px";
};

setInterval(() => {
  generateRandomCard();
}, 10000);
