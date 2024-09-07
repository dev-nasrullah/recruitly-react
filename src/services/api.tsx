import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, BASE_URL } from '@/constant/api.const';
import { Company, CompanyResponse } from './type';

export const companyApi = createApi({
  reducerPath: 'companyApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCompanies: builder.query<CompanyResponse, any>({
      query: () => `/company?apiKey=${API_KEY}`,
      providesTags: ['company'],
    }),
    createCompany: builder.mutation({
      query: (data) => ({
        url: `/company?apiKey=${API_KEY}`,
        method: 'POST',
        body: data,
        invalidateTags: ['company'],
      }),
    }),
    getCompany: builder.query<Company, string>({
      query: (id) => `/company/${id}?apiKey=${API_KEY}`,
      providesTags: ['company'],
    }),
  }),
  tagTypes: ['company'],
});

export const { useGetCompaniesQuery, useCreateCompanyMutation, useGetCompanyQuery } = companyApi;
