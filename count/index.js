const body = document.querySelector("body")

const btn1 = document.createElement("button")
const btn2 = document.createElement("button")
const text = document.createElement("h1")
let count = 0

text.textContent = count
btn1.textContent = "Increment"
btn2.textContent = "Decrement"
document.title = `count ${count}`

body.appendChild(text)
body.append(btn1)
body.append(btn2)

btn1.addEventListener("click", ()=>{
    count++
    countUpdate()
})

btn2.addEventListener("click", ()=>{
    count--
    countUpdate()
})

function countUpdate(){
    if(count >= 0){
        text.textContent = count
        document.title = `count ${count}`
    }
    else{
        count = 0
    }
}

