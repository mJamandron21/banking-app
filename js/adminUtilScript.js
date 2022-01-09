//modal register
import {modalRegister} from './domVariables.js'
import {btnOpenModalRegister} from './domVariables.js'
import {btnCloseModalRegister} from './domVariables.js'
import {overlayRegister} from './domVariables.js'

import { submitRegisterForm } from "./registrationScript.js";

submitRegisterForm();


const toggleModalRegister = function () {
    modalRegister.classList.toggle("hidden");
    overlayRegister.classList.toggle("hidden");
  };
btnOpenModalRegister.addEventListener("click", toggleModalRegister);
btnCloseModalRegister.addEventListener("click", toggleModalRegister);
overlayRegister.addEventListener("click", toggleModalRegister);