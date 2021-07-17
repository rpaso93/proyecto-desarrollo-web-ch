const sidebar = document.getElementById('sidebar');
const sidebarBtn = document.getElementById('sidebar_btn');

sidebarBtn.addEventListener('click', function(){
  if(sidebar.style.display === 'none'){
    sidebarBtn.className = 'navbar__bars active'
    sidebar.style.display = 'inherit';
  }else{
    sidebarBtn.className = 'navbar__bars'
    sidebar.style.display = 'none'
  }
})