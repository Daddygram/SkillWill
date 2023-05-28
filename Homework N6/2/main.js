const form = document.querySelector(".form")

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const userInput = document.querySelector('input[name="colorChanger"]')
    
    if(!userInput.value){
        alert("Please choose a color")
    }
    else if(userInput.value == "red"){
        document.body.style.backgroundColor="red";
    }
    else if(userInput.value == "blue"){
        document.body.style.backgroundColor="blue";
    }
    else if(userInput.value == "green"){
        document.body.style.backgroundColor="green";
    }
    else if(userInput.value == "black"){
        document.body.style.backgroundColor="black";
    }
    else if(userInput.value == "white"){
        document.body.style.backgroundColor="white";
    } else {
        alert("Please choose colors between: red, blue, green, black and white")
    }
})