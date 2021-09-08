let barBtn = document.querySelector('#barBtn')
let smallMenu = document.querySelector('.small-menu')

barBtn.addEventListener('click', () => {
    smallMenu.classList.toggle('show')
})