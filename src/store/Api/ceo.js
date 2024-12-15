import {api} from "./api.js";

export const Ceo = api.injectEndpoints({
    endpoints:(build ) => ({
        getCeo:build.query({
            query : ()=>{
                return {
                    url : '/ceo-text',
                    method : 'GET',
                }
            }
        }),

       
    })
})

export const { useGetCeoQuery } = Ceo;