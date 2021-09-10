let barBtn = document.querySelector('#barBtn')
let smallMenu = document.querySelector('.menu__small')

barBtn.addEventListener('click', () => {
    smallMenu.classList.toggle('show')
})