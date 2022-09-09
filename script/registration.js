document.getElementById("ctl03_ctl01_Email").value = localStorage.getItem("signUpEmail");


function changetofoot() {
    document.getElementById("cms").style.display = "none";
    document.getElementById("foot").style.display = "inline";
}
function changetocms() {
    document.getElementById("cms").style.display = "inline";
    document.getElementById("foot").style.display = "none";

}

function changetolbs() {
    document.getElementById("kgs").style.display = "none";
    document.getElementById("lbs").style.display = "inline";

}
function changetokgs() {
    document.getElementById("kgs").style.display = "inline";
    document.getElementById("lbs").style.display = "none";
}



const registerSuccess = (name,email,password) => {
    console.log("Sign Up processesing...");

    let body = {name: name, email: email, password: password}
    fetch(`http://localhost:3000/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    }).then(response => { 
        console.log("signUp successfull");
        window.location.href = "./registration-2.html";
    });
}

document.getElementById("nxtBtn").addEventListener("click", ()=> {
    let name = document.getElementById("ctl03_ctl01_Name").value;
    let email = document.getElementById("ctl03_ctl01_Email").value;
    let password = document.getElementById("ctl03_ctl01_Password").value;
    let weight = document.getElementById("ctl03_ctl01_WeightKg").value;
    console.log(weight);
    if (name == "" || email == "" || password == "") {
        alert("please enter a name or email Address or password");
    }else {
        registerSuccess(name, email, password);
        let obj = {name: name, weight: weight};
        localStorage.setItem("data", JSON.stringify(obj));
    }
})
