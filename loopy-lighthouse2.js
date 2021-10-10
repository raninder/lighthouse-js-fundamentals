const loopyLighthouse = function(range, multiples, words){
  for(let i = range[0]; i <= range[1]; i++){
    let mul1 = multiples[0];
    let mul2 = multiples[1];
    let skip = 0;
    if(i % mul1 === 0 && i % mul2 === 0){
      console.log(words[0] + words[1]);
      skip = 1;
    }
    else if(i % mul1 === 0){
      console.log(words[0]);
      skip = 1;
    }
    else if(i % mul2 === 0){
      console.log(words[1]);
      skip = 1;
    }
        
    if(!skip){
      console.log(i);
    }    
  }
};
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);