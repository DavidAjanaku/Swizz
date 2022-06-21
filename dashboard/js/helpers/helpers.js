import { GET_AUTHENTICATION_CONFIG, PATCH_AUTHENTICATION_CONFIG, POST_AUTHENTICATION_CONFIG, TIME_OUT_SEC } from "./config.js";

const timeout = function (sec){
    return new Promise(function(_,reject){
        setTimeout(() => {
            reject(new Error("Slow internet try reloading. :)"))
        }, sec * 1000);
    })
}

export const getJson = async function(url){
   try {
       

        const req = await Promise.race([
            fetch(url, GET_AUTHENTICATION_CONFIG),
            timeout(TIME_OUT_SEC)
        ])

        const data = await req.json();
        if(data?.detail) throw new Error("User with id "+data.detail);
        
        return data;
       
   } catch (error) {
       console.error(error);
       throw error;
   }
}

export const postJson = async function(url,messageBody){
    try {
        
        POST_AUTHENTICATION_CONFIG.body = JSON.stringify(messageBody);

        
        const req = await Promise.race([
            fetch(url, POST_AUTHENTICATION_CONFIG),
            timeout(TIME_OUT_SEC)
        ])
        
        const data = await req.json();
        if(data?.detail) throw new Error("User with id "+data.detail);
        
        
        return data;
       
   } catch (error) {
       console.error(error);
       throw error;
   }
}


export const patchJson = async function(url,messageBody){
    try {
        
        PATCH_AUTHENTICATION_CONFIG.body = JSON.stringify(messageBody);

        
        const req = await Promise.race([
            fetch(url, PATCH_AUTHENTICATION_CONFIG),
            timeout(TIME_OUT_SEC)
        ])
        
        const data = await req.json();
        if(data?.detail) throw new Error("User with id "+data.detail);
        
        
        return data;
       
   } catch (error) {
       console.error(error);
       throw error;
   }
}

