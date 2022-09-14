function leapyear(year){
      if (year % 4 == 0) {
        if (year % 100 == 0 && year % 400 != 0) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
}

var leapBool = leapyear(2000);

if(leapBool == true){
    console.log("This is a leap year");
}
else{
    console.log("This is not a leap year")
}