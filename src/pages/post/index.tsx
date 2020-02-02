// import Tabbar from "../../components/tabbar";
import { ClAnimation, ClTextarea, ClCard, ClImagePicker, ClButton, ClLayout } from "mp-colorui";
import { TChooseImgObj } from "mp-colorui/@types/imagePicker";
import { useState } from "@tarojs/taro";
// import { ImageListItem } from "./typings.ts";

const initialImageList = [];
const MAX_IMAGE_COUNT = 4;

function Post() {
  const [imgList, setImgList] = useState(initialImageList);
  const chooseImage: TChooseImgObj = {
    count: MAX_IMAGE_COUNT,
    sourceType: ['album', 'camera'],
    success: handleChooseSucceed,
  };

  function handleChooseSucceed(list) {
    setImgList(list);
  }

  function handleSubmit() {
    Taro.navigateTo({
      url: '/pages/home/index'
    })
  }

  return (
    <ClAnimation type="fade">
      <ClCard>
        <ClTextarea maxLength={300} placeholder="请输入描述信息（最多可输入300字）" />
        <ClLayout margin="large" marginDirection="vertical">
          <ClImagePicker chooseImgObj={chooseImage} imgList={imgList} max={MAX_IMAGE_COUNT} />
        </ClLayout>
        <ClButton long shape="round" onClick={handleSubmit}>保存</ClButton>
      </ClCard>
    </ClAnimation>
  )
}

Post.config = {
  navigationBarTitleText: '新建帖子',
};

export default Post
