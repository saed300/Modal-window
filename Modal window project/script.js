'use strict';

var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var btnShowDisplay = document.querySelectorAll('.show-modal');
var btnCloseDiplay = document.querySelector('.close-modal');

var hideModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

var displayModal = function() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

btnShowDisplay.forEach(function(btn) {
  btn.addEventListener('click', displayModal);
  btnCloseDiplay.addEventListener('click', hideModal);
  overlay.addEventListener('click', hideModal)
})
