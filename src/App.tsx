import { memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

const App = memo(() => {
  return (
    <>
      {/* 顶部导航栏 */}
      <AppHeader />

      {/* 主要内容区域 */}
      <main className="app-main w-full h-1200px!">
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      {/* 底部导航栏 */}
      <AppFooter />
    </>
  )
})

App.displayName = 'App'

export default App
