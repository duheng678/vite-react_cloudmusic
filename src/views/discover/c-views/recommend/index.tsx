import { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import request from '@/service'
interface IProps {
  children?: ReactNode
}
export interface IBanner {
  targetId: number
  bigImageUrl: string
  imageUrl: string
  targetType: number
  typeTitle: string
  s_ctrp: string
  url: string
}

const Recommend: FC<IProps> = () => {
  const [, setBanners] = useState<IBanner[]>([])
  useEffect(() => {
    request
      .get({
        url: '/banner',
      })
      .then(res => {
        console.log(res)

        setBanners(res.banners)
      })
  }, [])

  return <div>Recommend</div>
}

export default memo(Recommend)
