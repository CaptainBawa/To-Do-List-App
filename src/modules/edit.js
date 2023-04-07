import { tasks } from './add.js';

function edit(event) {
  const userTask = document.querySelectorAll('.userTask');
  const index = Array.from(userTask).indexOf(event.target);
  const container = document.querySelectorAll('#container');
  const dotsIcon = document.querySelectorAll('.dots-icon');
  const hidden = document.querySelectorAll('.hidden-icon');

  if (event.key === 'Enter' || event.key === 'Escape') {
    userTask[index].value = this.value;
    userTask[index].blur();
    container[index].style.backgroundColor = '#fff';
    this.style.backgroundColor = '#fff';
    dotsIcon[index].style.display = 'block';
    hidden[index].style.display = 'none';
    tasks[index].description = userTask[index].value;
    localStorage.setItem('array', JSON.stringify(tasks));
  }
}

export default edit;
