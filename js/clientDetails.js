import {
    clientBalance,
    clientName,
    clientAccountNumber,
} from "./domVariables.js";


export function displayClientDetails(){
    
    let current_user = new Array();
    current_user = JSON.parse(localStorage.getItem("currentUser"))
    
    clientBalance.innerHTML ='₱' + current_user.balance;
    clientName.innerHTML = current_user.firstname + ' ' + current_user.lastname;
    clientAccountNumber.innerHTML = current_user.accountnumber;
}