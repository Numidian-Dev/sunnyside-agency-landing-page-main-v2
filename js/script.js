let humb = document.querySelector('.humb')
let menu = document.querySelector('.menu')

humb.addEventListener('click', () => {
    if (menu.style.display === 'none') {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }

})

