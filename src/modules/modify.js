import { tasks } from './add.js';
import remove from './delete.js';

const modify = () => {
  const event = (event) => {
    const userTask = document.querySelectorAll('.userTask');
    const hidden = document.querySelectorAll('.hidden');
    const index = Array.from(userTask).indexOf(event.target);
    hidden[index].removeEventListener('click', remove);
    if (event.target !== this) {
      const userVal = event.target.value; // access the value property using event.target
      const index = Array.from(userTask).indexOf(event.target);
      userTask[index].value = userVal;
      tasks[index].description = userTask[index].value;
      localStorage.setItem('array', JSON.stringify(tasks));
      const special = document.querySelectorAll('#special');
      special[index].style.backgroundColor = '#fff';
      event.target.style.backgroundColor = '#fff';
      const dots = document.querySelectorAll('.dots');
      dots[index].style.display = 'block';
      hidden[index].style.display = 'none';
      const list = document.querySelector('body');
      list.removeEventListener('click', event);
      setTimeout(() => hidden[index].addEventListener('click', remove), 2000);
    } else if (event.target === this) {
      const index = Array.from(userTask).indexOf(event.target);
      const special = document.querySelectorAll('#special');
      special[index].style.backgroundColor = '#FFD700';
      event.target.style.backgroundColor = '#FFD700';
      const dots = document.querySelectorAll('.dots');
      dots[index].style.display = 'none';
      hidden[index].style.display = 'block';
    }
  };
  const body = document.querySelector('body');
  body.addEventListener('click', event);
};

export default modify;
