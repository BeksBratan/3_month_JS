// 1) используя setTimout и рекурсию
// заставить блок дигаться
// по определенному шаблону(как было показано на уроке)
const block = document.querySelector('.block')
const blockMove = document.querySelector('.blockMove')

let pos = 0
let topPos = 0

const blockMoveAction = () =>{
    pos += 20
    block.style.left = `${pos}px`
    if (pos <= 460){
        setTimeout(blockMoveAction, 100)
    }else if (pos >= 460 && topPos <= 460){
        topPos += 20
        block.style.top = `${topPos}px`
        setTimeout(blockMoveAction, 100)
    }
}
blockMove.addEventListener('click', ()=>{
    blockMoveAction()
})


// 2) создать Интервал
// который будет выводить в консоль колтчество секунд,
//     прошедших с момента запуска программы.

let num = 0
const  interval = setInterval(() =>{
    num++
    console.log(`С момента запуска программы прошло : ${num}sec`)
},1000)
