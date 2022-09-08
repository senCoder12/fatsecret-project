const fetchData = async () => {
    const data = await fetch("http://localhost:3000/profilePage");
    const result = await data.json();
    displayData(result);
}

let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let day = new Date().getDay();
day = days[day];
day = day.split("")[0]+day.split("")[1]+day.split("")[2];
document.getElementById("dayExact").innerText = day.toUpperCase();

let displayData = (data) => {
    data.map((elm, i) => {
        let div = document.createElement("div");
        div.setAttribute("class", "border");
        div.innerHTML = `
        <div class="feed feed${i}">
            <div id="profile_pic">
                <img src="${elm.profile_pic}" alt="" style="width:60px; height:60px;">
            </div>
            <div class="details">
                <p class="name memberLink">${elm.name}</p>
                <p>${elm.description}</p>
                <img src="${elm.img}" alt="">
            </div>
        </div>
        <div class="commentSection">
            <div class="display-flex comments">
                <p style="margin-top: 16px;color: #028cc4;">${elm.comments.length} comments</p>
                <p><img src="https://static.fatsecret.com/static/images/def20/feed/But_support_default.png" alt="" style="position: relative;top: 5px; color: #BBB;"> 12 Supporters</p>
                <button class="color"><div style="position: relative;bottom : 4px;"><img src="https://static.fatsecret.com/static/images/def20/feed/But_support_default.png" alt="" style="position: relative;top: 5px;">Support</div></button>
                <button class="color hide"><div style="position: relative;bottom : 4px;"><img src="https://static.fatsecret.com/static/images/def20/feed/But_support_hover.png" alt="" style="position: relative;top: 5px;">Support</div></button>
                <button class="color hide"><div style="position: relative;bottom : 4px;"><img src="https://static.fatsecret.com/static/images/def20/feed/But_support_pressed.png" alt="" style="position: relative;top: 5px;">Support</div></button>
            </div>
        </div>
        `
        elm.comments.map((element,index)=> {
            if(index > 2) return;
            div.innerHTML += `
            <div class="com display-flex">
                <img src="${element.img}" alt="" style="width: 25px; height: 25px;">
                <div class="cmntLine">   
                    <span class="memberLink" >
                        <b>${element.name}</b>
                    </span>
                    ${element.hisComment}              
                </div>
            </div>
            `
        })
        div.innerHTML += `
        <div class="com display-flex">
            <img src="https://m.ftscrt.com/static/member/_carrot_shared_sq.jpg" alt="" style="width: 25px; height: 25px;">
            <div class="cmntLine">   
                <input type="text" placeholder="Write comment" class="cmntInput" id="input${i}"/>              
            </div>
        </div>
        <div class="footer fotter${i}" style="display:none;">
            <button class="cmntBtn" id="redirect${i}">Post comment</button><button class="cancelBtn cancel${i}">Cancel</button>
        </div>
        `
        
        document.getElementById("mainSection").append(div);
        document.getElementById(`redirect${i}`).addEventListener('click',async() =>{
            let cmnt = document.getElementById(`input${i}`).value;
            if(document.getElementById(`input${i}`).value != ""){
                await postComment(elm,`${elm.id}`,cmnt);
            }
            
            document.querySelector(`.fotter${i}`).style.display = "none";
            document.getElementById(`input${i}`).value = "";
        });
        document.getElementById(`input${i}`).addEventListener("click",() =>{
            document.querySelector(`.fotter${i}`).style.display = "flex";
        })
        document.querySelector(`.cancel${i}`).addEventListener("click",() =>{
            document.querySelector(`.fotter${i}`).style.display = "none";
        })
        document.querySelector(`.feed${i}`).addEventListener("click",() =>{
            localStorage.setItem("id",elm.id);
            location.href = "./feed.html";
        });
        
    })
}
fetchData();

const postComment = async(elm,id,cmnt) => {
    console.log(id);
    const myName = "Mayukh Sen";
    let todate = new Date().toLocaleDateString('en-us', {  year:"numeric", month:"short", day:"numeric"}) 
    let obj = {name:myName,hisComment: cmnt,img:"https://i.pinimg.com/originals/19/e3/79/19e379ccc6e5099b6278fef0696358b5.png",data: todate};
    elm.comments.push(obj);
    try {
        let yup = await fetch(`http://localhost:3000/profilePage/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(elm)
        })
    }catch {
        console.log(id);
    }
}