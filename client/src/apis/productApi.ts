import { apiClient } from "./config/axiosConfig";

const productUrl = "/products/";

const getAllProduct = () => {
  return apiClient.get(productUrl);
};

const getProduct = (id: string | undefined) => {
  return apiClient.get(`${productUrl}${id}`);
};

const createProduct = (formData: any, token: string | undefined) => {
  return apiClient.post(productUrl, formData, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  });
};

export default {
  getAllProduct,
  getProduct,
  createProduct,
};
