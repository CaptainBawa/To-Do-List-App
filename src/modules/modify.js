/* These lines are importing the `tasks` array from the `add.js` module and the `remove`
function from the `delete.js` module. The `tasks` array is used to store the user's tasks,
while the `remove`function is used to delete a task from the list. */
import { tasks } from './add.js';
import remove from './delete.js';

// The function modifies user tasks and updates them in local storage.
function modify() {
  /* These lines of code are selecting HTML elements from the DOM using CSS selectors and assigning
  them to variables. */
  const userTask = document.querySelectorAll('.userTask');
  const dotsIcon = document.querySelectorAll('.dots-icon');
  const hidden = document.querySelectorAll('.hidden-icon');
  const container = document.querySelectorAll('#container');
  const body = document.querySelector('body');

  /*
   The function modi modifies a task by changing its value and updating it in local storage.
   The event parameter is an object that represents the event that triggered the
   function. It contains information about the event, such as the target element, the type of event,
   and any additional data related to the event. In this case, the function is likely triggered by a
   click event on an element, and */
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
      hidden[index].addEventListener('click', remove);
    }
  };

  /* body.addEventListener('click', modi);` is adding an event listener to the `body` element in the
  HTML document. The event listener is listening for a click event on any element within the `body`
  element. When a click event is detected, the `modi` function is called. This allows the user to
  modify a task by clicking on it. */
  body.addEventListener('click', modi);
}

/* `export default modify;` is exporting the `modify` function as the default export of this module.
This means that when another module imports from this module using `import modify from
'./modify.js'`, the `modify` function will be imported as the default export and can be used in the
importing module. */
export default modify;
