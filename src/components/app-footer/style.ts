import styled from 'styled-components'
import footerSprite from '@/assets/img/sprite_footer_03.png'

export const LogoLink = styled.a`
  background-image: url(${footerSprite});
  background-position: 0 0;
  background-repeat: no-repeat;
  text-indent: -9999px;
  background-size: 220px 220px;
`
// 功能图标容器 - 需要 hover 效果
export const FooterIcon = styled.div`
  cursor: pointer;
  transition: transform 0.2s;
  width: 45px;
  &:hover {
    // transform: translateY(-2px);
  }

  &:hover .icon-circle {
    border-color: #a00a0a;
  }

  &:hover span {
    color: #c20c0c;
  }
  &:first-child {
    margin-left: 0;
  }
  &:nth-child(1) {
    > a {
      background-position: -170px -5px;
      &:hover {
        background-position: -5px -115px;
      }
    }
  }
  &:nth-child(2) {
    > a {
      background-position: -5px -170px;
      &:hover {
        background-position: -60px -170px;
      }
    }
  }
  &:nth-child(3) {
    > a {
      background-position: -5px -170px;
      &:hover {
        background-position: -60px -170px;
      }
    }
  }
  &:nth-child(4) {
    > a {
      background-position: -60px -60px;
      &:hover {
        background-position: -115px -5px;
      }
    }
  }
  &:nth-child(5) {
    > a {
      background-position: -5px -170px;
      &:hover {
        background-position: -60px -170px;
      }
    }
  }
  &:nth-child(6) {
    > a {
      background-position: -5px -170px;
      &:hover {
        background-position: -60px -170px;
      }
    }
  }
  &:nth-child(7) {
    > a {
      background-position: -170px -115px;
      &:hover {
        background-position: -60px -115px;
      }
    }
  }
`

// 导航链接容器 - 需要处理分隔符
export const FooterLinks = styled.div`
  display: inline-flex;
  align-items: center;

  a {
    text-decoration: none;
    transition: color 0.2s;
  }
`

// TOP 按钮 - 需要复杂的样式和动画
export const TopButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  &:hover {
    background-color: #fff;
    border-color: #c20c0c;
    box-shadow: 0 4px 12px rgba(194, 12, 12, 0.2);
    transform: translateY(-2px);
  }

  svg {
    font-size: 16px;
    color: #666;
    margin-bottom: 2px;
  }

  span {
    font-size: 12px;
    color: #666;
  }

  &:hover svg,
  &:hover span {
    color: #c20c0c;
  }
`
