//modal deposit
import {modalDeposit} from './domVariables.js'
import {btnOpenModalDeposit} from './domVariables.js'
import {btnCloseModalDeposit} from './domVariables.js'
import {overlayDeposit} from './domVariables.js'
//modal withdraw
import {modalWithdraw} from './domVariables.js'
import {btnOpenModalWithdraw} from './domVariables.js'
import {btnCloseModalWithdraw} from './domVariables.js'
import {overlayWithdraw} from './domVariables.js'
//modal sendmoney
import {modalSendmoney} from './domVariables.js'
import {btnOpenModalSendmoney} from './domVariables.js'
import {btnCloseModalSendmoney} from './domVariables.js'
import {overlaySendmoney} from './domVariables.js'

//modal send money confirm
import { modalSendmoneyConfirm } from './domVariables.js'
import { btnCloseModalSendmoneyConfirm } from './domVariables.js'
// import { btnOpenModalSendmoneyConfrim } from './domVariables.js'
import { overlaySendmoneyConfirm } from './domVariables.js'


const toggleModalDeposit = function () {
  modalDeposit.classList.toggle("hidden");
  overlayDeposit.classList.toggle("hidden");
};
  btnOpenModalDeposit.addEventListener("click", toggleModalDeposit);
  btnCloseModalDeposit.addEventListener("click", toggleModalDeposit);
  overlayDeposit.addEventListener("click", toggleModalDeposit);

const toggleModalWithdraw = function () {
  modalWithdraw.classList.toggle("hidden");
  overlayWithdraw.classList.toggle("hidden");
  };
  btnOpenModalWithdraw.addEventListener("click", toggleModalWithdraw);
  btnCloseModalWithdraw.addEventListener("click", toggleModalWithdraw);
  overlayWithdraw.addEventListener("click", toggleModalWithdraw);

const toggleModalSendmoney = function () {
  modalSendmoney.classList.toggle("hidden");
  overlaySendmoney.classList.toggle("hidden");
  };
  btnOpenModalSendmoney.addEventListener("click", toggleModalSendmoney);
  btnCloseModalSendmoney.addEventListener("click", toggleModalSendmoney);
  overlaySendmoney.addEventListener("click", toggleModalSendmoney);

export const toggleModalSendmoneyConfirm = function (event) {
  modalSendmoneyConfirm.classList.toggle("hidden");
  overlaySendmoneyConfirm.classList.toggle("hidden");
  };
  // btnOpenModalSendmoneyConfrim.addEventListener("click", toggleModalSendmoneyConfirm);
  btnCloseModalSendmoneyConfirm.addEventListener("click", toggleModalSendmoneyConfirm);
  overlaySendmoneyConfirm.addEventListener("click", toggleModalSendmoneyConfirm);