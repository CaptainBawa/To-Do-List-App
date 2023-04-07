import { tasks } from './add.js';
import remove from './delete.js';

function modify() {
  const modi = (event) => {
    const userTask = document.querySelectorAll('.userTask');
    const hidden = document.querySelectorAll('.hidden-icon');
    const index = Array.from(userTask).indexOf(this);
    hidden[index].removeEventListener('click', remove);
    if (event.target !== this) {
      const userValue = this.value;
      const index = Array.from(userTask).indexOf(this);
      userTask[index].value = userValue;
      tasks[index].description = userTask[index].value;
      localStorage.setItem('array', JSON.stringify(tasks));
      const container = document.querySelectorAll('#container');
      container[index].style.backgroundColor = '#fff';
      this.style.backgroundColor = '#fff';
      const dotsIcon = document.querySelectorAll('.dots-icon');
      const hidden = document.querySelectorAll('.hidden-icon');
      dotsIcon[index].style.display = 'block';
      hidden[index].style.display = 'none';
      const body = document.querySelector('body');
      body.removeEventListener('click', modi);
      hidden[index].addEventListener('click', remove);
    } else if (event.target === this) {
      const index = Array.from(userTask).indexOf(this);
      const container = document.querySelectorAll('#container');
      container[index].style.backgroundColor = '#FFD700';
      this.style.backgroundColor = '#FFD700';
      const dotsIcon = document.querySelectorAll('.dots-icon');
      const hidden = document.querySelectorAll('.hidden-icon');
      dotsIcon[index].style.display = 'none';
      hidden[index].style.display = 'block';
    }
  };
  const body = document.querySelector('body');
  body.addEventListener('click', modi);
}

export default modify;
