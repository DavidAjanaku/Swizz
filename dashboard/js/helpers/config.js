export const TIME_OUT_SEC = 15;
export const API_URL_USERS = 'https://pygod-swizz.herokuapp.com/links/users/';
export const API_URL_PROFILES = 'https://pygod-swizz.herokuapp.com/links/profiles/';
export const API_URL_TRANSACTIONS = 'https://pygod-swizz.herokuapp.com/transactions';
export const API_URL_PLANS = 'https://pygod-swizz.herokuapp.com/links/plans/';
export const GET_AUTHENTICATION_CONFIG = {
    method: 'GET',
    headers:{
        'Authorization':`Basic ${btoa('pygod:pygod')}`
    }
}
export const POST_AUTHENTICATION_CONFIG = {
    method: 'POST',
    headers:  {
        'Authorization': `Basic ${btoa('pygod:pygod')}`,
        'Content-Type': 'application/json; charset=UTF-8',
    },
    body:''
}

export const PATCH_AUTHENTICATION_CONFIG = {
    method: 'PATCH',
    headers:  {
        'Authorization': `Basic ${btoa('pygod:pygod')}`,
        'Content-Type': 'application/json; charset=UTF-8',
    },
    body:''
}