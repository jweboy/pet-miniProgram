// import * as axios from 'axios';
// import config from './config';
import Taro from '@tarojs/taro'

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

  return Taro.request({
    url: 'http://118.24.155.105:10000/post',
    method: opts.method || 'GET',
    ...restProps,
  }).catch(err => {
    console.warn(err)
  });
}

export default request;
