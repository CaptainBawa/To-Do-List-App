import { tasks } from './modules/add.js';

const clearCompleted = () => {
  const taskCompleted = tasks.filter((tasks) => tasks.completed === true);
  for (let i = 0; i < taskCompleted.length; i += 1) {
    const index = (taskCompleted[i].index - 1) - i;
    tasks.splice(index, 1);
  }
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  localStorage.setItem('array', JSON.stringify(tasks));
};

export default clearCompleted;