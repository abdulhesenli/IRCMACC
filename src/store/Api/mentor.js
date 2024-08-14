import {api} from "./api.js";

export const mentor = api.injectEndpoints({
    endpoints:(build ) => ({
        getMentor:build.query({
            query : ()=>{
                return {
                    url : '/photos',
                    method : 'GET',
                }
            }
        }),
    })
})

export const { useGetMentorQuery } = mentor;