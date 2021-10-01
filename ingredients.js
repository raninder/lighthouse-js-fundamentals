const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
for(let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
} 
for( let a of ingredients){
    console.log(a);
}
for(let j = ingredients.length-1; j>=0; j--){
 console.log(ingredients[j]);
}
console.log(ingredients.reverse());