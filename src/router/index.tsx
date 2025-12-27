import React from 'react'

import type { RouteObject } from 'react-router-dom'
import { createHashRouter, Navigate } from 'react-router-dom'
const Discover = React.lazy(() => import('@/views/discover/index.tsx'))
const My = React.lazy(() => import('@/views/my/index.tsx'))
const Focus = React.lazy(() => import('@/views/focus/index.tsx'))
const Download = React.lazy(() => import('@/views/download/index.tsx'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Discover />,
  },
  // {
  //   path: '/discover',
  //   element: <Discover />,
  // },
  {
    path: '/my',
    element: <My />,
  },
  {
    path: '/focus',
    element: <Focus />,
  },
  {
    path: '/download',
    element: <Download />,
  },
]

export const router = createHashRouter(routes)
