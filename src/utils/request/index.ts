/*
 * @Author: jweboy
 * @Date: 2020-02-02 20:53:12
 * @LastEditors  : jweboy
 * @LastEditTime : 2020-02-08 23:58:50
 */
// import * as axios from 'axios';
// import config from './config';
import Taro, { showLoading, hideLoading } from '@tarojs/taro'

// // 参考文章 https://juejin.im/post/59a22e71518825242c422604

// const request = axios.default.create(config);

// // 请求拦截器
// request.interceptors.request.use(
//   function reqHandler(config: axios.AxiosRequestConfig) {
//     return config;
//   },
//   function respHandler(err: Error) {
//     return Promise.reject(err);
//   },
// );


// // 响应拦截器
// request.interceptors.response.use(
//   function reqHandler(res: axios.AxiosResponse) {
//     if (res.data) {
//       // 常规请求
//       if (res.status === 200) {
//         return res.data;
//       }

//       // 请求服务器直接下载文件
//       if (res.config.responseType === 'blob') {
//         // handler
//       }
//     } else {
//       const { message } = res.data;

//       console.error(message);

//       return Promise.reject(message);
//     }
//   },
//   function respHander(err: Error) {
//     console.error(err.message);

//     return Promise.reject(err);
//   }
// );

// export default request;

// console.log(process.env.API)

function request(opts: Taro.request.Option) {
  const { url, method, ...restProps } = opts;
  const BASE_URL = 'https://easy-mock.com/mock/5e3e7a1d09081a7abce281ef/v1'

  showLoading({
    title:'加载中...'
  })

  return Taro.request({
    url: BASE_URL + opts.url,
    ...restProps,
  }).then((data) => {
    console.log(data)
    hideLoading();
    return data;
  }).catch(() => {
    hideLoading()
  });
}

export default request;
