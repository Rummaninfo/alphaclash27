// function play(){
//     let homeSection = document.getElementById('homePages')
//     homeSection.classList.add('hidden')
    
//     let playG = document.getElementById('playground')
//     playG.classList.remove('hidden')
// }
function play(){
   
    // home page add(hidden) hideElementId
                                            hideElementId('homePages')
    // middle page remove (hidden) middlepage
                                             middlePage('playground')
    // let play ground start random number ganerator
     
    //  set background color
                                           
                                              playGround()
                                              setBgColor(playGround())
                                              gameover
    }



// home page disable
function hideElementId(elementId){
let elementHide = document.getElementById(elementId)
elementHide.classList.add('hidden')
}
// next page hidden off
function middlePage (elementMiddle){
    let middlePages1 = document.getElementById(elementMiddle)
    middlePages1.classList.remove('hidden')
}
// play ground
function playGround(){

    let alphaBet= 'abcdefghijklmnopqrstuvwxyz'
   let alphabets =  alphaBet.split('')
 
    let randomNumber = Math.random()*25
    // round mean . hide integar convert IndexNumber
    let indexNumber = Math.round(randomNumber)
// console.log(indexNumber)
    let alpha = alphabets[indexNumber]
   
    // console.log(alpha)
 


    // console.log(alpha)
    let show = document.getElementById('showThePic')
    show.innerText = alpha
    return alpha
 
    
}


function setBgColor(added){
let setting = document.getElementById(added)
setting.classList.add('bg-red-500')
// console.log(setting)

}

// let sum = 0
// click to game start
function keyUpbutton(events){
    let pressKey = events.key
    // console.log(pressKey,'player presed')
    let currentAlphaBet = document.getElementById('showThePic')
    let solveAlphaBet = currentAlphaBet.innerText
    let small = solveAlphaBet.toLowerCase()
    if(pressKey === small){
        
        removeBg(small)
        setBgColor(playGround())
        let scoreCard = document.getElementById('score-result')
        let sovle = scoreCard.innerText
        let integar = parseInt(sovle)
        let finalDec = integar +1
        scoreCard.innerText= finalDec

        let final = integar +1
        console.log
// sum += 1
        // console.log(setBgColor)
        // let view= scoreCard.innerText = sum
        // console.log(view)
        
    }else{
       
        let secondBtn = document.getElementById('minus-btn')
        let text = secondBtn.innerText
        let secondSolution = parseInt(text)
        let minus = secondSolution -1
        // secondBtn.innerText = minus
        if( minus >= 0){
            secondBtn.innerText = minus
            console.log('game over')
           
        }
        
        
    }
     
}
document.addEventListener('keyup',keyUpbutton)



// document.addEventListener('keyup', function(event){
//     console.log(event.key)
// })


// keyboard color remove
function removeBg(elements){
    let solveSolution = document.getElementById(elements)
    solveSolution.classList.remove('bg-red-500')
}

 