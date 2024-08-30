import { BASE_URL, months, PRODUCTS_URL } from "@/constants";
import axios from "axios";

export const fetchCartFromDB = async () => {
  const response = await axios.get(`${BASE_URL}/api/cart`);
  return response.data;
};

export const updateCartInDB = async (cartItems) => {
  const response = await axios.put(`${BASE_URL}/api/cart`, cartItems);
  return response.data;
};

export const fetchProductsOfaCategory = async (category, params) => {
  const response = await axios({
    method: "GET",
    url: PRODUCTS_URL + `/category/${category}`,
    params,
  });
  return response.data;
};

export const fetchAllProducts = async (params) => {
  const response = await axios({
    method: "GET",
    url: PRODUCTS_URL,
    params,
  });
  return response.data;
};

export const searchProducts = async (params) => {
  const response = await axios({
    method: "GET",
    url: PRODUCTS_URL + "/search",
    params,
  });
  return response.data;
};

export const fetchProduct = async (id) => {
  const response = await axios({
    method: "GET",
    url: PRODUCTS_URL + `/${id}`,
  });
  return response.data;
};

export const checkout = async (cartItems) => {
  const response = await axios.post(`${BASE_URL}/api/checkout`, { cartItems });
  return response.data;
};

export const actualPrice = (price, discountPercent) => {
  return (price / (1 - [discountPercent / 100])).toFixed(2);
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const month = months[date.getUTCMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  return `${month} ${day} ${year}`;
};