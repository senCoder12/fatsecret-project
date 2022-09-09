


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
    let val = JSON.parse(localStorage.getItem("searchedvalue")) || "";
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`);
    let res1 = await res.json();
    // console.log(res1);
    let data = res1.meals;
    // console.log(data);
    append(data);
}





document.getElementById("searchbutton").addEventListener("click", searchData)


function searchData(){
    let val = document.getElementById("searchbox").value;
    localStorage.setItem("searchedvalue", JSON.stringify(val));
    location.href = "./searchedrecepies.html";
}



document.getElementById("topsearchbutton").addEventListener("click", ()=>{
    
        let val = document.getElementById("topsearchbar").value;
        localStorage.setItem("searchedvalue", JSON.stringify(val));
        location.href = "./searchedrecepies.html";

    // console.log(url);
})




// debouncing in search bar code-------------------------
let id;
function debounce(){
    if(id)
    clearTimeout(id);

   id = setTimeout(() => {
        searchdebounce();
        
    }, 1000);

}


async function searchdebounce(){
    try{
        let val = document.getElementById("searchbox").value;
        if(val==""){
            document.getElementById("searchresultbox").style.display = "none";
        }else{
            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`);
            let res1 = await res.json();
            
            let data = res1.meals;
        
            suggestionbox(data);
        }
        // console.log(val);
        
    }catch(err){
        
        document.getElementById("searchresultbox").style.display = "none";
        console.log(err);
    }
   
}

function suggestionbox(data){
    // console.log(data);
    let div = document.getElementById("searchresultbox");
    div.innerHTML = "";
    for(let i=0; i<data.length; i++){
        if(i==4){
            break;
        }

        let p = document.createElement("p");
        p.innerText = data[i].strMeal;
        p.addEventListener("click", searchData);

        div.append(p);
        div.style.display = "block";
    }
}