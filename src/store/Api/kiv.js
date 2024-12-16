import {api} from "./api.js";

export const kiv = api.injectEndpoints({
    endpoints:(build ) => ({
        getKiv:build.query({
            query : ()=>{
                return {
                    url : '/kiv',
                    method : 'GET',
                }
            }
        }),

        // getEducationSingle:build.query({
        //     query : (id)=>{
        //         return {
        //             url : `/trainings/${id}`,
        //             method : 'GET',
        //         }
        //     }
        // }),
    })
})

export const { useGetKivQuery } = kiv;