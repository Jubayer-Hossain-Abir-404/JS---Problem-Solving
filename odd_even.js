function even_odd(number){
    if(number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}



var result = even_odd(11);

if(result == true){
    console.log("This is an even number");
}
else{
    console.log("This is an odd number");
}