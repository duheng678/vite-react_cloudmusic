import React, { Suspense } from 'react'
import { NavLink } from 'react-router-dom'

const Recommend = React.lazy(() => import('@/views/discover/c-views/recommend/index.tsx'))

// 包装组件：用于在根路径显示 Discover 布局 + Recommend
// 注意：index 路由不能有 children，所以需要这个包装组件来直接渲染内容
// 点击"推荐"时应该跳转到 /discover，所以链接指向 /discover
export const DiscoverWithRecommend = () => (
  <div>
    <NavLink to="/discover">推荐</NavLink>
    <NavLink to="/discover/ranking">排行榜</NavLink>
    <NavLink to="/discover/songs">歌单</NavLink>
    <NavLink to="/discover/djradio">播客</NavLink>
    <NavLink to="/discover/artist">歌手</NavLink>
    <NavLink to="/discover/album">新蝶上架</NavLink>
    <Suspense fallback={<div>Loading...</div>}>
      <Recommend />
    </Suspense>
  </div>
)
