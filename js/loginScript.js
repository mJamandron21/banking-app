import { 
    loginPassword,
    loginUsername,
    loginSubmit,
    formLogin } from "./domVariables";

export function submitLoginForm(){
    loginSubmit.addEventListener("click", function(event){
    console.log("submit login click")
    
    event.preventDefault()
 });
}

function loginUser(){
    
}