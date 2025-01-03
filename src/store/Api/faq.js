import {api} from "./api.js";

export const faq = api.injectEndpoints({
    endpoints:(build ) => ({
        getFaq:build.query({
            query : ()=>{
                return {
                    url : '/faqs',
                    method : 'GET',
                }
            }
        }),

       
    })
})

export const { useGetFaqQuery } = faq;