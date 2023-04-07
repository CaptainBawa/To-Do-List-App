import { tasks } from './add.js';

// This function removes a task from the DOM and from the tasks array if it is completed.
export default function remove() {
  const hidden = document.querySelectorAll('.hidden-icon');
  const index = Array.from(hidden).indexOf(this);

  if (tasks[index]?.completed) {
    const del = this.parentNode;
    del.remove();
    tasks.splice(index, 1);
    tasks.forEach((task, i) => { task.index = i + 1; });
    localStorage.setItem('array', JSON.stringify(tasks));
  }
}
