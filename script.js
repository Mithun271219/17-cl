////this is to change the color of the span element
let res=document.querySelector('span').addEventListener('mouseover',(e)=>{
    e.target.style.color='red'
})

////this is to siplay the value of prompt inside the span ele
function myFunction(){
    let res=prompt('enter the value')
    let span=document.createElement('span')
    span.innerHTML=res
    document.body.append(span)
}

////this is get the mouse coordinates on clicking the h1 tag
let h1=document.createElement('h1')
h1.innerHTML='this paragraph is used to get the coordinates of mouse pointing'
h1.addEventListener('click',getMousePos)
document.body.append(h1)

function getMousePos(e){
    let span=document.createElement('span')
    let x=e.clientX
    let y=e.clientY
    span.innerHTML=`the x-cordinate: ${x} and y-cordinate: ${y}`
    document.body.append(span)
}

////this is to get the length of the entered value insisde the text box

let getData=document.querySelector('textarea')
getData.addEventListener('keydown',dataIntake)

function dataIntake(e){
    let res=e.target.value
    if (res.length===0){
        console.log(clearInterval)
    }
    console.log(res.length+1)

}




