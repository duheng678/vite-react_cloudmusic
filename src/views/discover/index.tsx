import { NavLink, Outlet } from 'react-router-dom'

export default function index() {
  return (
    <div>
      <NavLink to="/discover">推荐</NavLink>
      <NavLink to="/discover/ranking">排行榜</NavLink>
      <NavLink to="/discover/songs">歌单</NavLink>
      <NavLink to="/discover/djradio">播客</NavLink>
      <NavLink to="/discover/artist">歌手</NavLink>
      <NavLink to="/discover/album">新蝶上架</NavLink>
      <Outlet />
    </div>
  )
}
