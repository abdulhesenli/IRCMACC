import {api} from "./api.js";

export const news = api.injectEndpoints({
    endpoints:(build ) => ({
        getNews:build.query({
            query : ()=>{
                return {
                    url : '/blogs',
                    method : 'GET',
                }
            }
        }),

        getNewsSingle:build.query({
            query : (id)=>{
                return {
                    url : `/blog/${id}`,
                    method : 'GET',
                }
            }
        }),
     
    })
})

export const { useGetNewsQuery, useGetNewsSingleQuery } = news;