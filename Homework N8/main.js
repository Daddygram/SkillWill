    // davaleba 1

function expo(num, x, cb){
    
    if(x === 0) return cb(1)
    else if(x === 1) return cb(num)
    else return expo(num, x-1, (res) => {
        const xarisxi = res*num;
        cb(xarisxi)
    })

}

expo(5, 3, (res) => {
    console.log(res);
  });

  //davaleba 2

const fetchData = async () => {  
    try{
        const fetching = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await fetching.json()
        display(data)
    } catch(err) {
        console.log(err)
    }
}

fetchData()

const display = (data) => {
    data.map((item, index) => {
      let container = document.createElement('div');
      let heading = document.createElement('h2');
      let paragraph = document.createElement('p');

      container.classList.add('container');
      container.setAttribute('id', index);

      paragraph.innerText = item.body;
      heading.innerText = item.title;

      container.append(heading, paragraph);
      document.body.appendChild(container);
    })
  } 
  
  // davaleba 3
  
  const objData = {
    name: 'Cotne',
    age: 19,
    city: "Tbilisi"
  }
  
  const deepCopy = async (obj) => {
    try {
      if (typeof obj === 'object') {
        const newObj = await {...obj};
        console.log(newObj);
      } else {
        throw new Error('It is not object');
      }
    } catch (error) {
      console.log(error);
    }
  } 
  
  deepCopy(objData);

