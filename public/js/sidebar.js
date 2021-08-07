const sidebar = document.getElementById('sidebar');
const sidebarBtn = document.getElementById('sidebar_btn');
let firstClick = true;

sidebarBtn.addEventListener('click', function () {
  if (sidebar.style.display === 'none' || firstClick) {
    sidebarBtn.firstElementChild.className = 'navbar__btn active';
    sidebar.style.display = 'inherit';
    firstClick = false;
  } else {
    sidebarBtn.firstElementChild.className = 'navbar__btn';
    sidebar.style.animationName = 'close';
  }
}, false);

sidebar.addEventListener('animationend', function (event) {
  if (event.animationName === 'close') {
    sidebar.style.display = 'none';
    sidebar.style.animationName = 'open';
  }
}, false);
