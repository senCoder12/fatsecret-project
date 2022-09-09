export  const myfooter = `
  
<div id="whitewall">
<p>Get the app</p>
<div id="playstorebuttons" >
    <a><img src="https://a.ftscrt.com/static/images/mobi/ios/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"></a>
    <a><img src="https://a.ftscrt.com/static/images/mobi/android/en_get_2.svg"></a>
</div>
</div>
<div id="footermiddel">
<div id="fmsocial">
    <a href=""><img src="https://a.ftscrt.com/static/images/social/but_social_facebook.svg" alt="fb"></a>
    <a href=""><img src="https://a.ftscrt.com/static/images/social/but_social_instagram.svg" alt="insta"></a>
    <a href=""><img src="https://a.ftscrt.com/static/images/social/but_social_twitter.svg" alt="twitter"></a>
</div>
<div id="fmmid">
    <div><a>BRAND LIST</a></div>
    <div><a>CONTACT US</a></div>
</div>
<div id="fmbottom">
    <div><a href="">FIND PEOPLE</a></div>
    <div><a href="">TERMS & CONDITIONS</a></div>
    <div><a href="">PRIVACY POLICY</a></div>
    <div><a href="">REPORT ABUSE</a></div>
</div>
</div>
<div id="footergreen">
<div id="ftin">
<div></div>
<div><p>© 2022 FatSecret. All rights reserved.</p></div>
<div>INDIA</div>
</div>
</div>

`



// <div id="navbar"></div>

export const mynavbar = `

<style>
    #signout a {
        text-decoration: none;
        color: white;
    }
</style>

<div id="topnavbar">
    <!-- <div> -->
        <p>
            Hello <span id="name">${JSON.parse(localStorage.getItem('data')).name}</span>  |  My Weight: <span id="weight">${JSON.parse(localStorage.getItem('data')).weight}</span> kg  |  <span id="signout"><a href="./index.html">Sign Out</a></span>
        </p>
    <!-- </div> -->
</div>



<div id="middlenavbar">

    

    <img id="mainlogo" src="https://a.ftscrt.com/static/images/def20/Fatsecret_logo.png" alt="">
    <p id="india">INDIA</p>
    <div id="searchbar">
        <button id="recbutton"><img src="https://static.fatsecret.com/static/images/def20/quicksearch/search_foods.png" alt=""></button>
        <input type="text" id="mastersearch" placeholder="Enter search">
        <button id="mastersearchbutton"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
</div>



<div id="bottomnavbar">

<div id="optionsfornav">
<div><a href="./myFatSecretPage.html">MY FATSECRET</a></div>
<div><a href="./food.html">FOODS</a></div>
<div><a href="./recepies.html">RECIPES</a></div>
<div><a href="">FITNESS</a></div>
<div><a href="">COMMUNITY</a></div>
</div>
</div>

<script>
    document.getElementById("signout").addEventListener("click", () => {
        localStorage.clear();
    });
</script>

`