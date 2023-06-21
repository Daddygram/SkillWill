function setMyTimeout(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }
  
  setMyTimeout(2000).then(() => {
    console.log('gugava mova');
  });
  