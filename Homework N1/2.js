function convertFtoC(fahrenheit) {
    if(typeof fahrenheit !== "number"){
        return "false";
    } else {
        const celsius = (fahrenheit - 32) / (1.8);
        return celsius;
    }
}

console.log(convertFtoC(100))