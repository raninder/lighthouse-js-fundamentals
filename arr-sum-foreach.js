let sum = 0;
const num = [20 , 26 , 34 , 45, 67 ];
num.forEach(calSum);
console.log(sum);

function calSum(item){
  sum += item;
  //return sum;
}