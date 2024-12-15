import {api} from "./api.js";

export const testimonilas = api.injectEndpoints({
    endpoints:(build ) => ({
        getTestimonilas:build.query({
            query : ()=>{
                return {
                    url : '/testimonials',
                    method : 'GET',
                }
            }
        }),

     
    })
})

export const { useGetTestimonilasQuery } = testimonilas;