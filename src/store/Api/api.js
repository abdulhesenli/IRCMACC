import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import i18n from "i18next";


const baseQuery = fetchBaseQuery({
    baseUrl : 'http://206.81.24.105/api',
    prepareHeaders: (headers) => {
        headers.set('Content-Type', 'application/json');
        headers.set('Accept-language', i18n.language);
        return headers
    }
})



export const api  = createApi({
    reducerPath : 'api',
    baseQuery : baseQuery,
    endpoints: () => ({}),
})
