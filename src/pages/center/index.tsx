import { ClLayout, ClAvatar, ClFlex, ClCard, ClLoading } from "mp-colorui";
import { useEffect, useRef, createRef, getSetting, useState, getUserInfo, Component } from "@tarojs/taro";
import { Button, View, Input, Text } from "@tarojs/components";
import ConfirmModal from "./ConfirmModal";
import './index.less'
import { THeaderArray } from "mp-colorui/@types/avatar";
import PostItem from "../../components/post-item";
import { getPosts } from "../../api/post";
// import Tabbar from "../../components/tabbar";

interface UserModel {
  avatarUrl?: string;
  nickName?: string;
}

const initalVisible: boolean = false;
const initialUser: UserModel = {};


function Center() {
  const [user, setUser] = useState(initialUser)
  const [visible, setVisible] = useState(initalVisible)
  const avatar: THeaderArray[] = [{ url: user.avatarUrl, icon: 'people', bgColor: 'light-gray' }];

  // const authModalRef = useRef(null);
  // return (
  //   <ClAnimation type="fade">
  //     Center
  //     <Tabbar />
  //   </ClAnimation>
  // )

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(authModalRef.current)
  //   }, 1000)
  //   if (authModalRef.current) {
  //     console.log(authModalRef.current.focus)
  //   }
  //   getSetting().then((resp) => {
  //     if (resp.authSetting['scope.userInfo']) {
  //       console.log(resp)
  //     }
  //   })
  // }, []);

  useEffect(() => {
    getPosts()
    getSetting().then((resp) => {
      if (resp.authSetting['scope.userInfo']) {
        setVisible(false);
        getUserInfo({
          success: function(resp) {
            setUser(resp.userInfo)
          }
        })
      }
    }).catch(() => {
      setVisible(true);
    })
  })

  function getAuthedUserInfo(data) {
    const { detail } = data;
    setUser(detail.userInfo);
  }

  return (
    <ClLayout>
      <View className="message">
        <ClLoading
          type="line"
          show={visible}
          loadingError
        />
      </View>
      <View className="pet-center bg-gradual-blue">
        <ClFlex className="avatar" justify="center" align="center">
          <Button className="auth-btn" openType='getUserInfo' onGetUserInfo={getAuthedUserInfo}>
            <ClAvatar
              shadow
              shape="round"
              size="xlarge"
              headerArray={avatar}
            />
            <Text className="nickName">{user.nickName}</Text>
          </Button>
        </ClFlex>
      </View>
      <ClLayout>
        <PostItem />
      </ClLayout>
      {/* <Button ref={authBtnRef} openType='getUserInfo' onGetUserInfo={getUserInfo}>getUserInfo</Button> */}
      {/* <ConfirmModal modalRef={authModalRef} /> */}
    </ClLayout>
  )
}

export default Center
