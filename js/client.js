import { logout } from "./logoutScript.js";
import {deposit, displayClientDetails, ifCurrentUserNotExist} from "./clientDetails.js"

//functions call outside
logout();
ifCurrentUserNotExist();
deposit();
displayClientDetails();