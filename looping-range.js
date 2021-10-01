const arr = [];
const range = function(start, end, step){
  if((start > end) || (start < 0) || (start === null)||(end === null)||(step === null))
  {  }
  else{
    for (let i = start;i <= end; i+=step ){
     arr.push(i);  
    }
  }
  return arr;
  }
    
  console.log(range(3,0,2));
  console.log(range(3,50,2));