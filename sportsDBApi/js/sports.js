const searchButton = () =>{
    const inputText = document.getElementById("searchInput");
    console.log(inputText.value);
    if(inputText.value==''){
        errorMessage('');
    }
    inputText.value = "";
}

const eMessage = document.getElementById("errorMessage");
const clearContent = () =>{
    eMessage.textContent = '';
}

const errorMessage = (inputValue) =>{
    clearContent();
    const h2 = document.createElement('h2');
    h2.classList.add("text-center", "text-danger");
    if(inputValue==''){
        h2.innerText = "Please enter something to get a result";
    }
    eMessage.appendChild(h2);
}