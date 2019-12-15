import { ClAvatar, ClCard, ClFlex, ClIcon, ClLayout } from "mp-colorui";
import { View, Text } from "@tarojs/components";
import './index.scss';

function PostItem() {
  function handleClick() {
    Taro.navigateTo({
      url: '/pages/post/detail'
    })
  }
  return (
    <View onClick={handleClick}>
      <ClCard className="post-item">
        <ClFlex>
          <View className="basis-xs">
            <ClLayout margin="small" marginDirection="right">
              <ClAvatar
                shape="round"
                size="large"
                shadow
                headerArray={[{ url: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg' }]}
              />
            </ClLayout>
          </View>
          <View className="basic-xl">
            <ClFlex direction="column">
              <img src="https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg" />
              <ClLayout paddingDirection="top" padding="small">
                <Text>具体描述内容具体描述内容具体描述内容具体描述内容具体描述内容具体描述内容具体描述内容具体描述内容具体描述内容具体描述内容</Text>
              </ClLayout>
              <ClFlex className="action" direction="row" justify="between" align="center" >
                <View className="basis-sl">
                  <ClIcon iconName="share" size="xsmall" color="green" />
                </View>
                <View className="basis-xl tags">
                  <Text className="tag">#杭州</Text>
                  <Text className="tag">1秒前推荐</Text>
                </View>
              </ClFlex>
            </ClFlex>
          </View>
        </ClFlex>
        {/* <div className="avatar">

        </div>
        <div className="content">

        </div> */}
      </ClCard>
    </View>
  )
}

export default PostItem;
