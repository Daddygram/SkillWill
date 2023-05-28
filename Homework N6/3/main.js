const form = document.querySelector(".form")

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const userInput = document.querySelector('input[name="gela"]').value
    const numbers = userInput.split(":")
    var sum = 0;
  
    for (var i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
    }
  
    var average = sum / numbers.length;
    alert("average: " + average);
})
