function showMenuToggle(toggleId, menuId) {
  const menuToggle = document.getElementById(toggleId);
  const menuID = document.getElementById(menuId);

  menuToggle.addEventListener('click', () => {
    menuID.classList.toggle('show-menu');
  });
}

showMenuToggle('navbar-toggle', 'navbar-menu');
