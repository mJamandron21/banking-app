//importing dom elements
import {
    formRegister,
    registerFirstname,
    registerLastname,
    registerEmail,
    registerUsername,
    registerPassword,
    registerConfirmPass,
    registerSubmit } from "./domVariables.js";


export function submitRegisterForm(){
    registerSubmit.addEventListener("click", function(event){
    console.log("submit click")
    registerUser();
    event.preventDefault()
    });
}


function registerUser(){
let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("userRecords"))?JSON.parse(localStorage.getItem("userRecords")):[]

if( registerFirstname.value == ""){
    alert("Please Enter your Firstname!")
    registerFirstname.focus();
}else if( registerLastname.value == "" ){
    alert("Please Enter your Lastname!")
    registerLastname.focus();
}else if( registerEmail.value == ""){
    alert("Please Enter your Email!")
    registerEmail.focus();
}else if( registerUsername.value == "" ){
    alert("Please Enter your Username!")  
    registerUsername.focus();
}else if( registerPassword.value == ""){
    alert("Please Enter your Password!")
    registerPassword.focus();
}else if( registerConfirmPass.value == "" ){
    alert("Please Enter your Comfirm Password!")  
    registerConfirmPass.focus();
}else if(user_records.some((v)=>{return v.username==registerUsername.value})){
    alert("Sorry the username you have entered is already taken!")
    registerUsername.focus();
}else if(registerPassword.value != registerConfirmPass.value){
    alert("Password and Confirm Password didn't match!")
    registerConfirmPass.focus();
}
else{ 
    // alert("Fill all the fields!")
    // modalRegister.focus();
    let accountnumber = Math.floor(100000000000 + Math.random() * 900000000000);
    let balance = 0
    let expenses = []
    let role = "user"
    
        user_records.push({
            "accountnumber" : accountnumber,
            "firstname" : registerFirstname.value,
            "lastname" : registerLastname.value,
            "username" : registerUsername.value,
            "password" : registerPassword.value,
            "email" : registerEmail.value,
            "balance" : balance,
            "expenses" : expenses,
            "role": role,
        })
        localStorage.setItem("userRecords",JSON.stringify(user_records));
        alert("Registered Successfully!");
        formRegister.reset();
}

}//end of registerUser Function!


