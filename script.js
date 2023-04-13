function checkAll() {
  const input = document.querySelector('#check');
  input.checked = false;
}
window.onload = function () {
  window.addEventListener('resize', checkAll, false);
};

window.addEventListener('click', function () {
  var checkbox = document.querySelector('#check');
  checkbox.checked = !checkbox.checked;
});

const navbar = document.querySelector('.navigation');
const navHeight = navbar.getBoundingClientRect().height;
console.log(navHeight);
