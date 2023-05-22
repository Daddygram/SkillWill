const sentence = "me bebia iliko da ilarioni";

function capitalizeWords(sentence) {
    var words = sentence.split(" ");
  
    var capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    var capitalizedSentence = capitalizedWords.join(" ");
  
    return capitalizedSentence;
  }
  
  const capitalizedSentence = capitalizeWords(sentence);
  console.log(capitalizedSentence);