import { logout } from "./logoutScript.js";
import {displayClientDetails, ifCurrentUserNotExist} from "./clientDetails.js"

//functions call outside
logout();
ifCurrentUserNotExist();
displayClientDetails();