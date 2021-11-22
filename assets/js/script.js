let firstPage = document.querySelectorAll('.firstP')
let secondPage = document.querySelectorAll('.secondP')
let section1 = document.querySelector('.section1')
let section2 = document.querySelector('.section2')
let navMenu = document.querySelector('.navigation')


for (let i = 0; i < 2; i++) {
    firstPage[i].addEventListener('click', () => {
        section2.style.display = 'none'
        section1.style.display = 'flex'
        navMenu.style.marginTop = `-60px`
    })

    secondPage[i].addEventListener('click', () => {
        section1.style.display = 'none'
        section2.style.display = 'flex'


    })
}