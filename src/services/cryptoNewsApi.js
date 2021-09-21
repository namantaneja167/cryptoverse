import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '939f2d7ecfmshe634b236a13d9eap192934jsnb88dac0be9e9'
  }

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news/';

const createRequest = (url)=>({url,headers:cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi;

