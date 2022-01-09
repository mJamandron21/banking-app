import { submitRegisterForm } from "./registrationScript.js";
import { submitLoginForm } from "./loginScript.js";
//dom userRecordsInitial load
import {userRecordsInitialLoad} from './userRecords.js'

//domcontentload!
document.addEventListener('DOMContentLoaded', (event) => {

    if (localStorage.getItem("userRecords") === null) {
      console.log("localstorage not found")
      userRecordsInitialLoad();
    }
    else{
      console.log("localstorage loaded!")
    }
  });

submitRegisterForm();
submitLoginForm();