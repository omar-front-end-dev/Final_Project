import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductApi = createApi({
  reducerPath: "ProductApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/`,
  }),
  endpoints: (builder) => ({
    getProductByName: builder.query({
      query: (name) => `${name}`,
    }),
  }),
});

export const { useGetProductByNameQuery } = ProductApi;
