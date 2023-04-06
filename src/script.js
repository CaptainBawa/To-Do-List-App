import './style.css';
import { tasks, add } from './modules/add.js';
import remove from './modules/delete.js';
import status from './modules/status.js';
import edit from './modules/edit.js';
import clearCompleted from './clear.js';

const display = () => {
  const taskContainer = document.querySelector('.task-container');
  let items = '';
  const taskDescriptions = tasks.map((task) => task.description);
  taskDescriptions.forEach((description) => {
    items += `<div id="special" class="content-container"><div class="task-sub-container">
    <input class="check" type="checkbox">
    <input class="userTask style" value="${description}">
    </div><button class="dots delete"><i class="fa-solid fa-ellipsis-vertical" style="color: #acadaf">
    </i></button><button class="hidden delete"><i class="fa-solid fa-trash-can"></i></button></div>`;
  });
  taskContainer.innerHTML = items;

  taskContainer.addEventListener('click', (event) => {
    const { target } = event;

    // Handle event for userTask input
    if (target.classList.contains('userTask')) {
      edit(event);
    }

    // Handle event for checkbox input
    if (target.classList.contains('check')) {
      status(target);
    }
  });

  taskContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
      const deleteButton = event.target;
      const taskContainer = deleteButton.closest('.content-container');
      const taskIndex = Array.from(taskContainer.parentNode.children).indexOf(taskContainer);
      remove.call(deleteButton, taskIndex); // pass the clicked button as "this" to remove()
      display();
    }
  });

  // Update styles for dynamically created elements
  const userTask = document.querySelectorAll('.userTask');
  const dots = document.querySelectorAll('.dots');
  const hidden = document.querySelectorAll('.hidden');
  const checkbox = document.querySelectorAll('.check');
  tasks.forEach((task, i) => {
    if (task.completed === true) {
      userTask[i].style.textDecoration = 'line-through';
      userTask[i].style.color = 'rgba(139, 134, 134, 0.8)';
      userTask[i].disabled = true;
      dots[i].style.display = 'none';
      if (hidden[i]) { // check that hidden[i] exists before accessing its style property
        hidden[i].style.display = 'block';
      }
      checkbox[i].checked = true;
    } else {
      userTask[i].style.textDecoration = 'none';
      userTask[i].style.color = 'inherit';
      userTask[i].disabled = false;
      dots[i].style.display = 'block';
      if (hidden[i]) { // check that hidden[i] exists before accessing its style property
        hidden[i].style.display = 'none';
      }
      checkbox[i].checked = false;
    }
  });

  const clearBtn = document.querySelector('.clear-btn');
  clearBtn.addEventListener('click', clearCompleted);
  clearBtn.addEventListener('click', display);
};

const span = document.querySelector('span');
const form = document.getElementById('form');
span.addEventListener('click', add);
span.addEventListener('click', display);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  add();
  display();
  const userInput = document.querySelector('.userInput');
  userInput.value = '';
});

display();
