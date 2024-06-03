
const page = document.querySelector('.main-right');
		
page.addEventListener('click', () => {
  if(page.classList.contains('turn')){
    page.classList.remove('turn');
  }
  else{
    page.classList.add('turn');
  }
});

const page2 = document.querySelector('.main-right2');

page2.addEventListener('click', () => {
  if(page2.classList.contains('turn')){
    page2.classList.remove('turn');
  }
  else{
    page2.classList.add('turn');
  }
});

const page3 = document.querySelector('.main-right3');

page3.addEventListener('click', () => {
  if(page3.classList.contains('turn')){
    page3.classList.remove('turn');
  }
  else{
    page3.classList.add('turn');
  }
});


const page4 = document.querySelector('.main-right4');

page4.addEventListener('click', () => {
  if(page4.classList.contains('turn')){
    page4.classList.remove('turn');
  }
  else{
    page4.classList.add('turn');
  }
});
