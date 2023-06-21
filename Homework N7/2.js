function setMyTimeout(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }

function makeToys() {
    return new Promise((resolve, reject) => {
        setMyTimeout(3000)
        if(Math.random() > 0.1) {
            resolve('undefected')
        } else {
            reject('defected')
        }
    })
}

function deliverToys(st) {
    return new Promise((resolve, reject) => {
        setMyTimeout(2000)
        if(st === 'undefected'){
            resolve('Toy is being delivered')
        }
        if(st === 'defected'){
            reject('Toy is not being delivered')
        }
    })
}

function sellToys(status) {
    return new Promise((resolve, reject) => {
        setMyTimeout(1000)
        if(status === 'undefected'){
            if(Math.random() > 0.3){
                resolve('Toy has been sold!')
            } else {
                reject('Toy has not been sold!')
            }
        }
    })
}


makeToys()
  .then((status) => sellToys(status))
  .then((st) => deliverToys(st))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
