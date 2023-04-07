import { tasks } from './add.js';

export default function remove() {
  const hidden = document.querySelectorAll('.hidden-icon');
  const taskContainer = document.querySelector('.task-container');
  const index = Array.from(hidden).indexOf(this);
  if ((tasks[index].completed) === true) {
    const del = this.parentNode;
    taskContainer.removeChild(del);
    tasks.splice(index, 1);
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i + 1;
    }
    localStorage.setItem('array', JSON.stringify(tasks));
  }
}