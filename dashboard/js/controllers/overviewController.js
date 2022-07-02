import dashLoader from "../views/dashLoaderView.js";
import profileCard from "../views/profileCardView.js";
import * as model from '../models/model.js';
import transactionView from "../views/transactionView.js";
import userProfileSettingView from "../views/userProfileSettingView.js";
import loaderView from "../views/loaderView.js";
import userStatusView from "../views/userStatusView.js";
import availBalanceView from "../views/availBalanceView.js";






const controlLoadEntireView = async function(){
    try {
        const userID = sessionStorage.getItem("userID");
        if(!userID || userID == "") throw new Error("ID is null");


        loaderView.render();
        await model.loadUser(userID);
        loaderView.remove();

        availBalanceView.update(model.state.transactionTotal)
        
        Array.from([
            dashLoader,
            profileCard,
        ]).forEach(view => view.render(model.state.user));


        userStatusView.update(model.state.transactionTotal)

        const profileSettingData = {
          firstname: model.state.user.firstname,
          lastname: model.state.user.lastname,
          transactionTotal: model.state.transactionTotal
        }

        userProfileSettingView.update(profileSettingData);
        
        transactionView.render(model.state.transactions);
        
          
      } catch (error) {
        console.error(error);
        if(error.message === 'Slow internet try reloading. :)'){
          alert(error.message);
        }else if(error.message === 'Failed to fetch'){
          alert("You’re not connected! try reloading :( ");
          location.reload();
        }
      }
    
}

const handleLogout = function(){
    model.userLogout()
}


const init = () => {
  userProfileSettingView.addLogoutHandler(handleLogout)
}

init();

Array.from(['load','hashchange']).forEach(evt => window.addEventListener(evt,controlLoadEntireView ))

