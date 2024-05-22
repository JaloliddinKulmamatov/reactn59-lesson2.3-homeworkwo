const API__URL = "https://restcountries.com/v3.1/all";
const loading = document.querySelector(".loading");
const mainland = document.querySelector(".mainland");

import { fetchData } from "./utils.js";

fetchData(API__URL, createCard, loading);

function createCard(data) {
    data.forEach((el) => {
        let countries = document.createElement('div');
        countries.classList.add("country");
        countries.innerHTML = `
        <div class="country__right">
            <img src="${el.flags.png}" alt="${el.name.common} flag">
        </div>
        <div class="country__left">
            <h2>${el.capital}</h2>
            <p>${el.name.common}</p>
        </div>
        `;
        mainland.append(countries);
    });
}

const backTop = document.getElementById('backTop');

function backtop() {
    if (window.scrollY >= 20) {
        backTop.style.display = "flex";
    } else {
        backTop.style.display = "none";
    }
}

window.addEventListener('scroll', backtop);
