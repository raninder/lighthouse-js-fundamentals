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

const metric = 'redness'
const judgeVegetable = function (vegetables, metric) {
  // Yoifur code in here ...
  if(metric === "redness"){
    let temp = 0;
    let s = "abc";
    for(let i = 0; i < vegetables.length; i++){
      if(vegetables[i].redness > temp){
        temp = vegetables[i].redness;
        s = vegetables[i]. submitter;
      } 
    }
    return s;
  }
}
console.log(judgeVegetable(vegetables, "redness"));
