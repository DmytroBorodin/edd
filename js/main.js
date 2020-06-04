'use strict'

let mainInput = document.querySelector('#main__input');
let mainInputMin = document.querySelector('#width__500');
let titleBlock = document.querySelector('.title__block');
let imgBlock = document.querySelector('.img__block');
let wrap = document.querySelector('.wrap');
let mainContent = document.querySelector('.main__content');
let countriesBlock = document.querySelector('.countries__block');
let tipsBlock = document.querySelector('.tips__block');
let tipsBlockMini = document.querySelector('.tips__block__500');
console.log(mainInput.value);

mainInput.addEventListener('focus', () => {
	countriesBlock.classList.add('invisible');
	tipsBlock.classList.remove('invisible');
})
mainInput.addEventListener('blur', () => {
	countriesBlock.classList.remove('invisible');
	tipsBlock.classList.add('invisible');
})

let onInput = () => {
	tipsBlock.innerHTML = mainInput.value;
}


mainInputMin.addEventListener('focusin', () => {
	titleBlock.classList.add('invisible');
	imgBlock.classList.add('invisible');
	wrap.classList.add('max-height');
	mainContent.classList.add('section__mt');
	tipsBlockMini.classList.remove('invisible');
});
mainInputMin.addEventListener('focusout', () => {
	titleBlock.classList.remove('invisible');
	imgBlock.classList.remove('invisible');
	wrap.classList.remove('max-height');
	mainContent.classList.remove('section__mt');
	tipsBlockMini.classList.add('invisible');
})
