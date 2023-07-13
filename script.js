/*
const searchInput = document.querySelector("#input"); 

const parks = document.querySelectorAll(".card");

searchInput.addEventListener('keyup', function(event){
    const word = event.target.value.toLowerCase();

    parks.forEach(item =>{
        item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "flex") : (item.style.display = "none");
    })
})
*/


const newSearch = document.querySelector("#input");

const canadaParks = document.querySelectorAll(".card");

newSearch.addEventListener("keydown", function(event){
    const newText = event.target.value.toLowerCase();

    canadaParks.forEach(item => {
        item.querySelector("p").textContent.toLowerCase().includes(newText) ? (item.style.display = "flex") : (item.style.display = "none");
    })
})

gsap.to(".card", {
    opacity: 1,
    delay: 0.3,
    duration: 3
})
