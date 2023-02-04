let contactBurger = document.querySelector(".contact_burger");
let contactList = document.querySelector(".header_contacts-list");
contactBurger.addEventListener('click', () => {
    contactBurger.classList.toggle('active');
    contactList.classList.toggle('active');
})
let menuBurger = document.querySelector(".menu_burger");
let menuList =  document.querySelector(".nav_list");
menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('active');
    menuList.classList.toggle('active');
})