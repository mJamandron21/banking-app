const currentUsernameHeader = document.querySelector(".currentUsernameHeader")
// const clientBalance = document.querySelector(".balance");

const addExpenseItem = document.querySelector("#add-expense-item");
const addExpenseCost = document.querySelector("#add-expense-cost");
const submitAddExpense = document.querySelector("#submit-add-expense");

const itemCostBanner = document.querySelector(".item-cost-banner");

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

        var table = document.querySelector('.styled-table-expense'),rowIndex;

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
                let itemCost = itemCostBanner.innerHTML
                

                var newBalance = Number.parseFloat(itemCost) + Number.parseFloat(balance)

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
    var table = document.querySelector('.styled-table-expense'),rowIndex;
    
        for(var i = 0; i < table.rows.length;i++){
        table.rows[i].onclick = function(){
        rowIndex = this.rowIndex;
        
        editItemCost.innerHTML = this.cells[1].innerHTML;
        editExpenseItem.value = this.cells[0].innerHTML;
        editExpenseCost.value = this.cells[1].innerHTML;
        };
    };
    toggleModalEditExpense();
    btnCloseModalEditExpense.addEventListener("click", toggleModalEditExpense);
}




function toggleModalEditExpense() {
    modalEditExpense.classList.toggle("hidden");
    overlayEditExpense.classList.toggle("hidden");
}
    
  