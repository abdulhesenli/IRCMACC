import {api} from "./api.js";

export const education = api.injectEndpoints({
    endpoints:(build ) => ({
        // bu post ucun numunedir
        // SignUp:build.mutation({
        //     query : (user)=>{
        //         return {
        //             url : '/AuthServices/register',
        //             method : 'POST',
        //             body : JSON.stringify(user)
        //         }
        //     }
        // }),

        getEducation:build.query({
            query : ()=>{
                return {
                    url : '/posts',
                    method : 'GET',
                }
            }
        }),
    })
})

export const { useGetEducationQuery } = education;