import {api} from "./api.js";

export const search = api.injectEndpoints({
    endpoints:(build ) => ({
        getSearch:build.query({
            query : ()=>{
                return {
                    url : '/search?q',
                    method : 'GET',
                }
            }
        }),
    })
})

export const { useGetSearchQuery } = search;