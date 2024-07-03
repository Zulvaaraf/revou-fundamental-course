function showMenuToggle(toggleId, menuId) {
  const menuToggle = document.getElementById(toggleId);
  const menuID = document.getElementById(menuId);

  menuToggle.addEventListener('click', () => {
    menuID.classList.toggle('show-menu');
  });
}

showMenuToggle('navbar-toggle', 'navbar-menu');

const formSubmit = document.getElementById('form');

formSubmit.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const gender = document.getElementById('gender').value;
  const message = document.getElementById('message').value;

  let isValid = true;

  if (name === '' || date === '') {
    isValid = false;
    alert('please fill in all required!');
  }

  if (isValid) {
    const outputName = document.getElementById('output-name');
    const outputDate = document.getElementById('output-date');
    const outputGender = document.getElementById('output-gender');
    const outputMessage = document.getElementById('output-message');

    outputName.textContent = name;
    outputDate.textContent = date;
    outputGender.textContent = gender;
    outputMessage.textContent = message;

    formSubmit.reset();
  }
});
