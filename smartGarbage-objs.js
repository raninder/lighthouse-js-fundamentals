const bins = {
  waste : 0,
  recycling : 0,
  compost : 0
};
    
let trash = "waste";
const smartGarbage = function(trash, bins){
  if(trash === "waste"){
    bins.waste += 1;
    return bins;
  }
  else if(trash === "recycling"){
    bins.recycling += 1;
    return bins;
  } 
  else {
    bins.compost += 1;
    return bins;
  }
}
console.log(smartGarbage("waste" , { waste: 1, recycling: 1, compost: 1 }));
//smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
console.log(smartGarbage("recycling" , { waste: 1, recycling: 1, compost: 1 }));
console.log(smartGarbage("compost" , { waste: 1, recycling: 1, compost: 1 }));