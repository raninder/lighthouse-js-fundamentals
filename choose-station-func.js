const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  // Your code in here ...
  let goodStations = [];
  for ( const s of stations){
    if((s[1] >= 20) && ((s[2] === "school") || (s[2] === "community centre"))){
      goodStations.push(s[0]);
      //console.log(goodStations);
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));