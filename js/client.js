import { logout } from "./logoutScript.js";
import {deposit, displayClientDetails, ifCurrentUserNotExist, withdrawal} from "./clientDetails.js"

//functions call outside
logout();
ifCurrentUserNotExist();
deposit();
withdrawal();
displayClientDetails();