//buttons
import {navToggleBtn} from './domVariables.js'
import {navCollapseDiv} from './domVariables.js'

//modal login
import {modalLogin} from './domVariables.js'
import {btnOpenModalLogin} from './domVariables.js'
import {btnCloseModalLogin} from './domVariables.js'
import {overlayLogin} from './domVariables.js'


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


const toggleModalLogin = function () {
    modalLogin.classList.toggle("hidden");
    overlayLogin.classList.toggle("hidden");
  };
btnOpenModalLogin.addEventListener("click", toggleModalLogin);
btnCloseModalLogin.addEventListener("click", toggleModalLogin);
overlayLogin.addEventListener("click", toggleModalLogin);


