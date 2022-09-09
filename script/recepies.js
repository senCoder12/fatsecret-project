

function append(data){
    let popular_recipes = document.getElementById("popular_recipes");


    data.map(function(elem){
        let main_div = document.createElement("div");

        let child_div1 = document.createElement("div");
        let image1 = document.createElement("img");
        image1.src = elem.strMealThumb;
        child_div1.append(image1);


        let child_div2 = document.createElement("div");
        let name = document.createElement("h4");
        name.addEventListener("click", ()=>{
            localStorage.setItem("clickedrecipe", JSON.stringify(elem));
        })
        let anchor = document.createElement("a");
        anchor.href = "./detailedrecipe.html";
        anchor.innerText = elem.strMeal;
        name.append(anchor);
        let pdesc = document.createElement("p");
        // pdesc.innerText = elem. ;
        pdesc.innerText = "Lovely steamed cauliflower mashed with cheese and garlic";

        let image2 = document.createElement("img");
        image2.src = "https://a.ftscrt.com/static/images/stars/four-star.gif" ;

        child_div2.append(name, pdesc, image2);



        let child_div3 = document.createElement("div");
        let pmember = document.createElement("p");
        pmember.innerText = "by member: ";                 /////////
        let anchor2 = document.createElement("a");
        anchor2.href = "";
        // anchor2.innerText = elem.   ;
        anchor2.innerText = elem.strArea;
        // "shanintia"
        pmember.append(anchor2);

        let pd = document.createElement("p");
        // pd.innerText = elem. ;
        pd.innerText = "Per serve - Energy: 67kcal | Carb: 11.76g | Prot: 5.32g | Fat: 0.98g";

        child_div3.append(pmember, pd);

        main_div.append(child_div1, child_div2, child_div3);
        popular_recipes.append(main_div);

    })
}

recipeFetch();

async function recipeFetch(){
    let res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s= ');
    let res1 = await res.json();
    let data = res1.meals;
    append(data);
}

document.getElementById("recipe").checked = true;

document.getElementById("recipe").addEventListener("click", ()=>{
    document.getElementById("food").checked = false;
    document.getElementById("meal").checked = false;
})

document.getElementById("meal").addEventListener("click", ()=>{
    document.getElementById("food").checked = false;
    document.getElementById("recipe").checked = false;
})

document.getElementById("food").addEventListener("click", ()=>{
    document.getElementById("meal").checked = false;
    document.getElementById("recipe").checked = false;
})



document.getElementById("searchbutton").addEventListener("click", ()=>{
    let url;

    if(document.getElementById("recipe").checked){
        let val = document.getElementById("searchbox").value;
        localStorage.setItem("searchedvalue", JSON.stringify(val));
        location.href = "./searchedrecepies.html";
        // url = "../searched recepies/searchedrecepies.html";
    }else if(document.getElementById("meal").checked){
        url = "./meallist.html";
    }else if(document.getElementById("food").checked){
        url = "./foodlist.html";
    }

    // console.log(url);
})