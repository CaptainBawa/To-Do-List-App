// These lines of code are importing modules and stylesheets into the JavaScript file.
import './style.css';
import { tasks, addTask } from './modules/add.js';
import remove from './modules/delete.js';
import taskStatus from './modules/status.js';
import edit from './modules/edit.js';
import modify from './modules/modify.js';
// import clearCompleted from './clear.js';

/*
 This function displays a list of tasks with checkboxes, input fields, and buttons for editing and
 deleting. */
const display = () => {
  const taskContainer = document.querySelector('.task-container');
  let elements = '';
  for (let i = 0; i < tasks.length; i += 1) {
    elements += `<div id="container" class="content-container"><div class="content-sub-container">
    <input class="check" type="checkbox">
    <input class="userTask style" value="${tasks[i].description}">
    </div><button class="dots-icon delete"><i class="fa-solid fa-ellipsis-vertical" style="color: #acadaf"></i>
    </button><button class="hidden-icon delete"><i class="fa-solid fa-trash-can"></i></button></div>`;
  }
  taskContainer.innerHTML = elements;
  for (let i = 0; i < tasks.length; i += 1) {
    const dotsIcon = document.querySelectorAll('.dots-icon');
    const hidden = document.querySelectorAll('.hidden-icon');
    hidden[i].addEventListener('click', remove);
    const userTask = document.querySelectorAll('.userTask');
    userTask[i].addEventListener('keyup', edit);
    userTask[i].addEventListener('click', modify);
    const checkbox = document.querySelectorAll('.check');
    for (let i = 0; i < checkbox.length; i += 1) {
      checkbox[i].addEventListener('click', () => {
        taskStatus(checkbox[i]);
      });
    }

    if (tasks[i].completed === true) {
      userTask[i].style.textDecoration = 'line-through';
      userTask[i].style.color = 'rgba(139, 134, 134, 0.8)';
      userTask[i].disabled = true;
      dotsIcon[i].style.display = 'none';
      hidden[i].style.display = 'block';
      checkbox[i].checked = true;
    } else {
      userTask[i].style.textDecoration = 'none';
      userTask[i].style.color = 'inherit';
      userTask[i].disabled = false;
      dotsIcon[i].style.display = 'block';
      hidden[i].style.display = 'none';
      checkbox[i].checked = false;
    }
  }
  // const clearBtn = document.querySelector('.clear-btn');
  // clearBtn.addEventListener('click', clearCompleted);
  // clearBtn.addEventListener('click', display);
};

const addIcon = document.querySelector('.add-icon');
const form = document.querySelector('.form');
addIcon.addEventListener('click', addTask);
addIcon.addEventListener('click', display);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask();
  display();
});

display();