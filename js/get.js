// function verifyPassword() {  
//     var pw = document.getElementById("Confirm_password").value;  
//     //check empty password field  
//     if(pw == "") {  
//        document.getElementById("message").innerHTML = "**Fill the password please!";  
//        return false;  
//     }  
     
//    //minimum password length validation  
//     if(pw.length < 8) {  
//        document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
//        return false;  
//     }  
    
//   //maximum length of password validation  
//     if(pw.length > 15) {  
//        document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
//        return false;  
//     } else {  
//        alert("Password is correct");  
//     }  
//   }  






const thisForm = document.getElementById('application');
thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const phoneCode= thisForm.querySelector('#phoneCc').value;
    const phoneNumber= thisForm.querySelector('#phoneNumber').value;
    const phone_number = `+${phoneCode}${phoneNumber}`;

    const formData = {
        first_name: thisForm.querySelector('#firstname').value,
        username: thisForm.querySelector('#username').value,
        last_name: thisForm.querySelector('#lastname').value,
        password: thisForm.querySelector('#password').value,
        email: thisForm.querySelector('#email').value,
        referrals:[],
        profile:{
            phone_number,
        }
    }

    console.log(formData);

    try {
        
        const response = await fetch('https://pygod-swizz.herokuapp.com/links/users/create/', {
            method: 'POST',
            headers:  {
                'Authorization': `Basic ${btoa('pygod:pygod')}`,
                'Content-Type': 'application/json',
        },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        if(!result.id) throw new Error(result.message);
        
        thisForm.reset();
        window.location.href = './login.html';
    } catch (error) {
        alert(error.message);
    }
});


