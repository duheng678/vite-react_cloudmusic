import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
const App = memo(() => {
  return (
    <div>
      <Outlet />
    </div>
  )
})

export default App
