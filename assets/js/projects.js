// Projects

let img1 = document.querySelector('#img1')
let img2 = document.querySelector('#img2')
let img3 = document.querySelector('#img3')
let div1 = document.querySelector('#prdiv1')
let div2 = document.querySelector('#prdiv2')
let div3 = document.querySelector('#prdiv3')
let layer = document.querySelector('#black-layer2')


img1.addEventListener('click', () => {
    div2.classList.add('move-to-right')
    div3.classList.add('move-to-right')
    layer.classList.add('move-to-right')
    if (div2.classList.contains('move-to-right')) {
        setTimeout(() => { document.querySelector('#pr-txt1').style.cssText = `visibility: visible;
        opacity: 1;` }, 500)

    }
    document.querySelector('#img1 img').style.cssText = `animation-name: img;`

})
img3.addEventListener('click', () => {
    div1.classList.add('move-to-left')
    div2.classList.add('move-to-left')
    layer.classList.add('move-to-left')
    if (div2.classList.contains('move-to-left')) {
        setTimeout(() => { document.querySelector('#pr-txt3').style.cssText = `visibility: visible;
        opacity: 1;` }, 700)

    }
    document.querySelector('#img3 img').style.cssText = `animation-name: img;`

})
img2.addEventListener('click', () => {
    div1.classList.add('move-to-bothL')
    div3.classList.add('move-to-bothL')
    layer.classList.add('layer-anim')
    if (div1.classList.contains('move-to-bothL')) {
        setTimeout(() => { document.querySelector('#pr-txt2').style.cssText = `visibility: visible;
            opacity: 1;` }, 700)

    }
    document.querySelector('#img2 img').style.cssText = `animation-name: img;`
        // div2.classList.add('mv-left')
        // div2.style.cssText = `transiiton: 1s; margin-left=-300px`
    document.querySelector('.mv-left').style.cssText = `animation-name: mvlft;  left: 50%; margin-left: -170px; position: absolute;`

})