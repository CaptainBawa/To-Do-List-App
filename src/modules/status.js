import { tasks } from './add.js';

const status = (checkbox) => {
  const checkboxList = document.querySelectorAll('.check');
  const index = Array.from(checkboxList).indexOf(checkbox);
  const userTask = document.querySelectorAll('.userTask');
  const hidden = document.querySelectorAll('.hidden');
  const dots = document.querySelectorAll('.dots');
  const value = checkbox.checked;

  if (tasks && tasks.length > index && tasks[index]) {
    tasks[index].completed = value;
  }

  if (userTask[index]) {
    userTask[index].style.textDecoration = value ? 'line-through' : 'none';
    userTask[index].style.color = value ? 'rgba(139, 134, 134, 0.8)' : 'inherit';
    userTask[index].disabled = value;
  }

  if (dots[index]) {
    dots[index].style.display = value ? 'none' : 'block';
  }

  if (hidden[index]) {
    hidden[index].style.display = value ? 'block' : 'none';
  }

  localStorage.setItem('array', JSON.stringify(tasks));
};

export default status;
