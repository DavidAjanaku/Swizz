import dashLoader from "../views/dashLoaderView.js";
import linkMenu from "../views/linkMenuView.js";
import * as model from '../models/model.js';
import sidebarView from "../views/sidebarView.js";
import personalInfo from "../views/personalInfo.js";
import userProfileSettingView from "../views/userProfileSettingView.js";
import loaderView from "../views/loaderView.js";
import personalInfoTop from "../views/personalInfoTop.js";





const controlLoadEntireView = async function(){
    try {
        const userID = window.location.hash.slice(1);
        if(!userID || userID == "") throw new Error("ID is null");
        loaderView.render();
        await model.loadUser(userID);
        loaderView.remove();
        Array.from([
          dashLoader,
        ]).forEach(view => view.render(model.state.user));
        Array.from([
          sidebarView,
          personalInfo,
          userProfileSettingView,
          personalInfoTop
        ]).forEach(view => view.update(model.state.user));

        


       
          
      } catch (error) {
        console.error(error);
        if(error.message === 'Slow internet try reloading. :)'){
          alert(error.message);
        }
      }
    
}

const controlUpdateUserProfile = async (data) =>{

  try {
    const [first_name, last_name] = data.fullname.split(' ');
  
    const userData = {
      first_name,
      last_name,
      email:data.email,
      profile: {
        dob: data.dob,
        permanent_address: data.permanentaddress,
        postal_code: data.postal,
        present_address: data.presentaddress,
        city: data.city,
        wallest_add: data.wallet_ad,
        
      }
  
    }

    await model.updateUserProfile(userData);
    
  } catch (error) {
      console.log(error);
  }

  


}


const init = function(){
  personalInfo.handleUpdateUserProfile(controlUpdateUserProfile);
}
init();
Array.from(['load','hashchange']).forEach(evt => window.addEventListener(evt,controlLoadEntireView ))

