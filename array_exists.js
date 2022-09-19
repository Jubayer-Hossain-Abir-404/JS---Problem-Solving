function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return "No array was sent";
    }
    let mega  = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}



const friends = ["kutub", "Lion", "Shamol", "Sabbir"];

const result = megaFriend(1245);

console.log(result);

// concat

const first = [1,3,5];
const second = [4,6,8,9];

const combined = first.concat(second);

console.log(combined);

