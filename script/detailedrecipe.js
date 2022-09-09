let data = JSON.parse(localStorage.getItem("clickedrecipe"));

document.querySelector("#currentpage a").innerText = data.strMeal;



appendData();


function appendData(){
    let data  = JSON.parse(localStorage.getItem("clickedrecipe")) || "";

    document.getElementById("mainheading").innerText = data.strMeal;

    document.querySelector("#i1 a").innerText = data.strIngredient1;
    document.querySelector("#i2 a").innerText = data.strIngredient2;
    document.querySelector("#i3 a").innerText = data.strIngredient3;
    document.querySelector("#i4 a").innerText = data.strIngredient4;
    document.querySelector("#i5 a").innerText = data.strIngredient5;

    document.getElementById("mainpic").src = data.strMealThumb;


    document.querySelector("#directions p").innerText = data.strInstructions;

}
























// review section radio buttons

document.getElementById("r1").addEventListener("click", ()=>{
    document.getElementById("r2").checked = false;
    document.getElementById("r3").checked = false;
    document.getElementById("r4").checked = false;
    document.getElementById("r5").checked = false;
})

document.getElementById("r2").addEventListener("click", ()=>{
    document.getElementById("r1").checked = false;
    document.getElementById("r3").checked = false;
    document.getElementById("r4").checked = false;
    document.getElementById("r5").checked = false;
})

document.getElementById("r3").addEventListener("click", ()=>{
    document.getElementById("r1").checked = false;
    document.getElementById("r2").checked = false;
    document.getElementById("r4").checked = false;
    document.getElementById("r5").checked = false;
})

document.getElementById("r4").addEventListener("click", ()=>{
    document.getElementById("r1").checked = false;
    document.getElementById("r2").checked = false;
    document.getElementById("r3").checked = false;
    document.getElementById("r5").checked = false;
})

document.getElementById("r5").addEventListener("click", ()=>{
    document.getElementById("r1").checked = false;
    document.getElementById("r2").checked = false;
    document.getElementById("r3").checked = false;
    document.getElementById("r4").checked = false;
})




document.getElementById("reviewpostbutton").addEventListener("click", ()=>{
    let url;

    if(document.getElementById("r1").checked){
        url = "https://a.ftscrt.com/static/images/stars/one-star.gif";
    }else if(document.getElementById("r2").checked){
        url = "https://a.ftscrt.com/static/images/stars/two-star.gif";
    }else if(document.getElementById("r3").checked){
        url = "https://a.ftscrt.com/static/images/stars/three-star.gif";
    }else if(document.getElementById("r4").checked){
        url = "https://a.ftscrt.com/static/images/stars/four-star.gif";
    }else if(document.getElementById("r5").checked){
        url = "https://a.ftscrt.com/static/images/stars/five-star.gif";
    }

    let review = document.getElementById("textreview").value;

    document.getElementById("reviewposted").innerText = review;
    
    document.getElementById("star").src = url;

    document.getElementById("date").innerText = "10 Sep 22 by member : Gaurav sapkal"
})