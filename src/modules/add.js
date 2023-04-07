export const tasks = JSON.parse(localStorage.getItem('array')) || [];

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