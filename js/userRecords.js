//Initial records on document load
export function userRecordsInitialLoad(){
  let user_records=new Array();
  let accountnumber = Math.floor(1000000000000000 + Math.random() * 9000000000000000);
  let firstname = "Mark"
  let lastname = "Jamandron"
  let username = "admin"
  let password = "admin123"
  let email = "mjamandron@gmail.com"
  let balance = 0
  let expenses = []
  let role = "admin"
  
    user_records.push({
        "accountnumber" : accountnumber,
        "firstname" : firstname,
        "lastname" : lastname,
        "username" : username,
        "password" : password,
        "email" : email,
        "balance" : balance,
        "expenses" : expenses,
        "role": role,
        
      })
      localStorage.setItem("userRecords",JSON.stringify(user_records));
}

 