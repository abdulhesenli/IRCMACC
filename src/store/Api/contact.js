import {api} from "./api.js";

export const contact = api.injectEndpoints({
    endpoints:(build ) => ({
    
        contactPostMessage:build.mutation({
            query : (message)=>{
                return {
                    url : '/contact_post',
                    method : 'POST',
                    body : JSON.stringify(message)
                }
            }
        })
    })

})

export const {useContactPostMessageMutation } = contact;
