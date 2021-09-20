import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders ={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '939f2d7ecfmshe634b236a13d9eap192934jsnb88dac0be9e9'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi