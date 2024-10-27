

const button = document.querySelector("button")
const body = document.querySelector("body")


const color = ["blue", "red", "green", "pink", "gray"];


    

    
   body.style.backgroundColor="orange"

 button.addEventListener('click', ()=>{
  const randomIndex = parseInt(Math.random()*color.length)
  body.style.backgroundColor = color[randomIndex]
})




