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

function keyUpbutton(events){
    let pressKey = events.key
    // console.log(pressKey,'player presed')
    let currentAlphaBet = document.getElementById('showThePic')
    let solveAlphaBet = currentAlphaBet.innerText
    let borochoto = solveAlphaBet.toLowerCase()
    if(pressKey === borochoto){
        console.log('thik ashe continue')
        removeBg(borochoto)
        setBgColor(playGround())
        
        // console.log(setBgColor)
        
    }else{
        console.log('please Recorrect')
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
