import { tasks } from './add.js';

/*
 The function updates the status of a task based on whether its checkbox is checked or not.
 The checkbox parameter is a reference to the HTML input element that represents
 the checkbox that was clicked by the user. */
const taskStatus = (checkbox) => {
/* This line of code is finding the index of the checkbox that was clicked by the user in the list
  of all checkboxes with the class name "check". It first selects all elements with the class name
  "check" using `document.querySelectorAll('.check')`, then converts the resulting NodeList to an
  array using `Array.from()`. Finally, it finds the index of the clicked checkbox in the array using
  the `indexOf()` method. The resulting index is used to update the corresponding task's status in
  the `tasks` array and in local storage. */
  const index = Array.from(document.querySelectorAll('.check')).indexOf(checkbox);
  /* These lines of code are selecting the HTML elements that correspond to the task that was
  clicked by the user. */
  const userTask = document.querySelectorAll('.userTask')[index];
  const hidden = document.querySelectorAll('.hidden-icon')[index];
  const dotsIcon = document.querySelectorAll('.dots-icon')[index];
  const completed = checkbox.checked;

  userTask.style.textDecoration = completed ? 'line-through' : 'none';
  userTask.style.color = completed ? 'rgba(139, 134, 134, 0.8)' : 'inherit';
  userTask.disabled = completed;
  dotsIcon.style.display = completed ? 'none' : 'block';
  hidden.style.display = completed ? 'block' : 'none';
  tasks[index].completed = completed;
  localStorage.setItem('array', JSON.stringify(tasks));
};

export default taskStatus;
