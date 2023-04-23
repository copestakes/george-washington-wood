const input = document.querySelector('#check');
const nav = document.querySelector('nav ul');
const anchors = document.querySelectorAll('a');

function checkAll() {
  input.checked = false;
}
window.onload = function () {
  window.addEventListener('resize', checkAll, false);
  nav.addEventListener('click', checkAll, false);
};

anchors.forEach((e) => {
  e.addEventListener('click', checkAll, false);
});

const backBtn = document.querySelector(".back-btn");

window.onscroll = function() {
  if (window.scrollY > 100) {
    backBtn.style.display = "block";
  } else {
    backBtn.style.display = "none";
  }
};

// window.addEventListener('click', function () {
//   let checkbox = document.querySelector('#check');
//   checkbox.checked;
//   checkbox.checked = !checkbox.checked;
// });

// const navbar = document.querySelector('.navigation');
// const navHeight = navbar.getBoundingClientRect().height;
// console.log(navHeight);
