function main () {
    const baseURL = 'www.themealdb.com/api/json/v1/1';

    const getMeal = async () => {
        try {
            const response = await fetch(`${baseURL}/search.php?f=a`);
            const responseJson = await response.json();

            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            }else {
                renderAllMeals(responseJson.meals);
            }

        } catch (error) {
            showResponseMessage(error);
        }
    }

    const renderAllMeals = (meals) => {
        const listMealElement = document.querySelector('#listMeal');
        listMealElement.innerHTML = "";

        meals.forEach(meal => {
            listMealElement.innerHTML += `
                <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">(${meal.idMeal}) ${meal.strMeal}</h5>
                        <p class="card-text">
                        ${meal.strInstructions}
                        </p>
                        
                    </div>
                </div>
            </div>
            `;
        });
    }

    const showResponseMessage = (message = 'Check Your Internet Connection') => 
    {
        alert(message);
    }
}

export default main;