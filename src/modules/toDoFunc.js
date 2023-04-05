import toDoTask from './toDoObj.js';

const list = document.querySelector('.task-container');

const toDoFunc = () => {
  const li = document.createElement('li');
  li.classList.add('task-li');
  toDoTask.forEach((task) => {
    li.innerHTML += `
        <div class="list-container">
          <span class="done">&#63553;</span>
          <label class="task">${task.description}</label>
          <span>&#8942;</span>
        </div>
        `;
  });
  list.appendChild(li);
};

export default toDoFunc;