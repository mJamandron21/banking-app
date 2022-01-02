//modal deposit
import {modalDeposit} from './domVariables.js'
import {btnOpenModalDeposit} from './domVariables.js'
import {btnCloseModalDeposit} from './domVariables.js'
import {overlayDeposit} from './domVariables.js'


const toggleModalDeposit = function () {
  modalDeposit.classList.toggle("hidden");
  overlayDeposit.classList.toggle("hidden");
};
btnOpenModalDeposit.addEventListener("click", toggleModalDeposit);
btnCloseModalDeposit.addEventListener("click", toggleModalDeposit);
overlayDeposit.addEventListener("click", toggleModalDeposit);
