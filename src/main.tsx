import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'
import { store } from '@/store'
import { Provider } from 'react-redux'

import 'normalize.css'
// import '@unocss/reset/tailwind.css'
import 'uno.css'
// import 'antd/dist/reset.css'
import '@/styles/global.less'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
