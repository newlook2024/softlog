let burger = document.querySelector('#burger')
let nav = document.querySelector("#responsiveNav")
let close = document.querySelector("#close")
let footer = document.querySelectorAll(".footer")
let btn = document.querySelectorAll("#footbtn")

let javob = document.querySelectorAll('.q-text')
let savol = document.querySelectorAll('#question')

console.log(savol);

function behruz (button , paragraf){
    button.addEventListener(`click`, function(){
        paragraf.classList.toggle('h-0')
        // paragraf.classList.toggle('h-20')
        paragraf.classList.toggle('border-2')
        paragraf.classList.toggle('py-5')
    })
}

behruz(savol[0], javob[0])
behruz(savol[1], javob[1])
behruz(savol[2], javob[2])
behruz(savol[3], javob[3])
behruz(savol[4], javob[4])
behruz(savol[5], javob[5])


burger.addEventListener(`click` , function(){
    nav.classList.remove('left-full')
    nav.classList.add('left-0')
})

close.addEventListener(`click`, function(){
    nav.classList.remove(`left-0`)
    nav.classList.add(`left-full`)
})

function pastMenu (button1, nav, button, button2, button3, button4){
    button1.addEventListener('click', function(){
        nav.classList.toggle('h-auto')
        nav.classList.toggle('h-0')
        nav.classList.toggle('text-center')
        nav.classList.toggle('border-2')
        nav.classList.toggle('py-6')
        button.classList.remove('h-auto')
        button2.classList.remove('h-auto')
        button3.classList.remove('h-auto')
        button4.classList.remove('h-auto')
        button.classList.remove('py-6')
        button2.classList.remove('py-6')
        button3.classList.remove('py-6')
        button4.classList.remove('py-6')
        button.classList.remove('border-2')
        button2.classList.remove('border-2')
        button3.classList.remove('border-2')
        button4.classList.remove('border-2')
        button.classList.remove('text-center')
        button2.classList.remove('text-center')
        button3.classList.remove('text-center')
        button4.classList.remove('text-center')
        button.classList.add('h-0')
        button2.classList.add('h-0')
        button3.classList.add('h-0')
        button4.classList.add('h-0')
        
        
    })
}

pastMenu(btn[0], footer[0], footer[1], footer[2], footer[3],footer[4])
pastMenu(btn[1], footer[1], footer[0], footer[2], footer[3],footer[4])
pastMenu(btn[2], footer[2], footer[1], footer[0], footer[3],footer[4])
pastMenu(btn[3], footer[3], footer[1], footer[2], footer[0],footer[4])
pastMenu(btn[4], footer[4], footer[1], footer[2], footer[3],footer[0])

