import {
    clientBalance,
    clientName,
    clientAccountNumber,
    currentUsernameHeader,
    amountDeposit,
    depositSubmit,
    formDeposit, 
    amountWithdraw,
    withdrawSubmit,
    formWithdraw,
    recipientSendmoney,
    amountSendmoney,
    continueSendmoney,
    formSendmoney,
    modalSendmoneyConfirm,
    overlaySendmoneyConfirm,
    modalSendmoney,
    overlaySendmoney
} from "./domVariables.js";
import { toggleModalSendmoneyConfirm } from "./clientUtilScript.js";

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

export function deposit(){
    
    depositSubmit.addEventListener("click", function(event){
        console.log("deposit submit click")
    
    if(amountDeposit.value < 0){
        alert("Negative amount is not allowed!");
        amountDeposit.focus();
        event.preventDefault();
    }else if(isNaN(amountDeposit.value)){
        alert("Letters are not allowed!");
        amountDeposit.focus();
        event.preventDefault();
    }else if(amountDeposit.value.length != 0){
        let getUserRecords = localStorage.getItem("userRecords");  
        let userRecordsArray = new Array(); 
        userRecordsArray = JSON.parse(getUserRecords); 
        console.log(userRecordsArray);
    
        let objIndex = userRecordsArray.findIndex((obj => obj.username == currentUsernameHeader.innerHTML));
    
        var currentBalance = userRecordsArray[objIndex].balance;
        var totalAmount = Number.parseFloat(amountDeposit.value) + currentBalance;
    
        userRecordsArray[objIndex].balance = totalAmount;
    
        clientBalance.innerHTML = userRecordsArray[objIndex].balance; 
        localStorage.setItem("userRecords", JSON.stringify(userRecordsArray));
        
        alert("Deposit Transaction Successful")
        formDeposit.reset();
    }else{
        
        alert("Deposit Transaction Failed!")

    }  

    });
}

export function withdrawal(){
    withdrawSubmit.addEventListener("click", function(event){
        console.log("withdraw submit click")
        
        let getUserRecords = localStorage.getItem("userRecords");  
        let userRecordsArray = new Array(); 
        userRecordsArray = JSON.parse(getUserRecords); 
        console.log(userRecordsArray);
    
        let objIndex = userRecordsArray.findIndex((obj => obj.username == currentUsernameHeader.innerHTML));
        var currentBalance = userRecordsArray[objIndex].balance;
        
    if (Number.parseFloat(currentBalance) < Number.parseFloat(amountWithdraw.value)){
        alert("You don't have enough balance!")
        amountWithdraw.focus();
        event.preventDefault();
    }else if(amountWithdraw.value < 0){
        alert("Negative amount is not allowed!")
        amountWithdraw.focus();
        event.preventDefault();
    }else if(isNaN(amountWithdraw.value)){
        alert("Letter is not allowed!");
        amountWithdraw.focus();
        event.preventDefault();
    }else if((amountWithdraw.value.length != 0  && amountWithdraw.value % 1 != 0) ||(amountWithdraw.value.length != 0  && amountWithdraw.value % 1 == 0)){
        var totalAmount = Number.parseFloat(currentBalance) - Number.parseFloat(amountWithdraw.value);
        userRecordsArray[objIndex].balance = totalAmount;
        localStorage.setItem("userRecords", JSON.stringify(userRecordsArray));

        alert("Withrawal Transaction Successful!")
        formWithdraw.reset();
            
    }else{
        alert("Withdrawal Transaction Failed!")
        amountWithdraw.focus();
        event.preventDefault();
    }

    });

}

export function sendMoney(){
    continueSendmoney.addEventListener("click",function(event){
        console.log("continue submit click");
        //to search for the data inside user records
        var data = JSON.parse(localStorage.getItem('userRecords'));
        let exist = data.length && JSON.parse(localStorage.getItem('userRecords')).some(data=> data.accountnumber == recipientSendmoney.value && data.role == 'user')

        //to be use on checkig the current balace of sender
        let getUserRecords = localStorage.getItem("userRecords");  
        let userRecordsArray = new Array(); 
        userRecordsArray = JSON.parse(getUserRecords); 
        console.log(userRecordsArray);
        let objIndex = userRecordsArray.findIndex((obj => obj.username == currentUsernameHeader.innerHTML));
        var currentBalance = userRecordsArray[objIndex].balance;

        if(recipientSendmoney.value.length == 0 || amountSendmoney.value.length == 0){
            alert("Fields cannot be blank! Please fill up the fields!")
            recipientSendmoney.focus();
            event.preventDefault();
        }else if(isNaN(recipientSendmoney.value) || isNaN(amountSendmoney.value) ){
            alert("Recipient Account Number/Send Money Amount cannot be a letter!")
            recipientSendmoney.focus();
            event.preventDefault();
        }else if(amountSendmoney.value <= 0){
            alert("Send Money Amount cannot be equal/less than zero!")
            amountSendmoney.focus();
            event.preventDefault();
        }else if(!exist){
            alert("Reciever's Account Number does not exist! Please check your details")
            event.preventDefault();
        }else if (Number.parseFloat(currentBalance) < Number.parseFloat(amountSendmoney.value)){
            alert("Sorry you do not have enough balance to continue this transaction! Please check your Account Balance first")
            event.preventDefault();
        }else{
            //to be use on setting reciever data into localstorage
            let recieverDataArray = new Array();
            recieverDataArray = JSON.parse(getUserRecords)

            let objIndex1 = recieverDataArray.findIndex((obj => obj.accountnumber == recipientSendmoney.value));
            
            let reciever_data = new Array()
            reciever_data = JSON.parse(localStorage.getItem("recieverData")) || [];
            reciever_data.push({
                "reciever_name": `${recieverDataArray[objIndex1].firstname} ${recieverDataArray[objIndex1].lastname}`,
                "reciever_accountnumber": recieverDataArray[objIndex1].accountnumber
            });
            localStorage.setItem('recieverData', JSON.stringify(reciever_data));
            toggleModalSendmoneyConfirm();
            event.preventDefault();
           
        }

    })
}

export function sendMoneyConfirmation(){

}