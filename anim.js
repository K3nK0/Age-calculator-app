const blocInput = document.querySelectorAll('.input')
const blocResult = document.querySelectorAll('.result p')
const spanResult = document.querySelectorAll('.result p span')
const button = document.getElementsByTagName('button')[0]

gsap.from(blocInput,{
    y: '-=150',
    duration: 1,
    opacity: 0,
    ease: 'power4.out',
    stagger: 0.3
})

gsap.from(blocResult,{
    x: '-=150',
    duration: 1,
    delay: 0.5,
    opacity: 0,
    ease: 'elastic.out(1, 0.3)',
    stagger: 0.3
})

gsap.from(button,{
    x: '-=600',
    duration: 1.5,
    rotation: -720,
    opacity: 0
})

const TL = gsap.timeline()

TL
.from(spanResult, {
    opacity: 0,
    delay: 0.1,
    duration: 0.5,
    stagger: 0.2
})

button.addEventListener('click', () => {
    TL.restart()
})
