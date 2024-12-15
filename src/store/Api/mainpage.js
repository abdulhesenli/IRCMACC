import {api} from "./api.js";

export const MainPage = api.injectEndpoints({
    endpoints:(build ) => ({
        getMainPage:build.query({
            query : ()=>{
                return {
                    url : '/main_page',
                    method : 'GET',
                }
            }
        }),

       
    })
})

export const { useGetMainPageQuery } = MainPage;