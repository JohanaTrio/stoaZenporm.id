//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//when menu is clicked
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//click outstide the sidebar the hide nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Mendapatkan elemen yang dibutuhkan
const slider = document.querySelector(".slider .item");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

// Jumlah perpindahan untuk setiap gambar
let translateXValue = 0;
const imgWidth = 300; // Atur lebar gambar sesuai dengan ukuran asli (misal 300px)

rightArrow.addEventListener("click", () => {
  // Cek apakah masih bisa geser ke kanan
  if (translateXValue > -(slider.scrollWidth - slider.clientWidth)) {
    translateXValue -= imgWidth; // Menggeser gambar ke kiri
    slider.style.transform = `translateX(${translateXValue}px)`;
  }
});

leftArrow.addEventListener("click", () => {
  // Cek apakah masih bisa geser ke kiri
  if (translateXValue < 0) {
    translateXValue += imgWidth; // Menggeser gambar ke kanan
    slider.style.transform = `translateX(${translateXValue}px)`;
  }
});
