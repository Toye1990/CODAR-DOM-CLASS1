const header = document.querySelector(".header-container")
const navbar = document.querySelector(".nav-section")
const hamburger = document.querySelector(".hamburger")


hamburger.addEventListener("click", () =>{
  navbar.classList.toggle("active")
  header.classList.toggle("active")
})

