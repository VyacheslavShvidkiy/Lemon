// Contact burger
let contactBurger = document.querySelector(".contact_burger");
let contactList = document.querySelector(".header_contacts-list");
contactBurger.addEventListener('click', () => {
    contactBurger.classList.toggle('active');
    contactList.classList.toggle('active');
})
// Menu burger
let menuBurger = document.querySelector(".menu_burger");
let menuList =  document.querySelector(".nav_list");
menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('activ');
    menuList.classList.toggle('active');
})

// Accordion
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activated");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
