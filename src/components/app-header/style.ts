import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import sprite01 from '@/assets/img/sprite_01.png'

// 只保留无法用 UnoCSS 实现的复杂样式
// 使用 styled-components 防止样式污染

// Logo 组件 - 需要背景图片定位
export const LogoLink = styled.a`
  background-image: url(${sprite01});
  background-position: 0 0;
  background-repeat: no-repeat;
  text-indent: -9999px;
`

// 导航项容器 - 需要处理最后一个元素的伪元素
export const NavItem = styled.div`
  // &:last-of-type a::after {
  //   position: absolute;
  //   content: '';
  //   width: 28px;
  //   height: 19px;
  //   background-image: url(${sprite01});
  //   background-position: -190px 0;
  //   top: 20px;
  //   right: -15px;
  // }
`

// 导航链接样式 - 需要 hover 和 active 状态
export const NavLinkStyled = styled(NavLink)`
  display: block;
  padding: 0 19px;
  color: #ccc;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }

  &.active {
    color: #fff;
    background: #000;

    .icon {
      position: absolute;
      display: inline-block;
      width: 12px;
      height: 7px;
      bottom: -1px;
      left: 50%;
      transform: translate(-50%, 0);
      background-image: url(${sprite01});
      background-position: -226px 0;
      background-repeat: no-repeat;
    }
  }
`

// 外部链接样式
export const ExternalLink = styled.a`
  display: block;
  padding: 0 20px;
  color: #ccc;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`

// Sprite 图标基础类
export const SpriteIcon = styled.i`
  background-image: url(${sprite01});
  background-repeat: no-repeat;
`
