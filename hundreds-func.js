const howManyHundreds = function(number){
    const n = parseInt(number / 100);
    return n;
}
console.log("no. of hundreds:" + howManyHundreds(99));
console.log("no. of hundreds:" + howManyHundreds(199));
console.log("no. of hundreds:" + howManyHundreds(2024));