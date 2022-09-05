

function changetofoot() {
    document.getElementById("cms").style.display = "none";
    document.getElementById("foot").style.display = "inline";

    var inch = CMToInch(document.getElementById("ctl03_ctl01_HeightCm").value);
    var foot = (inch - inch % 12) / 12;
    var remain = Math.floor(inch % 12);

    document.getElementById("ctl03_ctl01_HeightFeet").value = foot;
    document.getElementById("ctl03_ctl01_HeightInch").value = remain;
    document.getElementById("ctl03_ctl01_HeightMeasureType").value = "1";
}
function changetocms() {
    document.getElementById("cms").style.display = "inline";
    document.getElementById("foot").style.display = "none";

    var cms = InchToCM(parseInt(document.getElementById("ctl03_ctl01_HeightFeet").value), parseInt(document.getElementById("ctl03_ctl01_HeightInch").value));
    document.getElementById("ctl03_ctl01_HeightCm").value = cms;
    document.getElementById("ctl03_ctl01_HeightMeasureType").value = "0";
}

function changetolbs() {
    document.getElementById("kgs").style.display = "none";
    document.getElementById("lbs").style.display = "inline";
    var lbs = KgToLb(document.getElementById("ctl03_ctl01_WeightKg").value);
    var goallbs = KgToLb($("#ctl03_ctl01_GoalWeightKg").val());

}
function changetokgs() {
    document.getElementById("kgs").style.display = "inline";
    document.getElementById("lbs").style.display = "none";

    var kgs = LbToKg(document.getElementById("ctl03_ctl01_WeightLb").value);
    var goalkgs = LbToKg($("#ctl03_ctl01_GoalWeightLb").val());
}


const BASE_URL = "http://masai-api-mocker.herokuapp.com/";

const registerSuccess = (name,email,password) => {
    console.log("Sign Up processesing...");

    let body = {name: name, email: email, password: password, username: userName, mobile: phone,description : description}
    fetch(`${BASE_URL}auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    }).then(response => location.href = "./logIn.html").then(response => console.log("signUp successfull"));
}

document.getElementById("nxtBtn").addEventListener("click", ()=> {
    let name = document.getElementById("ctl03_ctl01_Name").value;
    let email = document.getElementById("ctl03_ctl01_Email").value;
    let password = document.getElementById("ctl03_ctl01_Password").value;

    if (name == "" || email == "" || password == "") {
        alert("please enter a name or email Address or password");
    }else {
        registerSuccess(name, email, password);
    }
})
