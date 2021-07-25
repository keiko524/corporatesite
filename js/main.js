'use strict';

{
  const navbtn = document.querySelector('.nav-btn');
  navbtn.addEventListener('click', () => {
    navbtn.classList.toggle('open');
    const navList = document.querySelector('.header-nav');
    navList.classList.toggle('in');
  });

}