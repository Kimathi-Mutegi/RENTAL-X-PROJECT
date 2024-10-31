/*1.SELECTING ELEMENTS*/
const menuBtn = document.getElementById("menu-btn"); //Selects the element with the ID "menu-btn" and stores it in the menuBtn variable.
const navLinks = document.getElementById("nav-links");// Selects the element with the ID "nav-links" and stores it in the navLinks variable.
const menuBtnIcon = menuBtn.querySelector("i");//Selects the first <i> element inside the menuBtn element and stores it in the menuBtnIcon variable

/*2.ADDING EVENT LISTENERS
For Menu Button Click*/
menuBtn.addEventListener("click", (e) => {//line essentially says: "Hey menuBtn, whenever someone clicks you, run the following function."

/*3.TOGGLING THE NAVIGATION MENU*/
  navLinks.classList.toggle("open");/*Toggles the "open" class on the navLinks element. If navLinks already has the "open" class, 
  it removes it (hiding the menu); if it doesn’t have it, it adds it (showing the menu).*/

/*4.CHECKING IF MENU IS OPEN*/
  const isOpen = navLinks.classList.contains("open");//Checks if navLinks has the "open" class and stores the result (true or false) in 
  //the isOpen variable.
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");// Sets the class of menuBtnIcon to "ri-close-line".
});

navLinks.addEventListener("click", (e) => {/*navLinks: This is a reference to the element in your HTML that contains your navigation links,
  typically a ul or div with the ID "nav-links".
  .addEventListener("click", (e) => {: This method adds an event listener to navLinks. It listens for a "click" event. When any part of 
  navLinks is clicked, the function inside the curly braces runs. */
  navLinks.classList.remove("open");//Removes the "open" class from navLinks, effectively hiding the menu.
  menuBtnIcon.setAttribute("class", "ri-menu-line");//Sets the class of menuBtnIcon to "ri-menu-line", ensuring the menu icon is displayed again.
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__links", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".steps__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".service__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".service__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

ScrollReveal().reveal(".experience__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".download__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".download__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".download__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".download__links", {
  ...scrollRevealOption,
  delay: 1500,
});