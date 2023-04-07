export const tasks = JSON.parse(localStorage.getItem('array')) || [];

/*
 The function adds a new task to an array and stores it in local storage if the user input is not
 empty. */
export const addTask = () => {
  const userInput = document.querySelector('.userInput');
  const val = userInput.value.trim();
  if (val) {
    const taskObj = { description: userInput.value, completed: false, index: tasks.length + 1 };
    tasks.push(taskObj);
    localStorage.setItem('array', JSON.stringify(tasks));
    userInput.value = '';
  }
};