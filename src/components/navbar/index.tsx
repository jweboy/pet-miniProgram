import { ClNavBar } from "mp-colorui"
import { FC } from "@tarojs/taro"
import { NavBarProps } from "mp-colorui/@types/navBar"

const NavBar: FC<NavBarProps> = (props) => {
  const leftIcon = [{
    icon: 'back',
    text: '返回',
  }];

  function handleNavigate() {
    Taro.navigateBack();
  }
  return (
    <ClNavBar leftIcon={leftIcon} title={props.title} onClickLeftIcon={handleNavigate}/>
  )
}

export default NavBar

