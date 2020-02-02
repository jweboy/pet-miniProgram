import { AxiosRequestConfig } from 'axios';
import * as qs from 'qs';

const config: AxiosRequestConfig = {
  // @ts-ignore
  baseURL: `${process.env.API}/api`,
  timeout: 5000,
  responseType: 'json',
  withCredentials: false, // 是否允许携带cookie
  headers: {
    'content-Type': 'application/x-www-form-urlencode;charset=utf-8',
  },
  paramsSerializer: (params) => {
    // format array: t=[a, b] => "t=a,b"
    return qs.stringify(params, { arrayFormat: 'comma' });
  },
};

export default config;
