import {
    clientBalance,
    clientName,
    clientAccountNumber,
    currentUsernameHeader
} from "./domVariables.js";


export function ifCurrentUserNotExist(){
    let current_user = new Array();
    current_user = JSON.parse(localStorage.getItem("currentUser"))?JSON.parse(localStorage.getItem("currentUser")):[] 

    if(current_user == ''){
        location.replace("./index.html");
    }
}

export function displayClientDetails(){

    //setting up the current user form localstorage into the dom elements
    let getCurrentUser = localStorage.getItem("currentUser")
    let currentUserArray = new Array();
    currentUserArray = JSON.parse(getCurrentUser);
    currentUsernameHeader.innerHTML =  currentUserArray[0].CurrentUser;

    //setting up the userRecords form localstorage to be use in showing the clients details
    let getUserRecords = localStorage.getItem("userRecords")
    let userRecordsArray = new Array();
    userRecordsArray = JSON.parse(getUserRecords);
    let objIndex = userRecordsArray.findIndex((obj => obj.username == currentUsernameHeader.innerHTML));
    clientBalance.innerHTML = '₱' + userRecordsArray[objIndex].balance
    clientName.innerHTML = `${userRecordsArray[objIndex].firstname} ${userRecordsArray[objIndex].lastname}`
    clientAccountNumber.innerHTML = userRecordsArray[objIndex].accountnumber
    
}
