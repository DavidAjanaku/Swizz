import { API_URL_PLANS, API_URL_PROFILES, API_URL_TRANSACTIONS, API_URL_USERS, POST_AUTHENTICATION_CONFIG } from "../helpers/config.js"
import { getJson, patchJson, postJson} from "../helpers/helpers.js"

export const state = {
    user: {},
    plans:[],
    transactions:[],
    deposit:{
        plan: 'BTC',
        min: 50,
        max: 999,
    }

}

export const loadUser = async function(id){
    try {
        const req = await getJson(`${API_URL_USERS}${id}`)
        state.user = {
            id: req?.id,
            firstname: req?.first_name,
            lastname: req?.last_name,
            username: req?.username,
            email: req?.email,
            referrals: req?.referrals,
            profile: req.profile
        }

        // LOAD TRANSACTIONS FOR USER
        await loadTransactions(id);




    } catch (error) {
       console.error(error);
        throw error;
    }
}

export const loadCurrentDepositPlan = function(plan,min, max = Number.MAX_SAFE_INTEGER){
    state.deposit.plan = plan,
    state.deposit.min = min,
    state.deposit.max = max;
}

export const makeTransaction = async function(data){
    try {
        const req = await postJson(`${API_URL_TRANSACTIONS}/create`, data);
        
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const updateUserProfile = async function(data){
    try {
        const userId = sessionStorage.getItem('userID');
        let [profileData, ...mainData] = Object.entries(data).reverse();
        
        profileData = Object.fromEntries([profileData]);
        mainData = Object.fromEntries(mainData);
        const {profile} = profileData;
        
        truncateObject(profile);
        truncateObject(mainData);
        
        const {profile: {id:profileID}} = await patchJson(`${API_URL_USERS}${userId}/`, mainData);

        if(Object.keys(profile).length === 0 && profile.constructor === Object){
            //OBJECT IS EMPTY I.E. === {}
            return;
        }

       await patchJson(`${API_URL_PROFILES}${profileID}/`, profile);

       
       

    } catch (error) {
        console.error(error);
        throw error;
    }

    function truncateObject(object){
        for(const key in object){
            if (object[key] === '' || object[key] === null) {
                delete object[key];
            }
        }
    }
}


export const loadPlans =  async function(){
    try{
        const {results:plans} = await getJson(`${API_URL_PLANS}`);
        state.plans = plans;
    }catch(error){
        throw error;
    }
}

export const getPlanID =  function(min, max){
    return state.plans.find(plan => plan.min_price === min && max === plan.max_price).id;
}






const loadTransactions = async function(id){
    try {
        const  req = await getJson(`${API_URL_TRANSACTIONS}`);
        state.transactions = req.filter(tran => tran.user === id);
    } catch (error) {
        console.error(error);
        throw error;
    }
}