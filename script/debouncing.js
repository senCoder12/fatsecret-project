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


document.getElementById("searchbutton").addEventListener("click", searchData)


function searchData(){
    let val = document.getElementById("searchbox").value;
    localStorage.setItem("foodValue", JSON.stringify(val));
    location.href = "./milk.html";
}