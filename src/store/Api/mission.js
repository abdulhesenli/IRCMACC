import {api} from "./api.js";

export const mission = api.injectEndpoints({
    endpoints:(build ) => ({
        getMission:build.query({
            query : ()=>{
                return {
                    url : '/prupose-values',
                    method : 'GET',
                }
            }
        }),
    })
})

export const { useGetMissionQuery } = mission;