let userInfo = {
    name: 'cotne',
    lastName: 'sxvito',
    age: '19'
}

function getUserParameters(obj){
    if(obj.length === 0){
        return null
    }

    newObject = {}
    for(i in obj){
        newObject[i] = obj[i]
    }
    return newObject
    
}

const copyObject = getUserParameters(userInfo)
console.log(copyObject)