import { memo } from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import headerTitles from '@/assets/data/header_titles.json'
import { LogoLink, NavItem, NavLinkStyled, ExternalLink, SpriteIcon } from './style'

const AppHeader = memo(() => {
  /** 组件的展示逻辑 */
  function showItem(item: { title: string; type: string; link: string }) {
    if (item.type === 'path') {
      return (
        <NavLinkStyled to={item.link}>
          {item.title}
          <SpriteIcon className="icon" />
        </NavLinkStyled>
      )
    } else {
      return (
        <ExternalLink href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </ExternalLink>
      )
    }
  }

  return (
    <div className=" bg-[#242424] border-b border-black text-sm text-white">
      {/* 导航栏内容区域 - 70px */}
      <div className=" h-[70px] flex  items-center max-w-[1100px] mx-auto ">
        {/* 左侧 Logo 和导航 */}
        <div className="flex items-center">
          <LogoLink className="block w-[176px] h-[70px]" href="/">
            网易云音乐
          </LogoLink>
          <div className="flex leading-[70px]">
            {headerTitles.map(item => {
              return (
                <NavItem className="relative" key={item.title}>
                  {showItem(item)}
                </NavItem>
              )
            })}
          </div>
        </div>

        {/* 右侧搜索和操作 */}
        <div className="flex items-center text-[#787878] text-xs">
          <Input
            className="w-[158px] h-8 rounded-16px [&_input::placeholder]:text-xs"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <span className="w-[90px] h-8 leading-8 mx-4 text-center border border-[#666] rounded-2xl b-1px b-solid b-#ccc rounded-16px text-[#ccc] cursor-pointer hover:text-white hover:border-white transition-colors">
            创作者中心
          </span>
          <span className="login text-#ccc hover:text-white cursor-pointer  ">登录</span>
        </div>
      </div>
      {/* 底部红色分隔线 - 5px */}
      <div className="h-[5px] bg-[#c20c0c]"></div>
    </div>
  )
})

AppHeader.displayName = 'AppHeader'

export default AppHeader
