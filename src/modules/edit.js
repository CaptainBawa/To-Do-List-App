import { tasks } from './add.js';

function edit(event) {
  const userTask = document.querySelectorAll('.userTask');
  if (event.key === 'Enter' || event.key === 'Escape') {
    const userValue = this.value;
    const index = Array.from(userTask).indexOf(event.target);
    userTask[index].value = userValue;
    userTask[index].blur();
    const container = document.querySelectorAll('#container');
    container[index].style.backgroundColor = '#fff';
    this.style.backgroundColor = '#fff';
    const dotsIcon = document.querySelectorAll('.dots-icon');
    const hidden = document.querySelectorAll('.hidden-icon');
    dotsIcon[index].style.display = 'block';
    hidden[index].style.display = 'none';
    tasks[index].description = userTask[index].value;
    localStorage.setItem('array', JSON.stringify(tasks));
  }
}

export default edit;
