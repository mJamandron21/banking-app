import { logout } from "./logoutScript.js";
import {deposit, displayClientDetails, ifCurrentUserNotExist, sendMoney, sendMoneyConfirmation, withdrawal} from "./clientDetails.js"


//functions call outside
logout();
ifCurrentUserNotExist();
deposit();
withdrawal();
sendMoney();
sendMoneyConfirmation();
displayClientDetails();
