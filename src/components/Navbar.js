import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  const location = useLocation()
  
  return (
    <Nav>
        <NavContainer>
            <Logo to="/">
                <LogoIcon>🏦</LogoIcon>
                <LogoText>TrustBank</LogoText>
            </Logo>
            <Ul>
                <li><NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Anasayfa</NavLink></li>
                <li><NavLink to="/hakkimizda" className={location.pathname === '/hakkimizda' ? 'active' : ''}>Hakkımızda</NavLink></li>
                <li><NavLink to="/bireysel-hizmetler" className={location.pathname === '/bireysel-hizmetler' ? 'active' : ''}>Bireysel Hizmetler</NavLink></li>
                <li><NavLink to="/kurumsal-hizmetler" className={location.pathname === '/kurumsal-hizmetler' ? 'active' : ''}>Kurumsal Hizmetler</NavLink></li>
                <li><NavLink to="/kampanyalar" className={location.pathname === '/kampanyalar' ? 'active' : ''}>Kampanyalar</NavLink></li>
                <li><NavLink to="/iletisim" className={location.pathname === '/iletisim' ? 'active' : ''}>İletişim</NavLink></li>
            </Ul>
            <AuthButtons>
                <RegisterButton to="/giris">Kayıt Ol</RegisterButton>
                <LoginButton to="/giris">Giriş Yap</LoginButton>
            </AuthButtons>
        </NavContainer>
    </Nav>
  )
}

const Nav = styled.nav`
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    padding: 15px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
`

const NavContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 15px;
    }
`

const Logo = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    transition: transform 0.3s ease;
    
    &:hover {
        transform: scale(1.05);
    }
`

const LogoIcon = styled.span`
    font-size: 2rem;
`

const LogoText = styled.span`
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    background: linear-gradient(45deg, #ffffff, #e2e8f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    white-space: nowrap;
    position: relative;
    
    &:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-2px);
    }
    
    &.active {
        background: rgba(255, 255, 255, 0.25);
        font-weight: 600;
    }
    
    &.active::after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 3px;
        background: white;
        border-radius: 2px;
    }
`

const Ul = styled.ul`
    display: flex;
    gap: 5px;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    
    @media (max-width: 768px) {
        justify-content: center;
        gap: 5px;
    }
`

const AuthButtons = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    
    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`

const RegisterButton = styled(Link)`
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.15);
    color: white;
    text-decoration: none;
    font-weight: 600;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    white-space: nowrap;
    border: 2px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
        background: rgba(255, 255, 255, 0.25);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
    }
`

const LoginButton = styled(Link)`
    padding: 10px 20px;
    background: white;
    color: #1e3a8a;
    text-decoration: none;
    font-weight: 600;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    white-space: nowrap;
    border: 2px solid white;
    
    &:hover {
        background: #f8fafc;
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
    }
`

export default Navbar
