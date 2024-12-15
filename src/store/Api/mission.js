import {api} from "./api.js";

export const mission = api.injectEndpoints({
    endpoints:(build ) => ({
        getMission:build.query({
            query : ()=>{
                return {
                    url : '/purposes',
                    method : 'GET',
                }
            }
        }),
    })
})

export const { useGetMissionQuery } = mission;