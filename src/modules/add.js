export const tasks = JSON.parse(localStorage.getItem('array')) || [];

export const add = () => {
  const userInput = document.querySelector('.userInput');
  const value = userInput.value.trim();
  if ((value.length !== 0)) {
    const obj = {
      description: `${userInput.value}`,
      completed: false,
      index: tasks.length + 1,
    };
    tasks.push(obj);
    localStorage.setItem('array', JSON.stringify(tasks));
  }
};