function seerToMon(seer){
    let Mon = seer/40;
    return Mon;
}



Mon = seerToMon(130.75);

console.log("The Mon is: " + Mon.toPrecision(5));