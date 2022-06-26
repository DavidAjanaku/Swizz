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

    
    const response = await fetch('https://pygod-swizz.herokuapp.com/links/users/create/', {
        method: 'POST',
        headers:  {
            'Authorization': `Basic ${btoa('pygod:pygod')}`,
            'Content-Type': 'application/json',
    },
        body: JSON.stringify(formData)
    });

    const result = await response.json();
    console.log(result);

    Array
    .from(this.querySelectorAll('input'))
    .forEach(inp => inp.value = null);
});






// const postNewUser =  async function(){
//     try{
//         const postOptions = {
//             method: 'POST',
//             headers: {
//                     'Authorization': `Basic ${btoa('pygod:pygod')}`,
//                     'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 first_name: "david",
//                 username: "wilson",
//                 last_name: "jacob",
//                 password: "0000",
//                 email: "pygod@mail.com",
//                 profile: {
//                     phone_number : "+23468596859685",
//                     ref_code: 'admin234'
//                 }
//             })
//         }
        

//         const resp = await fetch('https://pygod-api.herokuapp.com/links/users/create', postOptions)
//         const data = resp.json();
//         console.log(data);
//     }
//     catch(error){
//         alert(error)
//     }
// }

// postNewUser();




// const fetchUsers = async function(){
//     try{
//         const fetchOptions = {
//             method: 'GET',
//             headers:{
//                 'Authorization':`Basic ${btoa('pygod:pygod')}`
//             }
//         }
//         const resp = await fetch('https://pygod-api.herokuapp.com/users/', fetchOptions);

//         const {results} = await resp.json();
//         console.log(results);

//     }
//     catch(err){



//         alert(err)
//     }
// };

// (async function(){
//     try{
//         const fetchOptions = {
//             method: 'GET',
//             headers:{
//                 'Authorization':`Basic ${btoa('pygod:pygod')}`
//             }
//         }
//         const resp = await fetch('https://pygod-api.herokuapp.com/links/users/', fetchOptions);

//         const {results} = await resp.json();

//         console.log(results);

//     }
//     catch(err){
//         console.error(err);
//     }
// })();
