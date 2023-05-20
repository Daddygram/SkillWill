const kamateli =()=>{
    let a;
    let b;
 
    while(a!==3&&b!==3){
        let gagoreba = 0;
        gagoreba++;
        a = Math.floor(1+Math.random() *6 )
        b = Math.floor(1+Math.random() *6)
        console.log(`a-m gaagora - ${a}`);
        console.log(`b-m gaagora - ${b}`)
        if(a===3&&b===3){
            return  `gagorda ${gagoreba} -jer da frea` ;
        }else if(a===3){
            return `gagorda ${gagoreba} -jer da moigo a-m`
        }else if(b===3){
            return `gagorda ${gagoreba} -jer da moigo`
        }
       
    
    }
}
kamateli();