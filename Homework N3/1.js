function quickMaths(...numbers) {
    if (numbers.length < 3) {
      return ("daamate cifrebi");
    }
    
    const jami = [numbers[0] + numbers[1]];
    const namravli = [numbers[2]];
  
    let namravluka = numbers[2];
    for (let i = 3; i < numbers.length; i++) {
      namravluka *= numbers[i];
    }
    return [jami, namravluka];
  }

  console.log(quickMaths(1, 2));
  console.log(quickMaths(2, 3, 4, 5, 6));
  