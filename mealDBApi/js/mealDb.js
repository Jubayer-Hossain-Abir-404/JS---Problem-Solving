const loadProductItems = async () => {
    const foodInputValue = document.getElementById("foodInput").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodInputValue}`;
    document.getElementById("foodInput").value = "";
    try{
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        if(foodInputValue == ''){
            displayMessage('', "Please enter something to get a result");
        }
        else if (data.meals == null) {
          displayMessage("", "No result found");
        } else {
          displayProductItems(data.meals);
        }  
    }
    catch(error){
        displayMessage(error, 'Something went wrong with the server');
    }
}
const displayItems = document.getElementById("displayItems");
const eMessage = document.getElementById("message");
const displayDetails = document.getElementById("displayDetails");

const clearTextContent = () => {
    displayItems.textContent = "";
    eMessage.textContent = "";
    displayDetails.textContent = "";
}

clearTextContent();

const displayMessage = (error, message) => {
    if(error!=''){
        console.log(error);
    }
    clearTextContent();
    const h2 = document.createElement("h2");
    h2.classList.add('text-center', 'text-danger');
    h2.innerText = message;
    eMessage.appendChild(h2);
}

const displayProductItems = (meals) => {
    clearTextContent();
    // console.log(meals);
    meals.forEach((meal) => {
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
                    <div onclick="loadDetails('${meal.idMeal}')" class="card h-100">
                            <img src="${
                              meal.strMealThumb
                            }" class="card-img-top" alt="foodItem">
                            <div class="card-body">
                                <h5 class="card-title">${meal.strMeal}</h5>
                                <p class="card-text">${meal.strInstructions.slice(
                                  0,
                                  250
                                )}</p>
                            </div>
                    </div>
                `;
      displayItems.appendChild(div);
    });
}

const loadDetails = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const response = await fetch(url);
    const data = await response.json();
    displayDetailsInfo(data.meals[0]);
}

const displayDetailsInfo = mealDetail =>{
    displayDetails.textContent = "";
    displayDetails.innerHTML = `
        <div class="card w-75 mx-auto mb-3">
            <img src="${mealDetail.strMealThumb}" class="card-img-top" alt="detailsImage">
            <div class="card-body">
                <h5 class="card-title">${mealDetail.strMeal}</h5>
                <p class="card-text">${mealDetail.strInstructions.slice(
                  0,
                  150
                )}</p>
                <a href="${
                  mealDetail.strYoutube
                }" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `; 
}

