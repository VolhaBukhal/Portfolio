const burger = document.querySelector('.burger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
      
burger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

// автоматически присваиваем значения в стили .skill-item__progress_part
// нужно добавить проверку на ввод данный, на буквы, и значение цифры
const percents = document.querySelectorAll('.skill-item__progress');
const lines = document.querySelectorAll('.skill-item__progress_part');

percents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML; 
});


