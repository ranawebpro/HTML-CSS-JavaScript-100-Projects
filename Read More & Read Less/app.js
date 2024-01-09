const containerTwo = document.querySelector(".content-container-2");
const btn = document.getElementById("readMoreBtn");

btn.addEventListener("click", () => {
  containerTwo.classList.toggle("toggle");
  btn.textContent = containerTwo.classList.contains("toggle") ? "Read More" : "Read Less";
});
