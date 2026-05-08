"use strict";

// Menüknopf

function toggleMenu() {
    const menu = document.getElementById("menu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } 
    else {
        menu.style.display = "block";
    }
}

// Checkliste

function addItem() {
    const input = document.getElementById("input");
    const list = document.getElementById("list");

    if (input.value.trim() === "") {
        return;
    }

    const newItem = document.createElement("li");
    newItem.textContent = input.value;

    list.appendChild(newItem);

    input.value = "";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = function () {
        newItem.remove();
    };
    newItem.appendChild(deleteBtn);
}

// lucky-button

let score = 0;
let chance = 100;

function riskButton() {

   
    let random = Math.random() * 100;

   
    if (random < chance) {

      
        score++;
        chance -= 0.5;

    } else {

       
        score = 0;
        chance = 100;
    }

    const button = document.getElementById("risk-button");
    button.textContent = score;
}