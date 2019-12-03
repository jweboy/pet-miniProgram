import { ClAvatar, ClCard, ClFlex, ClIcon } from "mp-colorui";
import './index.scss';
import { View, Text } from "@tarojs/components";
// import "mp-colorui/dist/style/components/avatar.scss";

function PostItem() {
  return (
    <ClCard>
      <ClFlex>
        <View className="flex-sub">
          <ClAvatar shape="round" size="large" shadow headerArray={[{url: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg'}]}/>
        </View>
        <View className="flex-treble">
          <ClFlex direction="column">
            <View>
              <View >
                <Text>来自</Text>
                <Text>杭州</Text>
              </View>
              <View>1秒前推荐</View>
            </View>
            <img src="https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg" />
            <View>
              <Text>具体描述内容具体描述内容具体描述内容具体描述内容具体描述内容具体描述内容具体描述内容具体描述内容具体描述内容具体描述内容</Text>
            </View>
            <ClIcon iconName="share" size="small" />
          </ClFlex>
        </View>
      </ClFlex>
      {/* <div className="avatar">

      </div>
      <div className="content">

      </div> */}
    </ClCard>
  )
}

export default PostItem;
