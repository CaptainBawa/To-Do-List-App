/* Importing the `tasks` array from the `add.js` module. This allows the `clearCompleted`
function to access and modify the `tasks` array. */
import { tasks } from './modules/add.js';

// This function clears completed tasks from an array and updates the index of remaining tasks.
const clearCompleted = () => {
/* `const filteredTasks = tasks.filter((task) => !task.completed);` is creating a new array called
 `filteredTasks` that contains only the tasks that have not been completed. It does this by using
 the `filter()` method on the `tasks` array and passing in a callback function that checks if the
 `completed` property of each task is `false`. The `filter()` method returns a new array that
 contains only the elements that pass the test in the callback function. */
  const filteredTasks = tasks.filter((task) => !task.completed);
  filteredTasks.forEach((task, index) => {
    task.index = index + 1;
  });
  tasks.length = filteredTasks.length;
  /*
  tasks.splice(0, tasks.length, ...filteredTasks);` is replacing all elements in the `tasks` array
  with the elements in the `filteredTasks` array. The first argument `0` specifies the starting
  index of the replacement, the second argument `tasks.length` specifies the number of elements to
  be replaced (which is the entire length of the `tasks` array), and the third argument
  `...filteredTasks` spreads the elements of the `filteredTasks` array into individual arguments to
  be inserted into the `tasks` array. This effectively replaces all elements in the `tasks` array
  with the non-completed tasks in the `filteredTasks` array. */
  tasks.splice(0, tasks.length, ...filteredTasks);
  localStorage.setItem('array', JSON.stringify(tasks));
};

/*
export default clearCompleted;` is exporting the `clearCompleted` function as the default export of
this module. This means that when another module imports from this module using `import
clearCompleted from './path/to/module.js'`, the `clearCompleted` function will be imported as the
default export and can be used in the importing module. */
export default clearCompleted;
