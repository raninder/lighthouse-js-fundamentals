const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

function finalPosition(moves){
  let x = 0;
  let y = 0;
  const coords = [];
  for(let i = 0; i< moves.length; i++){
    if(moves[i] === "north"){
      y++;
    }
    else if(moves[i] === "west"){
      x--;
    }
    else if(moves[i] === "east"){
      x++;
    }
    else{
      y--
    }
   coords.push([x,y]);
     // console.log("x:"+x+ "y:"+y);
   
  }
  return coords;
}

console.log(finalPosition(moves));