import axios, { AxiosInstance } from "axios";

export interface ApiClientOptions {
  baseURL?: string;
  resource?: string;
}

const defaultApiClientOptions: ApiClientOptions = {
  baseURL: "/api",
  resource: "",
};

export class ApiClient {
  protected client: AxiosInstance;

  constructor(options: ApiClientOptions) {
    options = { ...defaultApiClientOptions, ...options };

    this.client = axios.create({
      baseURL: `${options.baseURL}/${options.resource}`,
    });

    this.client.interceptors.request.use((config) => {
      const accessToken = "//...//";
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });

    this.client.interceptors.response.use(
      (response) => response.data,
      (error) => {
        if (error.response.status === 401) {
          // Handle unauthorized error
        }
        return Promise.reject(error.response?.data || error);
      }
    );
  }
}
