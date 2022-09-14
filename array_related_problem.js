function update_postion(a, n){
    a[n] = 75;
}

function add_element(a){
    a.push(100);
}

function remove_element(a){
    a.pop();
}

function check_value(a, value){
    var index = a.indexOf(value);

    return index;
}


var a = [1, 2, 3, 78, 95, 45, 4, 5 , 6, 10];

console.log(a);

update_postion(a, 4);

console.log(a);

add_element(a);

console.log(a);

remove_element(a);

console.log(a);
var ch_val = check_value(a, 4);

if(ch_val==-1){
    console.log("The value was not found");
}
else{
    console.log("The value was found in position "+ ch_val);
}
