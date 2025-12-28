import { memo, useState, useEffect } from 'react'
import { UpOutlined } from '@ant-design/icons'
import { FooterLinks, FooterIcon, TopButton, LogoLink } from './style'

// 功能图标数据
const footerIcons = [
  { icon: '音乐开放平台', label: '音乐开放平台' },
  { icon: '云村交易所', label: '云村交易所' },
  { icon: 'X StudioAI歌手', label: 'X StudioAI歌手' },
  { icon: '用户认证', label: '用户认证' },
  { icon: 'AI免费写歌', label: 'AI免费写歌' },
  { icon: '云推歌', label: '云推歌' },
  { icon: '赞赏', label: '赞赏' },
]

// 导航链接数据
const footerLinks = [
  { text: '服务条款', href: '#' },
  { text: '隐私政策', href: '#' },
  { text: '儿童隐私政策', href: '#' },
  { text: '版权投诉', href: '#' },
  { text: '投资者关系', href: '#' },
  { text: '广告合作', href: '#' },
  { text: '联系我们', href: '#' },
]

const AppFooter = memo(() => {
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#f2f2f2] b-t b-solid b-#d3d3d3 text-[#666] h-325px text-xs py-8">
      <div className="w-980px mx-auto px-5">
        {/* 功能图标区域 */}
        <div className="flex justify-center items-center flex-wrap gap-8 mb-6">
          {footerIcons.map((item, index) => (
            <FooterIcon key={index} className="w-45px flex flex-col items-center ml-50px ">
              <LogoLink className="block w-[45px] h-[45px]"></LogoLink>
              <span className=" text-[#666] mt-10px text-xs whitespace-nowrap">{item.label}</span>
            </FooterIcon>
          ))}
        </div>

        {/* 导航链接 */}
        <div className="flex justify-center items-center flex-wrap gap-x-2 mb-4">
          {footerLinks.map((link, index) => (
            <FooterLinks key={index} className="">
              <a href={link.href} className="text-[#666] hover:text-[#c20c0c] transition-colors">
                {link.text}
              </a>
              {index < footerLinks.length - 1 && <span className="mx-2 text-[#999]">|</span>}
            </FooterLinks>
          ))}
        </div>

        {/* 举报信息 */}
        <div className="text-center mb-4">
          <span className="text-[#666]">廉正举报</span>
          <span className="mx-2 text-[#999]">|</span>
          <span className="text-[#666]">不良信息举报邮箱: 51jubao@service.netease.com</span>
        </div>

        {/* 监管和版权信息 */}
        <div className="text-center space-y-1 text-[#999] text-xs leading-5">
          <div className="c-#666666">
            互联网宗教信息服务许可证: 浙 (2022) 0000120 增值电信业务经营许可证: 浙B2-20150198 粤B2-20090191-18
            浙ICP备15006616号-4 工业和信息化部备案管理系统网站
          </div>
          <div className="c-#666666">
            网易公司版权所有©1997-2025 杭州乐读科技有限公司运营: 浙网文[2024] 0900-042号 浙公网安备33010802013307号
            算法服务公示信息
          </div>
        </div>
      </div>
      {/* TOP 按钮 */}
      {showTopButton && (
        <TopButton onClick={scrollToTop} className="fixed right-8 bottom-8">
          <UpOutlined />
          <span>TOP</span>
        </TopButton>
      )}
    </footer>
  )
})

AppFooter.displayName = 'AppFooter'

export default AppFooter
