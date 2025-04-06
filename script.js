document.addEventListener("DOMContentLoaded", function(){
    let onload = document.getElementById("onload")
    onload.innerHTML = "<h1> This is some loaded content</h1>"
})

const directionEl = document.getElementById("direction")
document.addEventListener("keydown", function(e) {
    console.log(e);
    
    directionEl.innerText = `the key that was pressed was ${e.key}`
    
})


let clickMe = document.getElementById("clickMe")
clickMe.addEventListener("click", function(e){
    console.log(e);
    clickMe.innerText = "You clicked me"

})

function randomly() {
    let newRandomColor = "#" + Math.floor(Math.random()*16777215).toString(16)
    console.log(newRandomColor);
    
    document.body.style.backgroundColor = newRandomColor;

}

// let button = document.getElementById("randomColorBtn")
// button.addEventListener("click", function randomly() {
//     let newRandomColor = "#" + Math.floor(Math.random()*16777215).toString(16)
//     // console.log(newRandomColor);
//     document.body.style.backgroundColor = newRandomColor;

    
// }
  
// )

// function randomly() {
//     let newRandomColor = "#" + Math.floor(Math.random()*16777215).toString(16)
//     console.log(newRandomColor);
    
    
// }