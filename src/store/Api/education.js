import {api} from "./api.js";

export const education = api.injectEndpoints({
    endpoints:(build ) => ({
        getEducation:build.query({
            query : ()=>{
                return {
                    url : '/trainings',
                    method : 'GET',
                }
            }
        }),

        getEducationSingle:build.query({
            query : (id)=>{
                return {
                    url : `/trainings/${id}`,
                    method : 'GET',
                }
            }
        }),
    })
})

export const { useGetEducationQuery,useGetEducationSingleQuery } = education;