import { api } from "./api.js";

export const contact = api.injectEndpoints({
    endpoints: (build) => ({
        // Contact Post Message Mutation
        contactPostMessage: build.mutation({
            query: (message) => ({
                url: '/contact_post',
                method: 'POST',
                body: JSON.stringify(message),
            }),
        }),

        // Register Post Message Mutation
        registerPostMessage: build.mutation({
            query: (message) => ({
                url: '/homepage_post',
                method: 'POST',
                body: JSON.stringify(message),
            }),
        }),

        // Register Contact Single Query
        getRegisterContactSingle: build.query({
            query: () => ({
                url: '/services-id',
                method: 'GET',
            }),
        }),
    }),
});

// Export Hooks
export const {
    useContactPostMessageMutation,
    useRegisterPostMessageMutation,
    useGetRegisterContactSingleQuery,
} = contact;
