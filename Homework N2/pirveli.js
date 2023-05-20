const userInfo = [
    {name: 'Temo', age:25}, 
    {name: 'Lasha', age: 21}, 
    {name: 'Ana', age: 28}
];

function getSmallestPerson(small) {
    if(userInfo.length === 0){
        return null
    }

    let smallestPerson = userInfo[0]

    for(let i = 1; i < userInfo.length; i++){
        
        let user = userInfo[i];
        if(user.age < smallestPerson.age){
            smallestPerson = user;
        }
        return smallestPerson.name
    }
}

const getSmallUser = getSmallestPerson(userInfo)
console.log(getSmallUser)
