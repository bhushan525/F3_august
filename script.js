let nam = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("pass");
let consfirmpass =document.getElementById("confirmpass");
let errorMsg = document.getElementById("errorMsg");
let successMsg = document.getElementById("successMsg");
let submitBtn  = document.getElementById("submitBtn");
const userInfo={
    nam:"userName",
    email:"userEmail",
    password:"userPass",
    confirmPass:"userConfirmPass",
    token:"Abceds125"
};

function generateAccessToken() {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const tokenLength = 16;
    let accessToken = '';
    
    for (let i = 0; i < tokenLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      accessToken += charset[randomIndex];
    }
    
    return accessToken;
  }
const profilepage = document.getElementById("profilepage");
const indexpage = document.getElementById("indexpage");
localStorage.length===0&&profilepage.setAttribute("href", "index.html");
localStorage.length===0&&submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(nam.value==="" || email.value==="" || password.value===""||consfirmpass.value===""){
        errorMsg.style.display="block";
        successMsg.style.display="none";
        console.log("notOk");

    }
    else if(password.value!==consfirmpass.value){
        errorMsg.innerText = "Password and Confirm Password Should be same";
        errorMsg.style.display="block";
        successMsg.style.display="none";
        console.log("notOk");
    }else{
        profilepage.setAttribute("href", "profile.html");
        userInfo.nam = nam.value; userInfo.email=email.value;
        userInfo.password=password.value;
        userInfo.confirmPass = consfirmpass.value;
        userInfo.token = generateAccessToken()
        localStorage.setItem("token", `${userInfo.token}`);
        errorMsg.style.display="none";
        successMsg.style.display="block";
        localStorage.setItem("key", JSON.stringify(userInfo));
        console.log(userInfo);
    }
})
