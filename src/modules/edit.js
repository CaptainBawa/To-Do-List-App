import { tasks } from './add.js';

const edit = (event) => {
  const userTask = document.querySelectorAll('.userTask');
  if (event.key === 'Enter' || event.key === 'Escape') {
    const userVal = event.target.value;
    const index = Array.from(userTask).indexOf(event.target);
    userTask[index].value = userVal;
    userTask[index].blur();
    const special = document.querySelectorAll('#special');
    special[index].style.backgroundColor = '#fff';
    event.target.style.backgroundColor = '#fff';
    const dots = document.querySelectorAll('.dots');
    const hidden = document.querySelectorAll('.hidden');
    dots[index].style.display = 'block';
    hidden[index].style.display = 'none';
    tasks[index].description = userTask[index].value;
    localStorage.setItem('array', JSON.stringify(tasks));
  }
};

export default edit;
