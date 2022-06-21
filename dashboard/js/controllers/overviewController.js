import dashLoader from "../views/dashLoaderView.js";
import linkMenu from "../views/linkMenuView.js";
import profileCard from "../views/profileCardView.js";
import * as model from '../models/model.js';
import transactionView from "../views/transactionView.js";
import sidebarView from "../views/sidebarView.js";
import userProfileSettingView from "../views/userProfileSettingView.js";
import loaderView from "../views/loaderView.js";






const controlLoadEntireView = async function(){
    try {
        const userID = window.location.hash.slice(1);
        if(!userID || userID == "") throw new Error("ID is null");

        sessionStorage.setItem('userID',userID);

        loaderView.render();
        await model.loadUser(userID);
        loaderView.remove();

        Array.from([
            dashLoader,
            linkMenu,
            profileCard,
        ]).forEach(view => view.render(model.state.user));

        Array.from([
          sidebarView,
          userProfileSettingView
        ]).forEach(view => view.update(model.state.user));
      
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

Array.from(['load','hashchange']).forEach(evt => window.addEventListener(evt,controlLoadEntireView ))

