import { memo } from 'react'
import { NavLink } from 'react-router-dom'

const Logo = memo(() => {
  return (
    <NavLink to="/" className="logo-link">
      <div className="logo-icon">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 云朵形状 */}
          <path
            d="M15 5C10.5 5 7 8.5 7 13C7 13.5 7.1 14 7.2 14.5C5.2 15.5 4 17.5 4 20C4 23 6.5 25.5 9.5 25.5H20.5C23.5 25.5 26 23 26 20C26 17.5 24.8 15.5 22.8 14.5C22.9 14 23 13.5 23 13C23 8.5 19.5 5 15 5Z"
            fill="#C20C0C"
          />
          {/* 播放按钮 */}
          <path
            d="M12 10L18 15L12 20V10Z"
            fill="white"
          />
        </svg>
      </div>
      <span className="logo-text">网易云音乐</span>
    </NavLink>
  )
})

Logo.displayName = 'Logo'

export default Logo

