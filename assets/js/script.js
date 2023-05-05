'use strict'

const addEventOnElements = function(elements, eventType, callback){
    for(let i = 0, len = elements.length; i<len; i++){
        elements[i].addEventListner(eventType, callback);
    }
}

// PRELOADER

const preloader = document.querySelector("[data-preloader]");
const circle = document.querySelector("[data-circle]");

window.addEventListener("load", function(){
    preloader.classList.add("loaded");
    circle.style.animation = "none";
    document.body.classList.add("loaded");
})

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglerNavbar = function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navToggler, "click", togglerNavbar);