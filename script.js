document.querySelectorAll('.Next').forEach(button => {
  button.addEventListener('click', () => {
    const mainRight = button.closest('.main-right, .main-right2, .main-right3, .main-right4');
    mainRight.classList.add('turn');
  });
});

document.querySelectorAll('.Back').forEach(button => {
  button.addEventListener('click', () => {
    const mainRight = button.closest('.main-right, .main-right2, .main-right3, .main-right4');
    mainRight.classList.remove('turn');
  });
});
