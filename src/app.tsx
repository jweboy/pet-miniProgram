import '@tarojs/async-await'
import Taro, { Component, Config, TabBar } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/home/index'

import configStore from './store'

import './app.scss'
import PostItem from './components/post-item'
import TabBar, { TabBarProps, IProps } from 'mp-colorui/@types/tabBar'
import { ClTabBar } from 'mp-colorui'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/center/index',
      // 'components/post-item',
      'pages/center/ConfirmModal',
      'pages/post/list/index',
      'pages/home/index',
      'pages/post/index',
      'pages/post/detail',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  tabs = [
    {
      badge: true,
      icon: 'hot',
      title: '首页',
    }
  ]

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        {/* <Index /> */}
        {/* <PostItem /> */}
        {/* <ClTabBar tabs={defaultTabs}/> */}
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
