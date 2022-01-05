import { logoutButton } from "./domVariables.js";

export function logout(){
    logoutButton.addEventListener("click", function(event){
        console.log("logout click")
    
        localStorage.removeItem("currentUser");
        location.replace("./index.html");
        
     });
}