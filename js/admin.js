import { logout } from "./logoutScript.js";

logout();
display();

function display(){
    if(localStorage.getItem('userRecords')){
        var render = document.querySelector('tbody');
        render.innerHTML = "";
        JSON.parse(localStorage.getItem('userRecords')).forEach((userrecord) => {
            render.innerHTML += `
                    <tr>
                        <td>${userrecord.accountnumber}</td>
                        <td>${userrecord.lastname.toUpperCase()}</td>
                        <td>${userrecord.firstname.toUpperCase()}</td>
                        <td>${userrecord.balance}</td>
                        <td>${userrecord.role.toUpperCase()}</td>
                        <td>${userrecord.status.toUpperCase()}</td>
                    </tr>
            `;
        });
    }
}