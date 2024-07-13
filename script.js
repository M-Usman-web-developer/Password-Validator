
let btn = document.getElementById('pass')
let password = document.getElementById('password')
btn.addEventListener('click', ()=> {

    // Initialize flags for each criteria
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasDigit = false;

    // Check each character to set the appropriate flags
    for (let index = 0; index < password.value.length; index++) {
        let ch = password.value.charCodeAt(index);

        if (ch >= 65 && ch <= 90) {
            hasUpperCase = true;
        } else if (ch >= 97 && ch <= 122) {
            hasLowerCase = true;
        } else if (ch >= 48 && ch <= 57) {
            hasDigit = true;
        }
    }

    // Check if all criteria are met
    if (password.value.length >= 8 && hasUpperCase && hasLowerCase && hasDigit) {
        document.querySelector('.msg').innerText = 'You meet the criteria';
    } else {
         document.querySelector('.msg').innerText = 'You donot meet the criteria';
    }

})


