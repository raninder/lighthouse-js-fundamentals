const range = function(start, end, step){
    const arr = [];
    while(start <= end ){
        if(step > 0 ){
        arr.push(start);
        start += step; 
        }
        else {
        break;
       }
      }
    return arr;
  }
  
     
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(3,0,1));