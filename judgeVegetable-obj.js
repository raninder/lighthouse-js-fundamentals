
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

//const metric = 'redness'
const judgeVegetable = function (vegetables, metric) {
  let temp = 0;
  let sub = 'C';
  if(metric === "redness"){
    for(let i = 0; i < vegetables.length; i++){
      if(vegetables[i].redness > temp){
        temp = vegetables[i].redness;
        sub = vegetables[i]. submitter;
      } 
    }
  }
  else {
    for(let i = 0; i < vegetables.length; i++){
      if(vegetables[i].plumpness > temp){
        temp = vegetables[i].plumpness;
        sub = vegetables[i]. submitter;
      } 
    }
  } 
  return sub;
};
console.log(judgeVegetable(vegetables, "redness"));

