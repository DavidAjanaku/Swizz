import dashLoader from "../views/dashLoaderView.js";
import * as model from '../models/model.js';
import personalInfo from "../views/personalInfo.js";
import userProfileSettingView from "../views/userProfileSettingView.js";
import loaderView from "../views/loaderView.js";
import personalInfoTop from "../views/personalInfoTop.js";





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
        Array.from([
          personalInfo,
          personalInfoTop
        ]).forEach(view => view.update(model.state.user));

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


const handleLogout = function(){
  model.userLogout()
}




const init = function(){
  personalInfo.handleUpdateUserProfile(controlUpdateUserProfile);
  userProfileSettingView.addLogoutHandler(handleLogout);
}
init();
Array.from(['load','hashchange']).forEach(evt => window.addEventListener(evt,controlLoadEntireView ))

