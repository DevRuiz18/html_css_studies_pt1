const buttonMenu = document.querySelector('.header__menu');

const sideMenu = document.querySelector('.side-menu');

buttonMenu.addEventListener('click', ()=>{
    sideMenu.classList.toggle('side-menu--active')
})

// const buttonSideMenu = document.querySelector('.side-menu__link');

// buttonSideMenu.addEventListener('click', ()=>{
//     buttonSideMenu.classList.toggle('side-menu__link--active')
// })