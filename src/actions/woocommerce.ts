'use server'

import axios, { AxiosInstance } from 'axios';

// const WooCommerce = new WooCommerceRestApi({
//   url: 'https://idiiche.com/',
//   consumerKey: process.env.WC_CONSUMER_KEY as string,
//   consumerSecret: process.env.WC_CONSUMER_SECRET as string,
//   version: 'wc/v3',
// })

// const WooCommerce: AxiosInstance = axios.create({
//   baseURL: 'https://lisafolawiyo.com/wp-json/wc/v3/',
//   auth: {
//     username: process.env.WC_CONSUMER_KEY || '',
//     password: process.env.WC_CONSUMER_SECRET || ''
//   }
// });

export const getProducts = async () => {
  try {
    const response = await axios.get('https://lisafolawiyo.com/wp-json/wc/v3/products?consumer_key='+process.env.WC_CONSUMER_KEY+'&consumer_secret='+process.env.WC_CONSUMER_SECRET+'&per_page=12&page=1');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error; // Rethrow if you want the caller to handle it too
  }
}

export const getProduct = async (slug: string) => {
  const products = await getProducts()
  return products.find((p: any) => p.slug === slug);
}

//const product = products.find((p: any) => p.slug === slug);

// export const getProduct = async (id: string) => {
//     const product = await WooCommerce.get(`products`, {
//       id: parseInt(id),
//     })
//     return product.data
//   }
  