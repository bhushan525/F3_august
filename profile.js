const profilepage = document.getElementById("profilepage");
const indexpage = document.getElementById("indexpage");
console.log(profilepage)
console.log(indexpage)
const proName = document.getElementById("DetailsName");
const proEmail = document.getElementById("DetailEmail");
const proPass = document.getElementById("DetailPass");
const logoutbtn = document.getElementById("logoutBtn");
if(localStorage.length===0){
    profilepage.href = "index.html";
    indexpage.href = "index.html"
}else{

    profilepage.setAttribute("href","profile.html");
    indexpage.setAttribute("href","profile.html")
    const newinfo = localStorage.getItem("key");
    const localStorageitems= JSON.parse(newinfo);
    proName.innerText = localStorageitems.nam;
    proEmail.innerText=localStorageitems.email;
    proPass.innerText = localStorageitems.password;
}
logoutbtn.addEventListener("click",()=>{
    localStorage.clear();
    proName.innerText = "";
    proEmail.innerText="";
    proPass.innerText = "";
    profilepage.setAttribute("href","index.html");
    indexpage.setAttribute("href","index.html")
})