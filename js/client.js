import { logout } from "./logoutScript.js";
import {deposit, displayClientDetails, ifCurrentUserNotExist, sendMoney, withdrawal} from "./clientDetails.js"

//functions call outside
logout();
ifCurrentUserNotExist();
deposit();
withdrawal();
sendMoney();
displayClientDetails();