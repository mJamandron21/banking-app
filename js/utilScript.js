//buttons
import {navToggleBtn} from './domVariables.js'
import {navCollapseDiv} from './domVariables.js'
import {navLoginBtn} from './domVariables.js'
import { submitLoginBtn } from './domVariables.js'
//pages
import {firstPage} from './domVariables.js'
import {secondPage} from './domVariables.js'
import {thirdPage} from './domVariables.js'

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


navLoginBtn.addEventListener('click', function () {
    firstPage.style.display = "none"
    secondPage.style.display = "block"
    thirdPage.style.display = "none"
})

submitLoginBtn.addEventListener('click', function () {
    firstPage.style.display = "none"
    secondPage.style.display = "none"
    thirdPage.style.display = "block"
})

