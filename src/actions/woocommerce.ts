'use server'

import { Product } from '@/utils/models';
import axios from 'axios';

interface PageProps {
  params: {
    slug: string;
  };
}

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
  return products.find((p: Product) => p.slug === slug);
}