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
    overlaySendmoney,
    recipientName,
    recipientAccountNumber,
    recipientAmountToSend,
    confirmSendmoney,
    cancelSendmoney,
    addExpenseItem,
    addExpenseCost,
    submitAddExpense
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

        //condition to add deposit history into localstorage
        let newDepositHistory = new Array();
        let transactionNumber = Math.floor(10000000000 + Math.random() * 90000000000);
        let date = new Date().getFullYear()+'/'+(new Date().getMonth()+1)+'/'+new Date().getDate();

        newDepositHistory = {
            "transactionNumber" : transactionNumber,
            "date" : date,
            "beginningBalance" : currentBalance,
            "deposit" : amountDeposit.value,
            "endingBalance": clientBalance.innerHTML

        }

        userRecordsArray[objIndex].depositHistory.push(newDepositHistory);
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

        //to be use on checkig the current balance of sender
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
        }else if(recipientSendmoney.value == userRecordsArray[objIndex].accountnumber){
            alert("Sending money to your own account is not allowed!")
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
                "reciever_accountnumber": recieverDataArray[objIndex1].accountnumber,
                "reciever_amounttorecieve": amountSendmoney.value
            });
            localStorage.setItem('recieverData', JSON.stringify(reciever_data));
            toggleModalSendmoneyConfirm();
            event.preventDefault();

            //to show reciever details in the send money confirm modal
            let recieverRecordsArray = new Array(); 
            recieverRecordsArray = JSON.parse(localStorage.getItem("recieverData")); 
        
            recipientName.innerHTML = recieverRecordsArray[0].reciever_name
            recipientAccountNumber.innerHTML = recieverRecordsArray[0].reciever_accountnumber
            recipientAmountToSend.innerHTML = recieverRecordsArray[0].reciever_amounttorecieve
           
        }

    })
}

export function sendMoneyConfirmation(){

    confirmSendmoney.addEventListener("click", function(event){
        
        computeNewSenderBalance();
        computeNewRecieverBalance();

        alert("Send Money Transaction Successful!");
        localStorage.removeItem("recieverData");

    });

    cancelSendmoney.addEventListener("click", function(event){

        toggleModalSendmoneyConfirm();
        event.preventDefault();
        localStorage.removeItem("recieverData");

    });
        

}

export function addExpense(){
    submitAddExpense.addEventListener("click", function(event){
        //setting up the current user form localstorage into the dom elements
    let getCurrentUser = localStorage.getItem("currentUser")
    let currentUserArray = new Array();
    currentUserArray = JSON.parse(getCurrentUser);
    currentUsernameHeader.innerHTML =  currentUserArray[0].CurrentUser;

        let getUserRecords = localStorage.getItem("userRecords");  
        let userRecordsArray = new Array(); 
        userRecordsArray = JSON.parse(getUserRecords); 
        console.log(userRecordsArray);
    
        let objIndex = userRecordsArray.findIndex((obj => obj.username == currentUsernameHeader.innerHTML));
        var currentBalance = userRecordsArray[objIndex].balance;

        if(addExpenseItem.value.length == 0 || addExpenseCost.value.length == 0){
            alert("Fields cannot be blank! Please fill up the fields!")
            addExpenseItem.focus();
            event.preventDefault();
        }else if(!isNaN(addExpenseItem.value)){
            alert("Expense Item cannot be a number!")
            addExpenseItem.focus();
            event.preventDefault();
        }else if(isNaN(addExpenseCost.value)){
            alert("Expense Cost cannot be a letter!")
            addExpenseCost.focus();
            event.preventDefault();
        }else if(addExpenseCost.value <= 0){
            alert("Expense Cost cannot be equal/less than zero!")
            addExpenseCost.focus();
            event.preventDefault();
        }else{
            //condition to add expense into localstorage
            let newExpense = new Array();

            newExpense = {
                "item" : addExpenseItem.value,
                "cost" : addExpenseCost.value
            }

            let newBalance = Number.parseFloat(currentBalance) - Number.parseFloat(addExpenseCost.value);

            userRecordsArray[objIndex].balance = newBalance;
            userRecordsArray[objIndex].expenses.push(newExpense);
            localStorage.setItem("userRecords", JSON.stringify(userRecordsArray));
        }


    });

}

function computeNewSenderBalance(){
    //setting up the current user form localstorage into the dom elements
    let getCurrentUser = localStorage.getItem("currentUser")
    let currentUserArray = new Array();
    currentUserArray = JSON.parse(getCurrentUser);
    currentUsernameHeader.innerHTML =  currentUserArray[0].CurrentUser;

     //use to get the records of the sender
     let senderRecordsArray =  JSON.parse(localStorage.getItem("userRecords")) || [];   
     console.log(senderRecordsArray);
     let objIndex = senderRecordsArray.findIndex((obj => obj.username == currentUsernameHeader.innerHTML));

    //computation for new sender balance
     let newSenderBalance = Number.parseFloat(senderRecordsArray[objIndex].balance) - Number.parseFloat(recipientAmountToSend.innerHTML)
     console.log(newSenderBalance)
     senderRecordsArray[objIndex].balance = newSenderBalance;
     localStorage.setItem('userRecords', JSON.stringify(senderRecordsArray))

}

function computeNewRecieverBalance(){
    //getting the data for the reciver 
    let recieverRecordsArray = JSON.parse(localStorage.getItem("userRecords")) || [];
    let objIndex1 = recieverRecordsArray.findIndex((obj1 => obj1.accountnumber == recipientAccountNumber.innerHTML));
    
    //to compute for new reciever balance
    let newRecieverBalance = Number.parseFloat(recieverRecordsArray[objIndex1].balance) + Number.parseFloat(recipientAmountToSend.innerHTML)
    console.log(newRecieverBalance)
    recieverRecordsArray[objIndex1].balance = newRecieverBalance;
    localStorage.setItem('userRecords', JSON.stringify(recieverRecordsArray))
}
