import {
    clientBalance,
    clientName,
    clientAccountNumber,
} from "./domVariables.js";


export function ifCurrentUserNotExist(){
    let current_user = new Array();
    current_user = JSON.parse(localStorage.getItem("currentUser"))?JSON.parse(localStorage.getItem("currentUser")):[] 

    if(current_user == ''){
        location.replace("./index.html");
    }
}

export function displayClientDetails(){
    
    let current_user = new Array();
    current_user = JSON.parse(localStorage.getItem("currentUser"))
    
    clientBalance.innerHTML ='₱' + current_user.balance;
    clientName.innerHTML = current_user.firstname + ' ' + current_user.lastname;
    clientAccountNumber.innerHTML = current_user.accountnumber;
}