'use strict';
const form = document.querySelector('.form__form');
form.addEventListener('submit', async function(e){
    e.preventDefault();

    try {
        const formData = {
            Email_Address: document.querySelector('#email').value,
            password: document.querySelector('#password').value
        }

        const inputs = Array.from(this.querySelectorAll('.inp'));
        inputs.forEach(inp => inp.value = null);

        const response = await fetch('https://pygod-swizz.herokuapp.com/login/', {
            method: 'POST',
            headers:  {
                'Authorization': `Basic ${btoa('pygod:pygod')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
    
        const result = await response.json();
        console.log(result);
        const userID = result.data?.user;

        if(!userID) throw new Error("Invalid cridentials");

        sessionStorage.setItem('userID',userID);
       redirectPage(`./dashboard/account-overview.html`);


        
    } catch (error) {
        console.error(error);
    }

})

const redirectPage = function(pathName){
   window.location.replace(`${pathName}`)
}

