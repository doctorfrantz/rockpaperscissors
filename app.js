function getComputerChoice() {  
    let possibleOptions = Math.floor(Math.random() * 3);
      if (possibleOptions === 0){
          return "Rock";
      } else if (possibleOptions === 1){
          return "Paper";
      } else {
          return "Scissors";
      }
  };

  