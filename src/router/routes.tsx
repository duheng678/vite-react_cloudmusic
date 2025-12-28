import type { RouteObject } from 'react-router-dom'
import React from 'react'
import { DiscoverWithRecommend } from './DiscoverWithRecommend'

const App = React.lazy(() => import('@/App.tsx'))

const Discover = React.lazy(() => import('@/views/discover/index.tsx'))
const My = React.lazy(() => import('@/views/my/index.tsx'))
const Focus = React.lazy(() => import('@/views/focus/index.tsx'))
const Download = React.lazy(() => import('@/views/download/index.tsx'))

const Album = React.lazy(() => import('@/views/discover/c-views/album/index.tsx'))
const Artist = React.lazy(() => import('@/views/discover/c-views/artist/index.tsx'))
const Ranking = React.lazy(() => import('@/views/discover/c-views/ranking/index.tsx'))
const Recommend = React.lazy(() => import('@/views/discover/c-views/recommend/index.tsx'))
const Songs = React.lazy(() => import('@/views/discover/c-views/songs/index.tsx'))
const DjRadio = React.lazy(() => import('@/views/discover/c-views/djradio/index.tsx'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        // index 路由不能有 children，所以直接使用包装组件
        index: true,
        element: <DiscoverWithRecommend />,
      },
      {
        path: '/discover',
        element: <Discover />,
        children: [
          {
            index: true,
            element: <Recommend />,
          },
          {
            path: '/discover/recommend',
            element: <Recommend />,
          },
          {
            path: '/discover/ranking',
            element: <Ranking />,
          },
          {
            path: '/discover/songs',
            element: <Songs />,
          },
          {
            path: '/discover/djradio',
            element: <DjRadio />,
          },
          {
            path: '/discover/artist',
            element: <Artist />,
          },
          {
            path: '/discover/album',
            element: <Album />,
          },
        ],
      },
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
    ],
  },
]
