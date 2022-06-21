import dashLoader from "../views/dashLoaderView.js";
import linkMenu from "../views/linkMenuView.js";
import * as model from '../models/model.js';
import sidebarView from "../views/sidebarView.js";
import userProfileSettingView from "../views/userProfileSettingView.js";
import loaderView from "../views/loaderView.js";
import depositFormView from "../views/depositFormView.js";
import depositView from "../views/depositView.js";






const controlLoadEntireView = async function(){
    try {
        const userID = window.location.hash.slice(1);
        if(!userID || userID == "") throw new Error("ID is null");
       
        loaderView.render();
        await model.loadUser(userID);
        await model.loadPlans();
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



const controlMakeDeposit = async function(){
  try {
    const query = depositFormView.getQuery();
    if(!query) return;

    const {max, min} = model.state.deposit;


    const depositPlanID = model.getPlanID(
      min,
      (max > 10000 ? null : max)
    );

    
    const transactionRequestBody = {
      amount: query,
      plan_id: depositPlanID,
      user_id: model.state.user.id,
      type: "DEPOSIT",
    }

    await model.makeTransaction(transactionRequestBody);

  }catch (error) {
    console.error(error.message);
    if(error.message === 'Slow internet try reloading. :)'){
      alert(error.message);
    }else if(error.message === 'Failed to fetch'){
      alert(error.message);
    }
  }

 
}

const controlCoinServiceChange = function(plan, minDeposit, maxDeposit){
  model.loadCurrentDepositPlan(plan, minDeposit, maxDeposit)
  depositFormView.render(model.state.deposit);
}

const init = function(){
  depositFormView.addMakeDepositHandler(controlMakeDeposit);
  depositView.addChangeRangeHandler(controlCoinServiceChange)
}

init();


Array.from(['load','hashchange']).forEach(evt => window.addEventListener(evt,controlLoadEntireView ))

