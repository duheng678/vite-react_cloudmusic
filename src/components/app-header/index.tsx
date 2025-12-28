import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import SearchBox from './SearchBox'
import './index.less'

interface NavItem {
  path: string
  label: string
}

const navItems: NavItem[] = [
  { path: '/', label: '发现音乐' },
  { path: '/my', label: '我的音乐' },
  { path: '/focus', label: '关注' },
  { path: '/store', label: '商城' },
  { path: '/musician', label: '音乐人' },
  { path: '/cloud-recommend', label: '云推歌' },
  { path: '/download', label: '下载客户端' },
]

const AppHeader = memo(() => {
  return (
    <div className="app-header">
      <div className="app-header-content">
        {/* Logo 区域 */}
        <div className="app-header-left">
          <Logo />
        </div>

        {/* 导航链接区域 */}
        <div className="app-header-nav">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* 右侧操作区域 */}
        <div className="app-header-right">
          <SearchBox />
          <button className="creator-center-btn">
            创作者中心
          </button>
          <button className="login-btn">登录</button>
        </div>
      </div>
    </div>
  )
})

AppHeader.displayName = 'AppHeader'

export default AppHeader

