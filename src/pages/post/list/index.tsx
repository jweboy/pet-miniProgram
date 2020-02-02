import { ClLayout } from "mp-colorui"
import PostItem from "../../../components/post-item"
import { useEffect } from "@tarojs/taro"
import { getPostList } from "../../../api/post";

const PostList = () => {
  useEffect(() => {
    // getPostList();
  }, []);

  return (
    <ClLayout>
      <PostItem />
    </ClLayout>
  )
}

export default PostList
