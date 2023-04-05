import toDoTask from './toDoObj.js';

const list = document.querySelector('.task-container');

const toDoFunc = () => {
  const li = document.createElement('li');
  li.classList.add('task-li');
  toDoTask.forEach((task) => {
    li.innerHTML += `
        <div class="list-container">
          <input class="checkbox" type="checkbox">
          <textarea name="text" id="text">${task.description}</textarea>
          <span>&#8942;</span>
        </div>
        `;
  });
  list.appendChild(li);
};

export default toDoFunc;