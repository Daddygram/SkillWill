const obj = {
    banks: {
        adress: {
            city: "Tbilisi"
        }
    }
}

function copyObj(user){
    let newObj = {...user}

    for(let i in obj){
        if(typeof obj[i] === 'object'){
            newObj[i] = obj[i]
        }
    }
    return newObj;
}


const obj2 = copyObj(obj)
console.log(obj2)