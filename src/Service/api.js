import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../helpers/config";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl, credentials: "include" }),
  endpoints: (builder) => ({
    //Get Method
    getAssets: builder.query({
      query: (params) => {
        const { page_no, search } = params;
        return `/assets?page_no=${page_no}&search=${search}`;
      },
    }),
    getAssetActivity: builder.query({
      query: () => `/asset_activity`,
    }),
    getUserProfile: builder.query({
      query: () => `/user`,
    }),
    getDarkWeb: builder.query({
      query: (page) => `darkwebsite?page_no=${page}`,
    }),
    getExchange: builder.query({
      query: (page) => `exchangemeta?page_no=${page}`,
    }),
    getBeneficiaryData: builder.query({
      query: (walletAddress) => `beneficiary?sender=${walletAddress}`,
    }),
    getNotifications: builder.query({
      query: () => "notifications",
    }),
    getTransactionData: builder.query({
      query: (walletAddress) => `wallet_transactions?wallet=${walletAddress}`,
    }),
    getWalletBalance: builder.query({
      query: (walletAddress) => `/wallet_balance?wallet=${walletAddress}`,
    }),
    getSenderBalance: builder.query({
      query: (address) => `/wallet_balance?wallet=${address}`,
    }),
    getBitcoinData: builder.query({
      query: ({ page, sender, receiver }) =>
        `transactions?page_no=${page}&sender=${sender}&receiver=${receiver}`,
    }),

    //Post Method
    createToken: builder.mutation({
      query: (tokenData) => ({
        url: `/token_store`,
        method: "POST",
        body: tokenData,
      }),
    }),
    postAsset: builder.mutation({
      query: (assetData) => ({
        url: "/assets",
        method: "POST",
        body: assetData,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
    }),
    postDarkWebsite: builder.mutation({
      query: (darkWebsiteData) => ({
        url: `/darkwebsite`,
        method: "POST",
        body: darkWebsiteData,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
    }),
    addExchange: builder.mutation({
      query: (exchangeData) => ({
        url: "/exchangemeta",
        method: "POST",
        body: exchangeData,
      }),
    }),
    addBitcoinTransaction: builder.mutation({
      query: (transactionData) => ({
        url: "/transactions?admin_id=defiant",
        method: "POST",
        body: transactionData,
      }),
    }),
    signIn: builder.mutation({
      query: (credentials) => ({
        url: "/signin",
        method: "POST",
        body: credentials,
      }),
    }),
    signUp: builder.mutation({
      query: (userData) => ({
        url: "/signup",
        method: "POST",
        body: userData,
      }),
    }),

    //Delete Method
    deleteNotifications: builder.mutation({
      query: () => ({
        url: "notifications",
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAssetsQuery,
  useGetUserProfileQuery,
  useCreateTokenMutation,
  usePostAssetMutation,
  useGetAssetActivityQuery,
  usePostDarkWebsiteMutation,
  useAddExchangeMutation,
  useAddBitcoinTransactionMutation,
  useGetExchangeQuery,
  useGetDarkWebQuery,
  useGetBeneficiaryDataQuery,
  useSignUpMutation,
  useSignInMutation,
  useGetTransactionDataQuery,
  useGetWalletBalanceQuery,
  useGetSenderBalanceQuery,
  useGetBitcoinDataQuery,
  useLazyGetNotificationsQuery,
  useDeleteNotificationsMutation,
  useGetNotificationsQuery,
} = api;
