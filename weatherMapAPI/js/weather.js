const searchButton = () =>{
    const inputField = document.getElementById("inputField");
    console.log(inputField.value);
    if(inputField.value==''){
        errorMessage('');
    }

    inputField.value = '';
}



const errorMessageS = document.getElementById("errorMessageS");

const clearContent = () => {
    errorMessageS.textContent = '';
}

const errorMessage = (message) =>{
    clearContent();
    const h1 = document.createElement('h1');

    if(message==''){
        h1.innerText = 'Please enter something to get a result';
    }

    errorMessageS.appendChild(h1);
}