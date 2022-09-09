console.log("hello food");

async function getData(){
    let val = JSON.parse(localStorage.getItem("foodValue"));
    
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
    let res1 = await res.json();
    let data = res1.meals;
    console.log(data);
    let display = document.getElementById("flexDataDetails");
    data.map((elem)=>{
        display.innerHTML +=`
              <div class="dataName">
            <div id="detailsData">
                <div class="foodImg" >
                    <img src="${elem.strMealThumb}" alt="">
                </div>
                <div class="beans">
                    <h4>${elem.strMeal}</h4>
                    <p>Tasty recipe with health benifits good for everyone</p>
                    <p class ="more">more..</p>
                </div>
            </div>
        </div>
        `
    })

    display.addEventListener("click",function(elem){
        console.log(elem);
        window.location.href = "milk.html"
    }) 
}
getData()


