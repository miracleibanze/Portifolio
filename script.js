document.querySelector('.button').addEventListener('click', () => {
  turnSections(['.main-right', '.main-right2']);
});

function turnSections(sections) {
  sections.forEach((selector, index) => {
    setTimeout(() => {
      document.querySelector(selector).classList.add('turn');
    }, index * 500);
  });
}

document.querySelectorAll('.Next').forEach(button => {
  button.addEventListener('click', () => {
    const mainRight = button.closest('.main-right, .main-right2, .main-right3, .main-right4');
    mainRight.classList.add('turn');
  });
});

let start = document.querySelector('.start');
start.addEventListener('click', () => {
    const mainRight = document.querySelector('.main-right');
    mainRight.classList.add('turn');
  });

document.querySelectorAll('.Back').forEach(button => {
  button.addEventListener('click', () => {
    const mainRight = button.closest('.main-right, .main-right2, .main-right3, .main-right4');
    mainRight.classList.remove('turn');
  });
});
