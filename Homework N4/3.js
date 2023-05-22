const users = [{name: 'Lasha', age: 30}, {name: 'Saba', age: 20}]

function sortByAge(users){
    return users.sort((a, b) => a.age - b.age)

}

console.log(sortByAge(users))