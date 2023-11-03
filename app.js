const form = document.querySelector('form');
const inputField = document.querySelector('.input-field');
const listz = document.querySelector('.lists');
const input2 = document.querySelector('.input-2');

const lightMode = document.querySelector('.sun-light');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission
  const inputValue = inputField.value.trim();
  if (inputValue) {
    addTodo(inputValue);
    inputField.value = ''; // Clear the input field
  }
});

function addTodo(input) {
  const listItem = document.createElement('li');
  listItem.classList.add('todo-li');

  const spanEl = document.createElement('span');
  spanEl.classList.add('close');
  spanEl.innerHTML = `<img src="./images/icon-cross.svg">`;

  spanEl.addEventListener('click', function () {
    deleteItem(listItem);
  });

  listItem.innerHTML = `
    <div class="li-con">
    <div class="circular-checkbox">
      <input type="checkbox" id="myCheckbox" />
      <label for="myCheckbox"><img src="./images/icon-check.svg" alt=""></label>
    </div>
    <p>${input}</p>
    <input class="input-2" type="text">
    </div>
    `;
  const inputField = listItem.querySelector('.input-2');
  const textElement = listItem.querySelector('p');

  inputField.value = input;
  textElement.value = input;
  inputField.style.display = 'none';

  let isEditing = false;

  listz.addEventListener('dblclick', function () {
    if (!isEditing) {
      isEditing = true;
      const inputField = listItem.querySelector('.input-2');
      const textElement = listItem.querySelector('p');

      inputField.style.display = 'block'; // Show the input field
      textElement.style.display = 'none'; // Hide the text element

      // Add an event listener to the input field
      inputField.addEventListener('keyup', function (event) {
        if (event.key === 'Enter' || event.keyCode === 13) {
          textElement.textContent = inputField.value; // Update the text
          textElement.style.display = 'block'; // Show the text element
          inputField.style.display = 'none'; // Hide the input field
          isEditing = false; // Editing is complete
        }
      });
    }
  });

  listItem.appendChild(spanEl);
  listz.appendChild(listItem);
  let todoli = document.querySelectorAll('.todo-li');

  const info = document.querySelectorAll('.choice p');
  info.forEach((element) => {
    element.addEventListener('click', function () {
      info.forEach((item, index) => {
        item.classList.remove('active');
        console.log(item, index); // This line should log 'item'
      });
      element.classList.add('active');
    });
  });
}

function deleteItem(itemToDelete) {
  itemToDelete.remove();
}

lightMode.addEventListener('click', function () {
  document.body.classList.toggle('colors');
});
