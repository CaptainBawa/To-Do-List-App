import { tasks } from './add.js';

export default function remove(element) {
  if (element.classList.contains('delete')) {
    const hidden = document.querySelectorAll('.hidden');
    const container = document.querySelector('.task-container');
    const index = Array.from(hidden).indexOf(element.parentNode);
    if ((tasks[index].completed) === true) {
      const del = element.parentNode;
      container.removeChild(del);
      tasks.splice(index, 1);
      for (let i = 0; i < tasks.length; i += 1) {
        tasks[i].index = i + 1;
      }
      localStorage.setItem('array', JSON.stringify(tasks));
    }
  }
}
