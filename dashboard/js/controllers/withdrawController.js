import dashLoader from "../views/dashLoaderView.js";
import * as model from '../models/model.js';
import userProfileSettingView from "../views/userProfileSettingView.js";
import loaderView from "../views/loaderView.js";
import withdrawFormView from "../views/withdrawFormView.js";






const controlLoadEntireView = async function(){
    try {
        const userID = sessionStorage.getItem("userID");
        if(!userID || userID == "") throw new Error("ID is null");
       
        // loaderView.render();
        await model.loadUser(userID);
        // loaderView.remove();

        Array.from([
            dashLoader,
        ]).forEach(view => view.render(model.state.user));

        Array.from([
          userProfileSettingView
        ]).forEach(view => view.update(model.state.user));
      

          
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
          plan_id: '5JnK0qB',
          user_id: model.state.user.id,
          type: "WITHDRAW",
        }

        console.log(transactionRequestBody);
        // ERROR HERE 
        Promise.all([
          await model.makeTransaction(transactionRequestBody),
          setTimeout(() => {
            window.location.href = '/main/dashboard/account-overview.html';
          },1800)
        ])
   } catch (error) {
       console.log(error);
   }
  
}


const init = function(){
  withdrawFormView.addMakeWithdrawHandler(controlHandleWithdraw)
}

init();


Array.from(['load','hashchange']).forEach(evt => window.addEventListener(evt,controlLoadEntireView ))

