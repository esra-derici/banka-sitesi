import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterCard>
      <FooterContent>
        {/* Logo ve Açıklama */}
        <FooterSection>
          <Logo to="/">
            <LogoIcon>🏦</LogoIcon>
            <LogoText>TrustBank</LogoText>
          </Logo>
          <FooterDescription>
            Güvenilir bankacılık hizmetleri ile finansal hedeflerinize ulaşmanız için yanınızdayız.
          </FooterDescription>
          <SocialLinks>
            <SocialLink href="#" aria-label="Facebook">📘</SocialLink>
            <SocialLink href="#" aria-label="Twitter">🐦</SocialLink>
            <SocialLink href="#" aria-label="Instagram">📷</SocialLink>
            <SocialLink href="#" aria-label="LinkedIn">💼</SocialLink>
          </SocialLinks>
        </FooterSection>

        {/* Kurumsal */}
        <FooterSection>
          <FooterTitle>Kurumsal</FooterTitle>
          <FooterLinks>
            <FooterLink to="/hakkimizda">Hakkımızda</FooterLink>
            <FooterLink to="/kariyer">Kariyer</FooterLink>
            <FooterLink to="/iletisim">İletişim</FooterLink>
            <FooterLink to="/guvenlik">Güvenlik & Gizlilik</FooterLink>
          </FooterLinks>
        </FooterSection>

        {/* Hizmetler */}
        <FooterSection>
          <FooterTitle>Hizmetler</FooterTitle>
          <FooterLinks>
            <FooterLink to="/bireysel-hizmetler">Bireysel Hizmetler</FooterLink>
            <FooterLink to="/kurumsal-hizmetler">Kurumsal Hizmetler</FooterLink>
            <FooterLink to="/dijital-bankacilik">Dijital Bankacılık</FooterLink>
            <FooterLink to="/kampanyalar">Kampanyalar</FooterLink>
          </FooterLinks>
        </FooterSection>

        {/* Destek */}
        <FooterSection>
          <FooterTitle>Destek</FooterTitle>
          <FooterLinks>
            <FooterLink to="/sss">Sık Sorulan Sorular</FooterLink>
            <FooterLink to="/iletisim">İletişim & Destek</FooterLink>
            <FooterLink to="/giris">Giriş Yap</FooterLink>
          </FooterLinks>
          <ContactInfo>
            <ContactItem>📞 444 0 123</ContactItem>
            <ContactItem>📧 destek@trustbank.com</ContactItem>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      {/* Alt Bilgi */}
      <FooterBottom>
        <Copyright>© 2024 TrustBank. Tüm hakları saklıdır.</Copyright>
        <Developer>Developed by Esra Derici</Developer>
      </FooterBottom>
    </FooterCard>
  )
}

const FooterCard = styled.footer`
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    color: white;
    padding: 60px 0 0;
    margin-top: 60px;
`

const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 30px;
    }
`

const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
`

const Logo = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    margin-bottom: 20px;
    transition: transform 0.3s ease;
    
    &:hover {
        transform: translateY(-2px);
    }
`

const LogoIcon = styled.span`
    font-size: 2rem;
`

const LogoText = styled.span`
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    background: linear-gradient(45deg, #ffffff, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`

const FooterDescription = styled.p`
    font-size: 0.9rem;
    color: #cbd5e1;
    line-height: 1.6;
    margin-bottom: 20px;
`

const SocialLinks = styled.div`
    display: flex;
    gap: 15px;
`

const SocialLink = styled.a`
    font-size: 1.5rem;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-3px) scale(1.1);
    }
`

const FooterTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 10px;
    
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 40px;
        height: 2px;
        background: linear-gradient(90deg, #3b82f6 0%, transparent 100%);
    }
`

const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const FooterLink = styled(Link)`
    color: #cbd5e1;
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    
    &:hover {
        color: #3b82f6;
        padding-left: 5px;
    }
`

const ContactInfo = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const ContactItem = styled.div`
    font-size: 0.9rem;
    color: #cbd5e1;
`

const FooterBottom = styled.div`
    border-top: 1px solid rgba(203, 213, 225, 0.2);
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }
`

const Copyright = styled.p`
    font-size: 0.85rem;
    color: #cbd5e1;
    margin: 0;
`

const Developer = styled.p`
    font-size: 0.85rem;
    color: #cbd5e1;
    margin: 0;
`

export default Footer
