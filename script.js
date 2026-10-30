// script.js

const buttons = document.querySelectorAll(".category-btn");
const cards = document.querySelectorAll(".menu-card");

buttons.forEach((button) => {
button.addEventListener("click", () => {
const selectedCategory = button.dataset.category;

buttons.forEach((btn) => btn.classList.remove("active"));
button.classList.add("active");

cards.forEach((card) => {
const cardCategory = card.dataset.category;

if (
selectedCategory === "all" ||
selectedCategory === cardCategory
) {
card.classList.remove("hidden");
} else {
card.classList.add("hidden");
}
});
});
});

document.getElementById("year").textContent = new Date().getFullYear();