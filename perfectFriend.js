function perfectFriend(names){
    for(const element of names){
        if(element.length==5){
            return element;
        }
    }
    return "No perfect friend was found";
}


const names = ["dev", "michael", "lucifer", "asif", "karima", "lutfor", "habib", "ridi"
, "hazari", "bheemm"];

let store_perfect_friend = perfectFriend(names);

console.log(store_perfect_friend);