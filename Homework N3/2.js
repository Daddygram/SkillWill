const user1 = {
    banks: {
        adress: {
            city: "Tbilisi"
        }
    }
}

function getCity(user) {
    const {banks: {adress: {city} = {}} = {} } = user;

    return city;
}

const city = getCity(user1)
console.log(city)