import dashLoader from "../views/dashLoaderView.js";
import linkMenu from "../views/linkMenuView.js";
import * as model from '../models/model.js';
import sidebarView from "../views/sidebarView.js";
import userProfileSettingView from "../views/userProfileSettingView.js";
import loaderView from "../views/loaderView.js";
import withdrawFormView from "../views/withdrawFormView.js";






const controlLoadEntireView = async function(){
    try {
        const userID = window.location.hash.slice(1);
        if(!userID || userID == "") throw new Error("ID is null");
       
        loaderView.render();
        await model.loadUser(userID);
        loaderView.remove();

        Array.from([
            dashLoader,
            linkMenu,
        ]).forEach(view => view.render(model.state.user));

        Array.from([
          sidebarView,
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
        await model.makeTransaction(transactionRequestBody);
   } catch (error) {
       console.log(error);
   }
  
}


const init = function(){
  withdrawFormView.addMakeWithdrawHandler(controlHandleWithdraw)
}

init();


Array.from(['load','hashchange']).forEach(evt => window.addEventListener(evt,controlLoadEntireView ))

