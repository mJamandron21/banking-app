//Initial records on document load
export function userRecordsInitialLoad(){
  let userRecords=new Array();
  let accountnumber = Math.floor(100000000000 + Math.random() * 900000000000);
  let firstname = "Mark"
  let middlename = "Villuga"
  let lastname = "Jamandron"
  let username = "admin"
  let password = "admin123"
  let contact = "09173589460"
  let balance = 0
  let expenses = []
  let role = "admin"
  
    userRecords.push({
        "accountnumber" : accountnumber,
        "firstname" : firstname,
        "middlename" : middlename,
        "lastname" : lastname,
        "username" : username,
        "password" : password,
        "contact" : contact,
        "balance" : balance,
        "expenses" : expenses,
        "role": role,
        
      })
      localStorage.setItem("userRecords",JSON.stringify(userRecords));
}

 