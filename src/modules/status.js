import { tasks } from './add.js';

const taskStatus = (checkbox) => {
  const index = Array.from(document.querySelectorAll('.check')).indexOf(checkbox);
  const userTask = document.querySelectorAll('.userTask')[index];
  const hidden = document.querySelectorAll('.hidden-icon')[index];
  const dotsIcon = document.querySelectorAll('.dots-icon')[index];
  const completed = checkbox.checked;

  userTask.style.textDecoration = completed ? 'line-through' : 'none';
  userTask.style.color = completed ? 'rgba(139, 134, 134, 0.8)' : 'inherit';
  userTask.disabled = completed;
  dotsIcon.style.display = completed ? 'none' : 'block';
  hidden.style.display = completed ? 'block' : 'none';
  tasks[index].completed = completed;
  localStorage.setItem('array', JSON.stringify(tasks));
};

export default taskStatus;
