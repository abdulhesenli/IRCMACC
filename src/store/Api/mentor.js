import {api} from "./api.js";

export const mentor = api.injectEndpoints({
    endpoints:(build ) => ({
        getMentor:build.query({
            query : ()=>{
                return {
                    url : '/trainers',
                    method : 'GET',
                }
            }
        }),

        getMentorSingle:build.query({
            query : (id)=>{
                return {
                    url : `/trainers/${id}`,
                    method : 'GET',
                }
            }
        }),
    })
})

export const { useGetMentorQuery,useGetMentorSingleQuery } = mentor;