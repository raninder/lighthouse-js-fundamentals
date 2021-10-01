const whichSchool  = function (age) {
  let school = " ";
  if(age < 13){
    school = "Elementary school"; 
  }
  else if(age >= 13 && age <= 18){
    school = "Secondary school"; 
  }
  else{
    school = "Lighthouse Labs";
  }
  console.log(school);
}