const form = document.querySelector("form")

console.log(form)

form.onsubmit = function (){
    // event.preventDefault()
   const formData = {
        checkBox : [],
        radioBtn : []
    }

    for(let i = 0; i < this.elements.length - 1; i++){

        if(this.elements[i].type === 'checkbox'){
            if(this.elements[i].checked)
                formData.checkBox.push(this.elements[i].value)
        }
        else if(this.elements[i].type === 'radio'){
            if(this.elements[i].checked)
                formData.radioBtn.push(this.elements[i].value)

        }
        else{
            
            formData[this.elements[i].name] = this.elements[i].value
        }

        
    }

    console.log(formData)
    printData(formData)

    return false
    
}


function printData(formData){
   for(let i = 0; i < Object.keys(formData).length ; i++){
    console.log(`${Object.keys(formData)[i]}: ${Object.values(formData)[i]}`)
   }
   
}


