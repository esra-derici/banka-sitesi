import React from 'react'
import './styles/Anasayfa.css'

const Anasayfa = () => {
  return (
    <div className="anasayfa">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              TrustBank ile Güvenilir Bankacılık
            </h1>
            <p className="hero-subtitle">
              Finansal hedeflerinize ulaşmanız için yanınızdayız. 
              Modern teknoloji ve güvenilir hizmet anlayışımızla.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Hemen Başla</button>
              <button className="btn-secondary">Hizmetlerimizi Keşfet</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-card">
              <div className="card-header">
                <div className="card-chip"></div>
                <div className="card-logo">TRUSTBANK</div>
              </div>
              <div className="card-number">**** **** **** 1234</div>
              <div className="card-footer">
                <div className="card-holder">AHMET YILMAZ</div>
                <div className="card-expiry">12/28</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="quick-access">
        <div className="container">
          <h2 className="section-title">Hızlı Erişim</h2>
          <div className="quick-access-grid">
            <div className="quick-access-card">
              <div className="card-icon">🏦</div>
              <h3>Internet Bankacılığı</h3>
              <p>7/24 güvenli işlemlerinizi gerçekleştirin</p>
              <button className="card-btn">Giriş Yap</button>
            </div>
            <div className="quick-access-card">
              <div className="card-icon">📱</div>
              <h3>Mobil Uygulama</h3>
              <p>Her yerden kolayca bankacılık işlemleri</p>
              <button className="card-btn">İndir</button>
            </div>
            <div className="quick-access-card">
              <div className="card-icon">🏧</div>
              <h3>ATM ve Şubeler</h3>
              <p>Yakınınızdaki ATM ve şubeleri bulun</p>
              <button className="card-btn">Konum Bul</button>
            </div>
            <div className="quick-access-card">
              <div className="card-icon">💳</div>
              <h3>Kredi Kartı</h3>
              <p>Avantajlı kredi kartı seçenekleri</p>
              <button className="card-btn">Başvur</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Hizmetlerimiz</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">👤</div>
              <h3>Bireysel Hizmetler</h3>
              <ul>
                <li>Hesap Açma</li>
                <li>Kredi Başvurusu</li>
                <li>Yatırım Danışmanlığı</li>
                <li>Sigorta Ürünleri</li>
              </ul>
              <button className="service-btn">Detaylar</button>
            </div>
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Kurumsal Hizmetler</h3>
              <ul>
                <li>Kurumsal Krediler</li>
                <li>Ödeme Çözümleri</li>
                <li>Dış Ticaret</li>
                <li>Nakit Yönetimi</li>
              </ul>
              <button className="service-btn">Detaylar</button>
            </div>
            <div className="service-card">
              <div className="service-icon">🔒</div>
              <h3>Güvenlik</h3>
              <ul>
                <li>2FA Doğrulama</li>
                <li>Fraud Koruması</li>
                <li>Güvenli Ödeme</li>
                <li>Veri Koruması</li>
              </ul>
              <button className="service-btn">Detaylar</button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-content">
            <div className="trust-text">
              <h2>TrustBank - Güvenilir Bankacılık</h2>
              <p>
                50 yıllık deneyimimiz ve modern teknoloji altyapımızla 
                müşterilerimize en güvenilir bankacılık hizmetlerini sunuyoruz.
              </p>
              <div className="trust-stats">
                <div className="stat">
                  <div className="stat-number">2M+</div>
                  <div className="stat-label">Aktif Müşteri</div>
                </div>
                <div className="stat">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Şube</div>
                </div>
                <div className="stat">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Müşteri Desteği</div>
                </div>
              </div>
            </div>
            <div className="trust-badges">
              <div className="badge">🔒 SSL Güvenlik</div>
              <div className="badge">🏆 En İyi Banka</div>
              <div className="badge">⭐ 4.8/5 Müşteri Puanı</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Hemen Hesap Açın</h2>
            <p>Dijital bankacılık deneyimini keşfedin</p>
            <div className="cta-buttons">
              <button className="btn-primary large">Online Başvuru</button>
              <button className="btn-outline large">İletişime Geç</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Anasayfa
