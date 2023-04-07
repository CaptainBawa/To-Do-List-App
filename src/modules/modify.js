import { tasks } from './add.js';
import remove from './delete.js';

function modify() {
  const userTask = document.querySelectorAll('.userTask');
  const dotsIcon = document.querySelectorAll('.dots-icon');
  const hidden = document.querySelectorAll('.hidden-icon');
  const container = document.querySelectorAll('#container');
  const body = document.querySelector('body');

  const modi = (event) => {
    const index = Array.from(userTask).indexOf(this);
    hidden[index].removeEventListener('click', remove);

    if (event.target !== this) {
      const userValue = this.value;
      userTask[index].value = userValue;
      tasks[index].description = userTask[index].value;
      localStorage.setItem('array', JSON.stringify(tasks));
      container[index].style.backgroundColor = '#fff';
      this.style.backgroundColor = '#fff';
      dotsIcon[index].style.display = 'block';
      hidden[index].style.display = 'none';
      body.removeEventListener('click', modi);
      hidden[index].addEventListener('click', remove);
    } else if (event.target === this) {
      container[index].style.backgroundColor = '#FFD700';
      this.style.backgroundColor = '#FFD700';
      dotsIcon[index].style.display = 'none';
      hidden[index].style.display = 'block';
    }
  };

  body.addEventListener('click', modi);
}

export default modify;
