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
const leagueList = document.getElementById("leagueList");

const clearContent = () =>{
    eMessage.textContent = '';
    leagueList.textContent = '';
}

const loadData = async (inputValue) =>{
    try{
        const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=${inputValue}`;
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.countries);
        if(data.countries==null){
            errorMessage('null');
        }
        else{
            displayData(data.countries);
        }
    }
    catch(error){
        errorMessage(error);
    }
    
}

const displayData = (countries) => {
    clearContent();
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card" style="cursor: pointer;">
                <img src="${country.strBadge}" class="card-img-top" alt="leagueImage">
                <div class="card-body">
                    <h5 class="card-title">${country.strLeague}</h5>
                    <p class="card-text">${country.strDescriptionEN.slice(0,250)}</p>
                </div>
            </div>
        `;
        leagueList.appendChild(div);
    });
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

