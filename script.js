
// const menuToggle = document.querySelector('.menu-toggle');
// const nav = document.querySelector('nav ul');

// menuToggle.addEventListener('click', () => {
//     nav.classList.toggle('active');
// });
// const menuToggle = document.querySelector('.menu-toggle');
// const nav = document.querySelector('nav ul');

// menuToggle.addEventListener('click', () => {
//     nav.classList.toggle('active');
// });



const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul.active');

menuToggle.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
});
