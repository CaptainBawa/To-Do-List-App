import { tasks } from './modules/add.js';

const clearCompleted = () => {
  const filteredTasks = tasks.filter((task) => !task.completed);
  filteredTasks.forEach((task, index) => {
    task.index = index + 1;
  });
  tasks.length = filteredTasks.length;
  tasks.splice(0, tasks.length, ...filteredTasks);
  localStorage.setItem('array', JSON.stringify(tasks));
};

export default clearCompleted;
