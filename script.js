const initialTodolist = [
  'Buy Mango',
  'Drink water',
  'Exercise 2 hours',
  'Play video games',
  'Shop for groceries',
];

document.querySelector('#submit').addEventListener('click', (event) => {
  const textBoxValue = document.querySelector('#todo-text').value;
  if (textBoxValue) {
    addTodoListItem(textBoxValue);
  }
});

function addTodoListItem(todoText) {
  const list = document.getElementById('todo-list');
  const item = document.createElement('li');
  const doneButton = getDoneButtonElement();
  const removeButton = getRemoveButtonElement();

  item.innerHTML = `<span>${todoText}</span>`;
  item.appendChild(doneButton);
  item.appendChild(removeButton);
  list.appendChild(item);
}

function getDoneButtonElement() {
  const doneButton = document.createElement('button');
  doneButton.classList.add('done');
  doneButton.classList.add('btn-success');
  doneButton.classList.add('btn');
  doneButton.innerHTML = `<i class="bi bi-check-lg"></i>`;
  doneButton.addEventListener('click', setItemAsDone);
  return doneButton;
}

function getRemoveButtonElement() {
  const removeButton = document.createElement('button');
  removeButton.classList.add('remove');
  removeButton.classList.add('btn');
  removeButton.classList.add('btn-danger');
  removeButton.innerHTML = `<i class="bi bi-trash"></i>`;
  removeButton.addEventListener('click', removeItem);
  return removeButton;
}

function setItemAsDone(event) {
  const currentEl = event.target;
  const parent = currentEl.parentElement;
  parent.removeChild(currentEl);
  const listEl = parent.parentElement;
  listEl.removeChild(parent);

  const doneList = document.getElementById('done-list');
  doneList.appendChild(parent);
}

function removeItem(event) {
  const listItemElement = event.target.parentElement;
  listItemElement.parentElement.removeChild(listItemElement);
}

document.addEventListener('DOMContentLoaded', (event) => {
  for (let i = 0; i < initialTodolist.length; i++) {
    addTodoListItem(initialTodolist[i])
  }
});

// document.querySelector('.done').addEventListener('click', setItemAsDone);

// document.querySelector('.remove').addEventListener('click', removeItem);