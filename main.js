let textarea = document.querySelector('.textarea');
textarea.addEventListener('keyup', (e) => {
    textarea.style.height = 80 + 'px';
    let scHeight = e.target.scrollHeight;
    textarea.style.height = scHeight + 'px';
})

let PROFILE_PICTURE = document.querySelector('.PROFILE_PICTURE');
let DROP_DOWN_MENU = document.querySelector('.DROP_DOWN_MENU');
$(document).ready(function() {
    $(".PROFILE_PICTURE").click(function() {
        $(".DROP_DOWN_MENU").slideToggle(500);
    });
});


let FA_BARS = document.querySelector('.fa-bars');
let MAIN_LEFT_CONTAINER = document.querySelector('.MAIN_LEFT_CONTAINER');
let MAIN_LEFT_CONTAINER_FIRST_UL = document.querySelector('.MAIN_LEFT_CONTAINER_FIRST_UL');
let MAIN_LEFT_CONTAINER_SECOND_UL = document.querySelector('.MAIN_LEFT_CONTAINER_SECOND_UL');
FA_BARS.addEventListener('click', () => {
    MAIN_LEFT_CONTAINER.classList.toggle('MAIN_LEFT_CONTAINER_VISIBLE');
    MAIN_LEFT_CONTAINER_FIRST_UL.classList.toggle('MAIN_LEFT_CONTAINER_FIRST_UL_VISIBLE');
    MAIN_LEFT_CONTAINER_SECOND_UL.classList.toggle('MAIN_LEFT_CONTAINER_SECOND_UL_VISIBLE');
})

let DARK_LIGHT_BOX = document.querySelector('.DARK_LIGHT_BOX');
let DARK_LIGHT_BOX_CIRCLE = document.querySelector('.DARK_LIGHT_BOX_CIRCLE');
DARK_LIGHT_BOX.addEventListener("click", () => {
    DARK_LIGHT_BOX.classList.toggle('DARK_LIGHT_BOX_DARK');
    DARK_LIGHT_BOX_CIRCLE.classList.toggle('DARK_LIGHT_BOX_CIRCLE_DARK');
    
    document.body.classList.toggle("DARK_THEME");
    
    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
})

if (localStorage.getItem("theme") == "light") {
    DARK_LIGHT_BOX.classList.remove('DARK_LIGHT_BOX_DARK');
    DARK_LIGHT_BOX_CIRCLE.classList.remove('DARK_LIGHT_BOX_CIRCLE_DARK');
    
    document.body.classList.remove("DARK_THEME");
    
} else if (localStorage.getItem("theme") == "dark") {
    DARK_LIGHT_BOX.classList.add('DARK_LIGHT_BOX_DARK');
    DARK_LIGHT_BOX_CIRCLE.classList.add('DARK_LIGHT_BOX_CIRCLE_DARK');
    
    document.body.classList.add("DARK_THEME");
    
} else {
    localStorage.setItem("theme", "light");
}
