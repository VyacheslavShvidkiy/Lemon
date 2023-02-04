let contactBurger = document.querySelector(".contact_burger");
let contactList = document.querySelector(".header_contacts-list");
contactBurger.addEventListener('click', () => {
    contactBurger.classList.toggle('active');
    contactList.classList.toggle('active');
})