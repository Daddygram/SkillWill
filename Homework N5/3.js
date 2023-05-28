const buttons = document.querySelectorAll('button');
const question1 = document.getElementById('question1');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('correct')) {
      question1.style.backgroundColor = 'green';
    } else {
      question1.style.backgroundColor = 'red';
    }
  });
});
