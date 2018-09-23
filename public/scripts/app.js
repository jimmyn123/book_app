'use strict';

let nav = document.getElementsByClassName('menu')[0];
nav.addEventListener('click', function () {
  let menu = document.getElementsByTagName('nav')[0];
  menu.classList.contains('closed') ? menu.classList.remove('closed') : menu.classList.add('closed');
});