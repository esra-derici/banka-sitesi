import React, { useState } from 'react'
import './styles/InternetMobilBankacılık.css'

const InternetMobilBankacılık = () => {
  const [activeTab, setActiveTab] = useState('internet')

  return (
    <div className="internet-mobil-bankacilik">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Dijital Bankacılık</h1>
            <p className="hero-subtitle">
              TrustBank'ın güçlü internet ve mobil bankacılık hizmetleri ile 
              bankacılık işlemlerinizi her yerden, her zaman güvenle yapın.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Internet Bankacılığı</button>
              <button className="btn-secondary">Mobil Uygulama</button>
            </div>
          </div>
          <div className="hero-devices">
            <div className="device desktop">
              <div className="device-screen">
                <div className="screen-content">
                  <div className="browser-header">
                    <div className="browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="browser-url">trustbank.com</div>
                  </div>
                  <div className="browser-body">
                    <div className="bank-interface">
                      <div className="interface-header">TrustBank Internet Bankacılığı</div>
                      <div className="interface-menu">
                        <div className="menu-item active">Hesap Özeti</div>
                        <div className="menu-item">Para Transferi</div>
                        <div className="menu-item">Faturalar</div>
                        <div className="menu-item">Kartlar</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="device mobile">
              <div className="device-screen">
                <div className="mobile-content">
                  <div className="mobile-header">TrustBank</div>
                  <div className="mobile-menu">
                    <div className="mobile-item">
                      <div className="mobile-icon">💰</div>
                      <span>Hesap</span>
                    </div>
                    <div className="mobile-item">
                      <div className="mobile-icon">💳</div>
                      <span>Kartlar</span>
                    </div>
                    <div className="mobile-item">
                      <div className="mobile-icon">📱</div>
                      <span>Transfer</span>
                    </div>
                    <div className="mobile-item">
                      <div className="mobile-icon">📄</div>
                      <span>Faturalar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="tab-navigation">
        <div className="container">
          <div className="tab-buttons">
            <button 
              className={`tab-btn ${activeTab === 'internet' ? 'active' : ''}`}
              onClick={() => setActiveTab('internet')}
            >
              <div className="tab-icon">💻</div>
              Internet Bankacılığı
            </button>
            <button 
              className={`tab-btn ${activeTab === 'mobil' ? 'active' : ''}`}
              onClick={() => setActiveTab('mobil')}
            >
              <div className="tab-icon">📱</div>
              Mobil Uygulama
            </button>
          </div>
        </div>
      </section>

      {/* Internet Bankacılığı */}
      {activeTab === 'internet' && (
        <section className="internet-bankacilik">
          <div className="container">
            <h2 className="section-title">Internet Bankacılığı</h2>
            <div className="internet-content">
              <div className="internet-features">
                <div className="feature-card">
                  <div className="feature-icon">🏦</div>
                  <h3>Hesap Yönetimi</h3>
                  <ul>
                    <li>Hesap özeti görüntüleme</li>
                    <li>Hesap hareketleri</li>
                    <li>Döviz kurları</li>
                    <li>Hesap ekstreleri</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">💸</div>
                  <h3>Para Transferi</h3>
                  <ul>
                    <li>Havale/EFT işlemleri</li>
                    <li>Virman işlemleri</li>
                    <li>Döviz transferi</li>
                    <li>Toplu transfer</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">💳</div>
                      <h3>Kart İşlemleri</h3>
                  <ul>
                    <li>Kart limit ayarları</li>
                    <li>Kart harcama limitleri</li>
                    <li>Kart bloke/aktif etme</li>
                    <li>Kart ekstreleri</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">📄</div>
                  <h3>Fatura Ödeme</h3>
                  <ul>
                    <li>Elektrik, su, doğalgaz</li>
                    <li>Telefon, internet</li>
                    <li>Kredi kartı borçları</li>
                    <li>Vergi ve harçlar</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">📊</div>
                  <h3>Yatırım</h3>
                  <ul>
                    <li>Döviz alım/satım</li>
                    <li>Altın işlemleri</li>
                    <li>Fon yatırımları</li>
                    <li>Borsa işlemleri</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">🔒</div>
                  <h3>Güvenlik</h3>
                  <ul>
                    <li>2FA doğrulama</li>
                    <li>Güvenli giriş</li>
                    <li>İşlem onayları</li>
                    <li>Güvenlik ayarları</li>
                  </ul>
                </div>
              </div>

              <div className="internet-login">
                <div className="login-card">
                  <h3>Internet Bankacılığına Giriş</h3>
                  <p>Güvenli internet bankacılığına erişim sağlayın</p>
                  <div className="login-features">
                    <div className="login-feature">
                      <div className="feature-icon">🔐</div>
                      <span>256-bit SSL şifreleme</span>
                    </div>
                    <div className="login-feature">
                      <div className="feature-icon">📱</div>
                      <span>SMS doğrulama</span>
                    </div>
                    <div className="login-feature">
                      <div className="feature-icon">⚡</div>
                      <span>Hızlı ve güvenli</span>
                    </div>
                  </div>
                  <button className="login-btn">Giriş Yap</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mobil Uygulama */}
      {activeTab === 'mobil' && (
        <section className="mobil-uygulama">
          <div className="container">
            <h2 className="section-title">Mobil Uygulama</h2>
            <div className="mobil-content">
              <div className="mobil-features">
                <div className="mobil-feature">
                  <div className="feature-icon">📱</div>
                  <h3>iOS Uygulaması</h3>
                  <p>App Store'dan indirin</p>
                  <div className="app-info">
                    <div className="app-rating">⭐ 4.8 (2.5K değerlendirme)</div>
                    <div className="app-size">Boyut: 45 MB</div>
                  </div>
                  <button className="download-btn ios">App Store'dan İndir</button>
                </div>

                <div className="mobil-feature">
                  <div className="feature-icon">🤖</div>
                  <h3>Android Uygulaması</h3>
                  <p>Google Play'den indirin</p>
                  <div className="app-info">
                    <div className="app-rating">⭐ 4.7 (3.2K değerlendirme)</div>
                    <div className="app-size">Boyut: 42 MB</div>
                  </div>
                  <button className="download-btn android">Google Play'den İndir</button>
                </div>
              </div>

              <div className="mobil-app-features">
                <h3>Mobil Uygulama Özellikleri</h3>
                <div className="app-features-grid">
                  <div className="app-feature">
                    <div className="app-feature-icon">👆</div>
                    <h4>Biyometrik Giriş</h4>
                    <p>Parmak izi ve yüz tanıma ile güvenli giriş</p>
                  </div>

                  <div className="app-feature">
                    <div className="app-feature-icon">📷</div>
                    <h4>QR Kod Ödeme</h4>
                    <p>QR kod ile hızlı ve güvenli ödeme</p>
                  </div>

                  <div className="app-feature">
                    <div className="app-feature-icon">🔔</div>
                    <h4>Anlık Bildirimler</h4>
                    <p>İşlem bildirimleri ve güvenlik uyarıları</p>
                  </div>

                  <div className="app-feature">
                    <div className="app-feature-icon">📍</div>
                    <h4>ATM/Şube Bulucu</h4>
                    <p>Yakınınızdaki ATM ve şubeleri bulun</p>
                  </div>

                  <div className="app-feature">
                    <div className="app-feature-icon">💬</div>
                    <h4>Canlı Destek</h4>
                    <p>Uygulama içi canlı destek hizmeti</p>
                  </div>

                  <div className="app-feature">
                    <div className="app-feature-icon">🎯</div>
                    <h4>Kişiselleştirme</h4>
                    <p>Kendi ihtiyaçlarınıza göre özelleştirin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Güvenlik Özellikleri */}
      <section className="guvenlik-ozellikleri">
        <div className="container">
          <h2 className="section-title">Güvenlik Özellikleri</h2>
          <div className="guvenlik-grid">
            <div className="guvenlik-card">
              <div className="guvenlik-icon">🔐</div>
              <h3>256-bit SSL Şifreleme</h3>
              <p>Tüm verileriniz banka seviyesinde şifreleme ile korunur</p>
            </div>

            <div className="guvenlik-card">
              <div className="guvenlik-icon">📱</div>
              <h3>2FA Doğrulama</h3>
              <p>İki faktörlü doğrulama ile ekstra güvenlik katmanı</p>
            </div>

            <div className="guvenlik-card">
              <div className="guvenlik-icon">👆</div>
              <h3>Biyometrik Güvenlik</h3>
              <p>Parmak izi ve yüz tanıma ile güvenli erişim</p>
            </div>

            <div className="guvenlik-card">
              <div className="guvenlik-icon">🛡️</div>
              <h3>Fraud Koruması</h3>
              <p>AI destekli dolandırıcılık koruma sistemi</p>
            </div>

            <div className="guvenlik-card">
              <div className="guvenlik-icon">🔔</div>
              <h3>Anlık Bildirimler</h3>
              <p>Şüpheli işlemler için anında uyarı sistemi</p>
            </div>

            <div className="guvenlik-card">
              <div className="guvenlik-icon">🔒</div>
              <h3>Oturum Güvenliği</h3>
              <p>Otomatik oturum kapatma ve güvenli çıkış</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kullanım Kılavuzu */}
      <section className="kullanim-kilavuzu">
        <div className="container">
          <h2 className="section-title">Kullanım Kılavuzu</h2>
          <div className="kilavuz-content">
            <div className="kilavuz-tabs">
              <div className="kilavuz-tab active">
                <div className="tab-icon">💻</div>
                <span>Internet Bankacılığı</span>
              </div>
              <div className="kilavuz-tab">
                <div className="tab-icon">📱</div>
                <span>Mobil Uygulama</span>
              </div>
            </div>

            <div className="kilavuz-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Giriş Yapın</h3>
                  <p>TC kimlik numaranız ve şifrenizle güvenli giriş yapın</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Doğrulama</h3>
                  <p>SMS ile gelen doğrulama kodunu girin</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>İşlemlerinizi Yapın</h3>
                  <p>Hesap işlemleri, transfer, fatura ödeme ve daha fazlası</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Güvenli Çıkış</h3>
                  <p>İşlemlerinizi tamamladıktan sonra güvenli çıkış yapın</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="sss">
        <div className="container">
          <h2 className="section-title">Sık Sorulan Sorular</h2>
          <div className="sss-grid">
            <div className="sss-item">
              <h3>Internet bankacılığına nasıl giriş yaparım?</h3>
              <p>TC kimlik numaranız ve şifrenizle giriş yapabilir, SMS doğrulama kullanabilirsiniz.</p>
            </div>

            <div className="sss-item">
              <h3>Mobil uygulamayı nasıl indiririm?</h3>
              <p>App Store veya Google Play'den "TrustBank" uygulamasını arayıp indirebilirsiniz.</p>
            </div>

            <div className="sss-item">
              <h3>Şifremi unuttum, ne yapmalıyım?</h3>
              <p>"Şifremi unuttum" linkini kullanarak yeni şifre oluşturabilirsiniz.</p>
            </div>

            <div className="sss-item">
              <h3>İşlem limitlerim nedir?</h3>
              <p>İşlem limitlerinizi internet bankacılığından "Güvenlik Ayarları" bölümünden görüntüleyebilirsiniz.</p>
            </div>

            <div className="sss-item">
              <h3>Mobil uygulama güvenli mi?</h3>
              <p>Evet, uygulamamız 256-bit SSL şifreleme ve biyometrik güvenlik ile korunmaktadır.</p>
            </div>

            <div className="sss-item">
              <h3>7/24 erişim sağlayabilir miyim?</h3>
              <p>Evet, internet bankacılığı ve mobil uygulama 7/24 kullanılabilir durumdadır.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Dijital Bankacılığa Başlayın</h2>
            <p>TrustBank'ın güçlü dijital hizmetlerinden faydalanmaya başlayın</p>
            <div className="cta-buttons">
              <button className="btn-primary large">Internet Bankacılığı</button>
              <button className="btn-outline large">Mobil Uygulama</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InternetMobilBankacılık
