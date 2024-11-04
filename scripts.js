document.getElementById('add-button').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('todo-input');
  const linkInput = document.getElementById('todo-link');
  const taskValue = taskInput.value.trim();
  const linkValue = linkInput.value.trim();

  if (taskValue === '') return;

  const listItem = document.createElement('li');

  const taskSpan = document.createElement('span');
  taskSpan.innerText = taskValue;
  listItem.appendChild(taskSpan);

  if (linkValue) {
    const link = document.createElement('a');
    link.href = linkValue;
    link.innerText = ' [Link]';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    listItem.appendChild(link);
  }

  const doneButton = document.createElement('button');
  doneButton.innerText = 'Mark as Done';
  doneButton.className = 'done';
  doneButton.addEventListener('click', function () {
    listItem.classList.toggle('completed');
  });

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.className = 'delete';
  deleteButton.addEventListener('click', function () {
    listItem.remove();
  });

  listItem.appendChild(doneButton);
  listItem.appendChild(deleteButton);

  document.getElementById('todo-list').appendChild(listItem);

  taskInput.value = '';
  linkInput.value = '';
}
