import { ClTabBar } from "mp-colorui";
import { useRouter, FC, useState, useEffect } from '@tarojs/taro';
import { ReactElement } from "react";
import { TabBarProps } from "mp-colorui/@types/tabBar";

const defaultTabs = [
  {
    badge: true,
    icon: 'hot',
    title: '首页',
    key: 'home',
  },
  {
    badge: false,
    action: true,
    icon: 'add',
    title: '发布',
    key: 'post',
  },
  {
    badge: false,
    icon: 'info',
    title: '自己',
    key: 'center',
  }
];
const initialActive: number = 1;

const Tabbar: FC<TabBarProps> = (): ReactElement => {
  const [active, setActive] = useState(initialActive);
  const router = useRouter();
  const { params } = router;

  function handleClick(index: number) {
    const currentTab = defaultTabs[index as string];
    const url:string = `/pages/${currentTab.key}/index?active=${index}`
    Taro.navigateTo({ url });
  }

  useEffect(() => {
    const { active } = params;

    setActive(+active);
  }, [params]);

  return (
    <ClTabBar tabs={defaultTabs} fix onClick={handleClick} active={active} />
  )
}

export default Tabbar
