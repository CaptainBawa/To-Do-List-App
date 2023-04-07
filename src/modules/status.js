import { tasks } from './add.js';

const taskStatus = (checkbox) => {
  const index = Array.from(document.querySelectorAll('.check')).indexOf(checkbox);
  const userTask = document.querySelectorAll('.userTask');
  const hidden = document.querySelectorAll('.hidden-icon');
  const dotsIcon = document.querySelectorAll('.dots-icon');
  let value = false;
  setTimeout(() => {
    if (checkbox.checked === true) {
      value = true;
      tasks[index].completed = value;
      userTask[index].style.textDecoration = 'line-through';
      userTask[index].style.color = 'rgba(139, 134, 134, 0.8)';
      userTask[index].disabled = true;
      dotsIcon[index].style.display = 'none';
      hidden[index].style.display = 'block';
      localStorage.setItem('array', JSON.stringify(tasks));
    } else {
      tasks[index].completed = value;
      userTask[index].style.textDecoration = 'none';
      userTask[index].style.color = 'inherit';
      userTask[index].disabled = false;
      dotsIcon[index].style.display = 'block';
      hidden[index].style.display = 'none';
      localStorage.setItem('array', JSON.stringify(tasks));
    }
  }, 100);
};

export default taskStatus;