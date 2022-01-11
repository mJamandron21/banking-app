const currentUsernameHeader = document.querySelector(".currentUsernameHeader")

const addExpenseItem = document.querySelector("#add-expense-item");
const addExpenseCost = document.querySelector("#add-expense-cost");
const submitAddExpense = document.querySelector("#submit-add-expense");

function displayExpenses(){
//setting up the current user form localstorage into the dom elements
let getCurrentUser = localStorage.getItem("currentUser")
let currentUserArray = new Array();
currentUserArray = JSON.parse(getCurrentUser);
currentUsernameHeader.innerHTML =  currentUserArray[0].CurrentUser;

    let getUserRecords = localStorage.getItem("userRecords");  
    let userRecordsArray = new Array(); 
    userRecordsArray = JSON.parse(getUserRecords); 

    console.log(userRecordsArray)

    let objIndex = userRecordsArray.findIndex((obj => obj.username == currentUsernameHeader.innerHTML));
    console.log(userRecordsArray[objIndex].expenses)

    var render = document.querySelector("tbody");
    let expenseRecordsArray = new Array();
    expenseRecordsArray = (userRecordsArray[objIndex].expenses)
    
    expenseRecordsArray.forEach((data,index) => {

        render.innerHTML += `
        
            <td>${data.item}</td>
            <td>${data.cost}</td>
            <td><button class = "icon" onclick="deleteExpense()"><i class="fas fa-trash"></i></button><span class="icon" onclick="editExpense"><i class="fas fa-pen"></i></span></td>
         `;
    });
}


function deleteExpense(index){

    console.log("delete expense click")

    if(confirm("Are you sure you want to delete?")){

        var table = document.querySelector('.styled-table-expense'),rowIndex;

        for(var i = 0; i < table.rows.length;i++){
            table.rows[i].onclick = function(){
            
                rowIndex = this.rowIndex;
                expense.innerHTML  = this.cells[3].innerHTML;

                var newCost = Number.parseFloat(document.getElementById('itemCost2').innerHTML) + parseFloat(accountBalance.innerHTML)

                console.log(newCost)
            
                let getLocalStorageData2 = localStorage.getItem("clientData");   
                listArray2 = JSON.parse(getLocalStorageData2); 
                objIndex = listArray2.findIndex((obj => obj.Account_Number ==  accountNumber.innerHTML));
                listArray2[objIndex].Amount = newCost
                localStorage.setItem('clientData', JSON.stringify(listArray2)) 

                let getLocalStorageData = localStorage.getItem("formData1");
                listArray = JSON.parse(getLocalStorageData);
                listArray.splice(index, 1); //delete or remove the li
                localStorage.setItem("formData1", JSON.stringify(listArray));
                window.location.reload()

            };
        }
    }
}

