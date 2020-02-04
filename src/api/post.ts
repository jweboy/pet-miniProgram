/*
 * @Author: jweboy
 * @Date: 2020-02-02 20:53:12
 * @LastEditors  : jweboy
 * @LastEditTime : 2020-02-08 17:31:36
 */
import request from '../utils/request';

export function getPosts() {
  return request({
    url: '/posts',
    method: 'GET'
  });
}
