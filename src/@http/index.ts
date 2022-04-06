import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/latest';

class Http {
  private baseURL: string;
  instance: AxiosInstance;

  constructor() {
    this.baseURL = BASE_URL;
    this.instance = axios.create({ baseURL: this.baseURL, timeout: 10000 });

    this.initialize();
  }

  private initialize() {
    this.instance.interceptors.request.use((config) => {
      return config;
    });

    this.instance.interceptors.response.use(undefined, (error) => {
      const { status } = error.response;

      switch (status) {
        case 401:
          console.error('Unauthorized');
          break;
        case 403:
          console.error('Forbidden');
          break;
        case 404:
          console.error('Not Found');
          break;
      }

      return Promise.reject(error);
    });
  }
}

export default new Http();
