import dashLoader from "../views/dashLoaderView.js";
import * as model from '../models/model.js';
import userProfileSettingView from "../views/userProfileSettingView.js";
import loaderView from "../views/loaderView.js";
import withdrawFormView from "../views/withdrawFormView.js";






const controlLoadEntireView = async function(){
    try {
        const userID = sessionStorage.getItem("userID");
        if(!userID || userID == "") throw new Error("ID is null");
       
        loaderView.render();
        await model.loadUser(userID);
        loaderView.remove();

        Array.from([
            dashLoader,
        ]).forEach(view => view.render(model.state.user));

        const profileSettingData = {
          firstname: model.state.user.firstname,
          lastname: model.state.user.lastname,
          transactionTotal: model.state.transactionTotal
        }

        userProfileSettingView.update(profileSettingData);

          
      } catch (error) {
        console.error(error);
        if(error.message === 'Slow internet try reloading. :)'){
          alert(error.message);
        }else if(error.message === 'Failed to fetch'){
          alert(error.message);
        }
      }
    
}

const controlHandleWithdraw =  async function(){

   try {
        const query = withdrawFormView.getQuery();
        if(!query) return;
        
        const transactionRequestBody = {
          amount: query,
          plan_id: 'lpnO3ny',
          user_id: model.state.user.id,
          type: "WITHDRAW",
        }

        console.log(transactionRequestBody);
        // ERROR HERE 
        Promise.all([
          await model.makeTransaction(transactionRequestBody),
          setTimeout(() => {
            new Promise.resolve(window.location.href = '../dashboard/account-overview.html')
           },1800)
        ])
   } catch (error) {
       console.log(error);
   }
  
}

const handleLogout = function(){
  model.userLogout()
}




const init = function(){
  withdrawFormView.addMakeWithdrawHandler(controlHandleWithdraw)
  userProfileSettingView.addLogoutHandler(handleLogout);
}

init();


Array.from(['load','hashchange']).forEach(evt => window.addEventListener(evt,controlLoadEntireView ))

