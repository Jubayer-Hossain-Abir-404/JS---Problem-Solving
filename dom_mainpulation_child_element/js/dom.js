const container = document.getElementById("friends");
document.getElementById("addBorder").addEventListener("click", function () {
    container.style.border = "2px solid yellow";
});

function addBackground() {
    const friends = document.getElementsByClassName("friend");
    for (const friend of friends) {
        friend.style.backgroundColor = "lightblue";
    }
}

function checkBackgroundColor() {
    const friends = document.getElementsByClassName("friend");
    for (const friend of friends) {
        if (friend.style.backgroundColor == "lightblue") {
            return true;
        }
    }
    return false;
}

function addTitleColor() {
    const friendsTitle = document.getElementsByClassName("friendName");
    for (const friendName of friendsTitle) {
        friendName.style.color = "goldenrod";
    }
}

function checkTitleColor() {
    const friendsTitle = document.getElementsByClassName("friendName");
    for (const friendName of friendsTitle) {
        if (friendName.style.color == "goldenrod") {
            return true;
        }
    }
    return false;
}

function removeExtraChild(){
  // debugger;
  // removing extra child
  var childLength = container.children.length;
  if (childLength > 4) {
    var i = 0;
    // using while loop
    while (parseInt(childLength - 4) > i) {
      container.removeChild(container.children[4]);
      i++;
    }
  }
}

function removeExtraBorder(){
  // removing extra border
  if (container.style.border == "2px solid yellow") {
    container.style.border = 'none';
  }
}

function removeBackgroundColor(){
    // removing background color
    const check = checkBackgroundColor();
    if(check == true){
        const friends = document.getElementsByClassName("friend");
        for (const friend of friends) {
          friend.style.backgroundColor = 'white';
        }
    }
}

function removeNameColor(){
    const check = checkTitleColor();
    if (check == true) {
      const friendsTitle = document.getElementsByClassName("friendName");
      for (const friendName of friendsTitle) {
        friendName.style.color = 'black';
      }
    }
}

function backToBasic() {
    
    removeExtraChild();

    removeExtraBorder();

    removeBackgroundColor();

    removeNameColor();
}

document.getElementById("addFriend").addEventListener("click", function () {
    const friend = document.createElement('div');
    friend.classList.add("friend");

    friend.innerHTML = `
        <h3 class="friendName">New Friend</h3>
        <p>Nam pariatur qui error assumenda!</p>
    `;
    container.appendChild(friend);
    const checkColor = checkBackgroundColor();
    const checkNameColor = checkTitleColor();
    if (checkColor == true) {
        addBackground();
    }
    if (checkNameColor == true) {
        addTitleColor();
    }
});
