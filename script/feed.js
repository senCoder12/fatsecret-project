const fetchData = async (id) => {
    const data = await fetch(`http://localhost:3000/profilePage/${id}`);
    const result = await data.json();
    displayData(result,id);
}

let displayData = (data,i) => {
    let elm = data;
    document.getElementById("mainPart").innerHTML = `
        <div class="display-flex margin-top-line">
        <div id="profile_pic">
            <img src="${elm.profile_pic}" alt="" style="width:60px; height:60px;">
        </div>
        <div class="details">
            <p class="name1">${elm.name}'s Journal ${elm.post_Date}</p>
        </div>
    </div>
    <p class="para-hifi">${elm.name}'s Profile < Previous Entry |Next Entry ></Previous></p>

    <div class="border1">
        <div class="feed feed-new">
            <div class="details">
                <p>${elm.description}</p>
                <img src="${elm.img}" alt="">
            </div>
        </div>
        
        <p style="font-size: 11px; line-height: 15px;"><span style="color: #028cc4;margin-left:21px;">Diet Calendar</span> Entry for ${elm.post_Date}:</p>
        <div class="display-flex detailSection">
            <img src="https://static.fatsecret.com/static/images/icons/cal_bl.png" alt="">
            <p class="kcal">${elm.kcal}</p>
            <p>${elm.details} <span style="color: #028cc4;">more...</span></p>
        </div>
    </div>
    <div class="commentSection" style="margin-top: 30px;">
        <div class="display-flex comments">
            <p style="margin-top: 16px;color: #028cc4;">${elm.comments.length} comments</p>
            <button class="color"><div style="position: relative;bottom : 4px;"><img src="https://static.fatsecret.com/static/images/def20/feed/But_support_default.png" alt="" style="position: relative;top: 5px;">Support</div></button>
            <button class="color hide"><div style="position: relative;bottom : 4px;"><img src="https://static.fatsecret.com/static/images/def20/feed/But_support_hover.png" alt="" style="position: relative;top: 5px;">Support</div></button>
            <button class="color hide"><div style="position: relative;bottom : 4px;"><img src="https://static.fatsecret.com/static/images/def20/feed/But_support_pressed.png" alt="" style="position: relative;top: 5px;">Support</div></button>
        </div>
    </div>
    <div class="display-flex title">
        <img src="https://static.fatsecret.com/static/images/box/membersicon.gif" alt="">
        <p>Comments</p>
    </div>
        `    
    elm.comments.map((element,index)=> {
        document.getElementById("mainPart").innerHTML  += `
        <div class="particularComment">
            <p>${element.hisComment}</p>
            <p><span class="date">${element.data}</span> by member: <span class="cmntName">${element.name}</span></p>
        </div>
        `
    })
    document.getElementById("mainPart").innerHTML += `
        <div class="newFooter">
            <div class="display-flex lastOne">
                <h3>Submit a Comment</h3> <button class="submitBtn" id="redirect${i}">Submit</button> 
            </div>
            <div class="com1 display-flex">
                <div class="cmntLine">   
                    <textarea type="text" class="cmntInp2" id="input${i}"></textarea>              
                </div>
            </div>
        </div>
    `
        
        document.getElementById(`redirect${i}`).addEventListener('click',async() =>{
            let cmnt = document.getElementById(`input${i}`).value;
            if(document.getElementById(`input${i}`).value != ""){
                await postComment(elm,`${elm.id}`,cmnt);
                fetchData(localStorage.getItem("id"));
            }
            document.getElementById(`input${i}`).value = "";
        });
        document.querySelector('.comments button').addEventListener("mouseenter", () => {
            document.querySelectorAll('.color')[1].classList.remove("hide")
            document.querySelectorAll('.color')[0].classList.add("hide")
        })
        document.querySelector('.comments button').addEventListener("mouseleave", () => {
            
            document.querySelectorAll('.color')[0].classList.remove("hide")
            document.querySelectorAll('.color')[1].classList.add("hide")
        })
    
        document.querySelectorAll('.color')[0].addEventListener("click", () => {
    
            document.querySelectorAll('.color')[0].classList.add("hide")
            document.querySelectorAll('.color')[1].classList.add("hide")
            document.querySelectorAll('.color')[2].classList.remove("hide")
        })
        document.querySelectorAll('.color')[1].addEventListener("click", () => {
    
            document.querySelectorAll('.color')[1].classList.add("hide")
            document.querySelectorAll('.color')[0].classList.add("hide")
            document.querySelectorAll('.color')[2].classList.remove("hide")
        })
    
        document.querySelectorAll('.color')[2].addEventListener("click", () => {
    
            document.querySelectorAll('.color')[1].classList.add("hide")
            document.querySelectorAll('.color')[0].classList.remove("hide")
            document.querySelectorAll('.color')[2].classList.add("hide")
        })
    
}
fetchData(localStorage.getItem("id"));

const postComment = async(elm,id,cmnt) => {
    console.log(id);
    let myName = JSON.parse(localStorage.getItem("data")).name;
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