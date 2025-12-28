import { memo, Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './hooks/store'
import { shallowEqual } from 'react-redux'
import { increment } from './store/features/counterSlice'
import HomeClass from './views/demo/class'
const App = memo(() => {
  const count = useAppSelector(state => state.counter.value, shallowEqual)
  const dispatch = useAppDispatch()
  return (
    <div>
      <NavLink to="/">发现音乐</NavLink>
      <NavLink to="/my">我的音乐</NavLink>
      <NavLink to="/focus">关注</NavLink>
      <NavLink to="/download">下载客户端</NavLink>
      <h1> {count}</h1> <HomeClass />
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
})
export default App
