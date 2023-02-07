import { apiClient } from "./config/axiosConfig";

const productUrl = "/products/";

const getAllProduct = () => {
  return apiClient.get(productUrl);
};

const getProduct = (id?: string) => {
  return apiClient.get(`${productUrl}${id}`);
};

const likeProduct = (product_id: any, token?: string) => {
  return apiClient.post('/products/like', product_id, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  });
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
  likeProduct,
};
