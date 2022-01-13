const currentUsernameHeader = document.querySelector(".currentUsernameHeader")
// const clientBalance = document.querySelector(".balance");

const addExpenseItem = document.querySelector("#add-expense-item");
const addExpenseCost = document.querySelector("#add-expense-cost");
const submitAddExpense = document.querySelector("#submit-add-expense");

const itemCostBanner = document.querySelector(".item-cost-banner");
const expenseTable = document.querySelector('.styled-table-expense');

//edit expense modal
const modalEditExpense = document.querySelector(".modal-editExpense");
const overlayEditExpense = document.querySelector(".overlay-editExpense");
const btnCloseModalEditExpense = document.querySelector(".close-modal-editExpense");
const editItemIndex = document.querySelector("#edit-item-index");
const editItemCost = document.querySelector("#edit-item-cost");
const editExpenseItem = document.querySelector("#edit-expense-item");
const editExpenseCost = document.querySelector("#edit-expense-cost");
const submitEditExpense = document.querySelector("#submit-edit-expense");

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
            <td><button class="icon" onclick="editExpense()"><i class="fas fa-pen"></i></button><button class = "icon" onclick="deleteExpense(${index})"><i class="fas fa-trash"></i></button></td>
         `;
    });
}


function deleteExpense(index){

    console.log("delete expense click")

    if(confirm("Are you sure you want to delete?")){

        var table = expenseTable
        var rowIndex;
        //https://www.w3schools.com/jsref/coll_table_rows.asp (Source)

        for(var i = 0; i < table.rows.length;i++){
            table.rows[i].onclick = function(){

                rowIndex = this.index;
                itemCostBanner.innerHTML = this.cells[1].innerHTML;

                //setting up the current user form localstorage into the dom elements
                let getUserRecords = localStorage.getItem("userRecords")
                let userRecordsArray = new Array();
                userRecordsArray = JSON.parse(getUserRecords);
                
                let objIndex = userRecordsArray.findIndex((obj => obj.username == currentUsernameHeader.innerHTML));
                console.log(userRecordsArray[objIndex].balance)
            
                let balance = userRecordsArray[objIndex].balance
                let itemCostBanner = itemCostBanner.innerHTML//hidden field
                

                var newBalance = Number.parseFloat(itemCostBanner) + Number.parseFloat(balance)

                console.log(newBalance)
            
            
                let objIndex2 = userRecordsArray.findIndex((obj => obj.username ==  currentUsernameHeader.innerHTML));
                userRecordsArray[objIndex2].balance = newBalance
                
                userRecordsArray[objIndex2].expenses.splice(index, 1); //delete item in table
                localStorage.setItem('userRecords', JSON.stringify(userRecordsArray)) 
               
                window.location.reload()

            };
        }
    }
}

function editExpense(){
    var table = expenseTable
    var rowIndex;
    //https://www.w3schools.com/jsref/coll_table_rows.asp (Source)
    
        for(var i = 0; i < table.rows.length;i++){
        table.rows[i].onclick = function(){
        rowIndex = this.rowIndex;
        
        editItemCost.innerHTML = this.cells[1].innerHTML;//hidden field
        editExpenseItem.value = this.cells[0].innerHTML;
        editExpenseCost.value = this.cells[1].innerHTML;
        }
    }

    submitEditExpense.addEventListener("click", function(event){
        console.log("edit expense click")

        //setting up the current user form localstorage into the dom elements
        let getUserRecords = localStorage.getItem("userRecords")
        let userRecordsArray = new Array();
        userRecordsArray = JSON.parse(getUserRecords);
        
        let objIndex = userRecordsArray.findIndex((obj => obj.username == currentUsernameHeader.innerHTML));
        // console.log(userRecordsArray[objIndex].balance)

        if(editExpenseItem.value.length == 0 || editExpenseCost.value.length == 0){
            alert("Please fill up all Fields")
            editExpenseItem.focus();
            event.preventDefault();
        }else if(editExpenseCost.value <= 0){
            alert("Expense Cost cannot be negative or equal to zero!")
            editExpenseCost.focus();
            event.preventDefault();
        }else if(Number.parseFloat(editExpenseCost.value) > Number.parseFloat(editItemCost.innerHTML)){ //sample 200-100 = 100
            //condition to remove the addtional expense cost into the current balance of user

            let additionalExpenseCost = Number.parseFloat(editExpenseCost.value) - Number.parseFloat(editItemCost.innerHTML)//sample 200-100 = 100
            userRecordsArray[objIndex].balance = userRecordsArray[objIndex].balance - additionalExpenseCost;
            // console.log(userRecordsArray[objIndex].balance);

            let objIndex2 = userRecordsArray[objIndex].expenses.findIndex((obj => obj.item == editExpenseItem.value));
            // console.log(objIndex2)

            //putting the new values into localstorage
            userRecordsArray[objIndex].expenses[objIndex2].item = editExpenseItem.value;
            userRecordsArray[objIndex].expenses[objIndex2].cost = editExpenseCost.value;

            localStorage.setItem('userRecords', JSON.stringify(userRecordsArray)) 
            window.location.reload()
            
            
        }else if(Number.parseFloat(editExpenseCost.value) < Number.parseFloat(editItemCost.innerHTML)){ //sample 100-200 = -100
            //condition to add the subtracted expense cost into the current balance of user

            let subtractedExpenseCost = Number.parseFloat(editItemCost.innerHTML) - Number.parseFloat(editExpenseCost.value) //sample 200-100 = 100
            userRecordsArray[objIndex].balance = userRecordsArray[objIndex].balance + subtractedExpenseCost;
            // console.log(userRecordsArray[objIndex].balance);
            // console.log(subtractedExpenseCost)

            let objIndex2 = userRecordsArray[objIndex].expenses.findIndex((obj => obj.item == editExpenseItem.value));

            //putting the new values into localstorage
            userRecordsArray[objIndex].expenses[objIndex2].item = editExpenseItem.value;
            userRecordsArray[objIndex].expenses[objIndex2].cost = editExpenseCost.value;

            localStorage.setItem('userRecords', JSON.stringify(userRecordsArray)) 
            window.location.reload()
        }
        
    })
    toggleModalEditExpense();
    btnCloseModalEditExpense.addEventListener("click", toggleModalEditExpense);
}


function toggleModalEditExpense() {
    modalEditExpense.classList.toggle("hidden");
    overlayEditExpense.classList.toggle("hidden");
}
    
  