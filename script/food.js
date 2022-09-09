console.log("hello food");

async function getData(){
    let res = await fetch(`http://localhost:3000/food`)
    let data = await res.json();
    console.log(data);
    let display = document.getElementById("flexDataDetails");
    data.map((elem)=>{
        display.innerHTML +=`
              <div class="dataName">
            <div id="detailsData">
                <div class="foodImg" >
                    <img src="${elem.image}" alt="">
                </div>
                <div class="beans">
                    <h4>${elem.f_name}</h4>
                    <p>${elem.details}</p>
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




// search with debouncing

// debouncing in search bar code------------------------- 
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


// document.getElementById("searchbutton").addEventListener("click", searchData)


function searchData(){
    let val = document.getElementById("searchbox").value;
    localStorage.setItem("foodValue", JSON.stringify(val));
    location.href = "./milk.html";
}