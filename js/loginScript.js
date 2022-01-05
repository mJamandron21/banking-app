import { 
    loginPassword,
    loginUsername,
    loginSubmit,
    formLogin } from "./domVariables.js";

export function submitLoginForm(){
    loginSubmit.addEventListener("click", function(event){
    console.log("submit login click")
    loginUser();
    
    event.preventDefault()
 });
}

function loginUser(){

let current_user = new Array();
current_user = JSON.parse(localStorage.getItem("currentUser"))?JSON.parse(localStorage.getItem("currentUser")):[]      
if(current_user != '')
{
    alert('Other user is currently login! Please logout first!');
    location.replace("./index.html");
    
}
else{
   
let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("userRecords"))?JSON.parse(localStorage.getItem("userRecords")):[]

if(user_records.some((v)=>{return v.username==loginUsername.value && v.password==loginPassword.value && v.role=='user'})){
    alert("Login Successfully!");
    let current_user = user_records.filter((v)=>{return v.username==loginUsername.value && v.password==loginPassword.value})[0]
    localStorage.setItem("currentUser",JSON.stringify(current_user));
    location.replace("./clientDashboard.html");

}else if(user_records.some((v)=>{return v.username==loginUsername.value && v.password==loginPassword.value && v.role=='admin'})){
    alert("Login Successfully!");
    let current_user = user_records.filter((v)=>{return v.username==loginUsername.value && v.password==loginPassword.value})[0]
    localStorage.setItem("currentUser",JSON.stringify(current_user));
    location.replace("./adminDashboard.html");

}else{
    alert('Login Fail');
}

}

}//end of loginUser function

