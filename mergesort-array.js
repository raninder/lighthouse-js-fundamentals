const concat = function(arr1,arr2){
    const arr3 = [];
    //arr1.sort();
   // arr2.sort();
   // console.log(arr1);
    for( let i = 0; i< arr1.length;i++){
            arr3.push(arr1[i]);
    }
    for( let j = 0; j< arr2.length;j++){
        arr3.push(arr2[j]);
        }
        for(let i = 0; i<arr3.length; i++){
          for(let k = 0; k<arr3.length; k++){
            if(arr3[k] > arr3[k+1]){
              let t = arr3[k];
              arr3[k] = arr3[k+1];
              arr3[k+1] = t;
            }
          }
        }
        return arr3;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));	//[ 1, 2, 3, 4, 5, 6 ]
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]));	//[ 0, 3, 1, 9, 7, 2 ]
console.log(concat([], [ 9, 7, 2 ]));//	[ 9, 7, 2 ]
console.log(concat([ 5, 10 ], []));