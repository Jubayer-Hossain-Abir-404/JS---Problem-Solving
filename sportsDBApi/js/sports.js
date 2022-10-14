const searchButton = () =>{
    const inputText = document.getElementById("searchInput");
    if(inputText.value==''){
        errorMessage('');
    }
    else{
        const loadDataV = loadData(inputText.value); 
    }
    inputText.value = "";
}



const eMessage = document.getElementById("errorMessage");
const clearContent = () =>{
    eMessage.textContent = '';
}

const loadData = async (inputValue) =>{
    try{
        const url = `https://www.thesportsdb.com/api/v31/json/2/search_all_leagues.php?c=${inputValue}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.countries);
        if(data.countries==null){
            errorMessage('null');
        }
    }
    catch(error){
        errorMessage(error);
    }
    
}

const errorMessage = (inputValue) => {
  clearContent();
  const h2 = document.createElement("h2");
  h2.classList.add("text-center", "text-danger");
  if (inputValue == "") {
    h2.innerText = "Please enter something to get a result";
  }
  else if(inputValue=='null'){
    h2.innerText = "No result found";
  }
  else{
    h2.innerText = 'Something went wrong with the server';
    console.log(inputValue);
  }
  eMessage.appendChild(h2);
};