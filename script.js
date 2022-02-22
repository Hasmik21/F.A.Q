let askedQuestionsIcon = document.querySelectorAll('.asked-questions .asked-questions__block .asked-questions__info .asked-questions__item .asked-questions__icon');
let askedQuestionsAnswer = document.querySelectorAll('.asked-questions__answer-text');
let askedQuestionsQuestion = document.querySelectorAll('.asked-questions .asked-questions__block .asked-questions__info .asked-questions__item .asked-questions__question');
let minusIcon  = document.querySelectorAll('.asked-questions__icon-minus');
let plusIcon = document.querySelectorAll('.asked-questions__icon-plus');
let clicked = false;

askedQuestionsIcon.forEach((item, index) => {
    item.onclick = () => {
        if(clicked) {
            askedQuestionsAnswer[index].style = `display: none; margin: 20px 0 0px 0;`;
            askedQuestionsQuestion[index].style = `color: #333`;  
            plusIcon[index].style.display = 'block';
            minusIcon[index].style.display ='none';
            clicked = false;
        } else {
            askedQuestionsAnswer[index].style = `display: block; margin: 20px 0 0px 0;`;
            askedQuestionsQuestion[index].style = `color: orange`;
            plusIcon[index].style.display = 'none';
            minusIcon[index].style.display ='block';
            clicked = true;
        }
    }
});

