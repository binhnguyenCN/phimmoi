// libs
import axios from "axios";
// others
import settings from "@/config/setting";
import cache from "@/utils/cache";

const API_KEY = "2bfee19f4689c394f425af8912a3af82";

const apiClient = axios.create({
  baseURL: settings().apiUrl,
  params: { api_key: API_KEY }
});

// eslint-disable-next-line jest/require-hook
axios.interceptors.response.use(
  async (response) => {
    if (response.status === 200) {
      cache.store(settings().apiUrl, response.data);
      return response;
    }
    const data = await cache.get(settings().apiUrl);
    return data ? { ok: true, data } : response;
  },
  (error) => Promise.reject(error)
);
export default apiClient;
