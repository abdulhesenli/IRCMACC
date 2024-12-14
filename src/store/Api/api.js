import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl : 'http://206.81.24.105/api',
    prepareHeaders: (headers) => {
        headers.set('Content-Type', 'application/json');
        return headers
    }
})



export const api  = createApi({
    reducerPath : 'api',
    baseQuery : baseQuery,
    endpoints: () => ({}),
})
