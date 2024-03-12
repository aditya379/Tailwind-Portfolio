function toggleActive(clickedItem) {
  let menuItems = document.querySelectorAll(".activeclick");
  menuItems.forEach(item => {
    item.classList.remove("active");
  });
  clickedItem.classList.add("active");
}

const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carouselInner = document.querySelector(".carousel-inner");

let currentIndex = 0;
const totalItems = document.querySelectorAll(".carousel-item").length;
const itemWidth = carousel.offsetWidth;

function slide(direction) {
  if (direction === "next") {
    currentIndex = currentIndex < totalItems - 1 ? currentIndex + 1 : 0;
  } else {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : totalItems - 1;
  }
  carouselInner.style.transform = `translateX(-${
    currentIndex * itemWidth
  }px)`;
}

prevBtn.addEventListener("click", () => slide("prev"));
nextBtn.addEventListener("click", () => slide("next"));

(function sendMsg(){
  let button=document.getElementById('sendMsg').addEventListener('click',()=>{
    alert("under development")
  })
})()

