//buttons
import {navToggleBtn} from './domVariables.js'
import {navCollapseDiv} from './domVariables.js'
//modal register
import {modalRegister} from './domVariables.js'
import {btnOpenModalRegister} from './domVariables.js'
import {btnCloseModalRegister} from './domVariables.js'
import {overlayRegister} from './domVariables.js'
//modal login
import {modalLogin} from './domVariables.js'
import {btnOpenModalLogin} from './domVariables.js'
import {btnCloseModalLogin} from './domVariables.js'
import {overlayLogin} from './domVariables.js'

//modal deposit
// import {modalDeposit} from './domVariables.js'
// import {btnOpenModalDeposit} from './domVariables.js'
// import {btnCloseModalDeposit} from './domVariables.js'
// import {overlayDeposit} from './domVariables.js'
//modal withdraw
// import {modalWithdraw} from './domVariables.js'
// import {btnOpenModalWithdraw} from './domVariables.js'
// import {btnCloseModalWithdraw} from './domVariables.js'
// import {overlayWithdraw} from './domVariables.js'
//modal sendmoney
// import {modalSendmoney} from './domVariables.js'
// import {btnOpenModalSendmoney} from './domVariables.js'
// import {btnCloseModalSendmoney} from './domVariables.js'
// import {overlaySendmoney} from './domVariables.js'


navToggleBtn.addEventListener('click', () => {
    navCollapseDiv.classList.toggle('showNavbar');
    navToggleBtn.classList.toggle('showNavbar-toggler');
});

let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

const toggleModalRegister = function () {
    modalRegister.classList.toggle("hidden");
    overlayRegister.classList.toggle("hidden");
  };
btnOpenModalRegister.addEventListener("click", toggleModalRegister);
btnCloseModalRegister.addEventListener("click", toggleModalRegister);
overlayRegister.addEventListener("click", toggleModalRegister);

const toggleModalLogin = function () {
    modalLogin.classList.toggle("hidden");
    overlayLogin.classList.toggle("hidden");
  };
btnOpenModalLogin.addEventListener("click", toggleModalLogin);
btnCloseModalLogin.addEventListener("click", toggleModalLogin);
overlayLogin.addEventListener("click", toggleModalLogin);

// const toggleModalDeposit = function () {
//   modalDeposit.classList.toggle("hidden");
//   overlayDeposit.classList.toggle("hidden");
// };
// btnOpenModalDeposit.addEventListener("click", toggleModalDeposit);
// btnCloseModalDeposit.addEventListener("click", toggleModalDeposit);
// overlayDeposit.addEventListener("click", toggleModalDeposit);

// const toggleModalWithdraw = function () {
//   modalWithdraw.classList.toggle("hidden");
//   overlayWithdraw.classList.toggle("hidden");
// };
// btnOpenModalWithdraw.addEventListener("click", toggleModalWithdraw);
// btnCloseModalWithdraw.addEventListener("click", toggleModalWithdraw);
// overlayWithdraw.addEventListener("click", toggleModalWithdraw);

// const toggleModalSendmoney = function () {
//   modalSendmoney.classList.toggle("hidden");
//   overlaySendmoney.classList.toggle("hidden");
// };
// btnOpenModalSendmoney.addEventListener("click", toggleModalSendmoney);
// btnCloseModalSendmoney.addEventListener("click", toggleModalSendmoney);
// overlaySendmoney.addEventListener("click", toggleModalSendmoney);

