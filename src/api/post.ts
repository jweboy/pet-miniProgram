import request from '../utils/request';

interface PostItem {

}

export function getPostList() {
  return request({
    url: '/post',
  });
}
