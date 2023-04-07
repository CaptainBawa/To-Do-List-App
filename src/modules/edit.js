import { tasks } from './add.js';

/*
 This function edits a user task and updates it in the local storage when the user presses the Enter
 or Escape key.The event parameter is an object that represents an event that has occurred, such as
 a key press or a mouse click. It contains information about the event, such as the type of event,
 the target element, and any data associated with the event. In this specific code, the event
 parameter is used */
const edit = (event) => {
  const userTask = document.querySelectorAll('.userTask');
  /* `const index = Array.from(userTask).indexOf(event.target);` is finding the index of the input
  element that triggered the event (either a key press or a mouse click) among all the input
  elements with the class name "userTask". It first converts the NodeList of input elements into an
  array using `Array.from()`, and then uses the `indexOf()` method to find the index of the input
  element that matches the event target. This index is then used to access other elements in the DOM
  and update the corresponding task in the `tasks` array. */
  const index = Array.from(userTask).indexOf(event.target);
  const container = document.querySelectorAll('#container');
  const dotsIcon = document.querySelectorAll('.dots-icon');
  const hidden = document.querySelectorAll('.hidden-icon');

  if (event.key === 'Enter' || event.key === 'Escape') {
    userTask[index].value = this.value;
    /* `userTask[index].blur();` is a method that removes focus from the input element with the
    specified index. In this code, it is used to remove focus from the input element after the user
    has finished editing the task description and pressed the Enter or Escape key. */
    userTask[index].blur();
    container[index].style.backgroundColor = '#fff';
    this.style.backgroundColor = '#fff';
    dotsIcon[index].style.display = 'block';
    hidden[index].style.display = 'none';
    tasks[index].description = userTask[index].value;
    localStorage.setItem('array', JSON.stringify(tasks));
  }
};

export default edit;
