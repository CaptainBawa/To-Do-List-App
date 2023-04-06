import { tasks } from './modules/add.js';

function clearCompleted() {
  const completed = tasks.filter((task) => task.completed === true);
  for (let i = 0; i < completed.length; i += 1) {
    const index = completed[i].index - 1 - i;
    tasks.splice(index, 1);
  }
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  localStorage.setItem('array', JSON.stringify(tasks));
}

export default clearCompleted;
