import React from 'react'
import './styles/GuvenlikGizlilik.css'

const GuvenlikGizlilik = () => {
  return (
    <div className="guvenlik-gizlilik">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Güvenlik ve Gizlilik</h1>
            <p className="hero-subtitle">
              TrustBank olarak, müşterilerimizin güvenliği ve gizliliği 
              bizim için en önemli önceliktir.
            </p>
          </div>
        </div>
      </section>

      {/* Güvenlik Önlemleri */}
      <section className="guvenlik-onlemleri">
        <div className="container">
          <h2 className="section-title">Güvenlik Önlemlerimiz</h2>
          <div className="guvenlik-grid">
            <div className="guvenlik-card">
              <div className="guvenlik-icon">🔒</div>
              <h3>SSL Şifreleme</h3>
              <p>256-bit SSL şifreleme ile tüm verileriniz korunur</p>
              <ul className="guvenlik-features">
                <li>End-to-end şifreleme</li>
                <li>Güvenli veri iletimi</li>
                <li>PCI DSS uyumluluğu</li>
                <li>Düzenli güvenlik testleri</li>
              </ul>
            </div>

            <div className="guvenlik-card">
              <div className="guvenlik-icon">🔐</div>
              <h3>İki Faktörlü Doğrulama</h3>
              <p>Hesabınıza ekstra güvenlik katmanı ekleyin</p>
              <ul className="guvenlik-features">
                <li>SMS doğrulama</li>
                <li>E-posta doğrulama</li>
                <li>Uygulama tabanlı 2FA</li>
                <li>Biyometrik doğrulama</li>
              </ul>
            </div>

            <div className="guvenlik-card">
              <div className="guvenlik-icon">🛡️</div>
              <h3>Fraud Koruması</h3>
              <p>Gelişmiş AI teknolojisi ile dolandırıcılık koruması</p>
              <ul className="guvenlik-features">
                <li>Gerçek zamanlı izleme</li>
                <li>Anormal işlem tespiti</li>
                <li>Otomatik blokaj sistemi</li>
                <li>7/24 güvenlik ekibi</li>
              </ul>
            </div>

            <div className="guvenlik-card">
              <div className="guvenlik-icon">🔍</div>
              <h3>Güvenlik Denetimi</h3>
              <p>Düzenli güvenlik denetimleri ve testler</p>
              <ul className="guvenlik-features">
                <li>Penetrasyon testleri</li>
                <li>Güvenlik açığı taraması</li>
                <li>Bağımsız denetimler</li>
                <li>Sürekli güncellemeler</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Veri Koruması */}
      <section className="veri-korumasi">
        <div className="container">
          <h2 className="section-title">Veri Koruması ve Gizlilik</h2>
          <div className="veri-content">
            <div className="veri-text">
              <h3>Kişisel Verilerinizin Korunması</h3>
              <p>
                TrustBank olarak, müşterilerimizin kişisel verilerinin korunması konusunda 
                en yüksek standartları uyguluyoruz. KVKK ve GDPR uyumlu veri işleme 
                politikalarımızla bilgileriniz güvende.
              </p>
              
              <div className="veri-principles">
                <div className="principle">
                  <div className="principle-icon">📋</div>
                  <div className="principle-text">
                    <h4>Veri Minimizasyonu</h4>
                    <p>Yalnızca gerekli verileri topluyoruz</p>
                  </div>
                </div>
                
                <div className="principle">
                  <div className="principle-icon">🎯</div>
                  <div className="principle-text">
                    <h4>Amaç Sınırlaması</h4>
                    <p>Verilerinizi belirtilen amaçlar için kullanıyoruz</p>
                  </div>
                </div>
                
                <div className="principle">
                  <div className="principle-icon">⏰</div>
                  <div className="principle-text">
                    <h4>Saklama Sınırlaması</h4>
                    <p>Verilerinizi yasal sürelerde saklıyoruz</p>
                  </div>
                </div>
                
                <div className="principle">
                  <div className="principle-icon">🔒</div>
                  <div className="principle-text">
                    <h4>Güvenli İşleme</h4>
                    <p>En yüksek güvenlik standartlarını uyguluyoruz</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="veri-rights">
              <h3>Veri Sahibi Haklarınız</h3>
              <div className="rights-list">
                <div className="right-item">
                  <div className="right-icon">👁️</div>
                  <span>Verilerinizi görme hakkı</span>
                </div>
                <div className="right-item">
                  <div className="right-icon">✏️</div>
                  <span>Yanlış verileri düzeltme hakkı</span>
                </div>
                <div className="right-item">
                  <div className="right-icon">🗑️</div>
                  <span>Verilerinizi silme hakkı</span>
                </div>
                <div className="right-item">
                  <div className="right-icon">📤</div>
                  <span>Verilerinizi taşıma hakkı</span>
                </div>
                <div className="right-item">
                  <div className="right-icon">🚫</div>
                  <span>İşlemeye itiraz etme hakkı</span>
                </div>
                <div className="right-item">
                  <div className="right-icon">⚖️</div>
                  <span>Şikayet hakkı</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Güvenlik İpuçları */}
      <section className="guvenlik-ipuclari">
        <div className="container">
          <h2 className="section-title">Güvenlik İpuçları</h2>
          <div className="ipucu-grid">
            <div className="ipucu-card">
              <div className="ipucu-icon">🔑</div>
              <h3>Güçlü Şifreler</h3>
              <ul>
                <li>En az 8 karakter kullanın</li>
                <li>Büyük-küçük harf karışımı</li>
                <li>Sayı ve özel karakter ekleyin</li>
                <li>Düzenli olarak değiştirin</li>
              </ul>
            </div>

            <div className="ipucu-card">
              <div className="ipucu-icon">📱</div>
              <h3>Güvenli Cihazlar</h3>
              <ul>
                <li>Güncel antivirüs yazılımı</li>
                <li>Güvenli internet bağlantısı</li>
                <li>Oturumu kapatmayı unutmayın</li>
                <li>Şüpheli e-postaları açmayın</li>
              </ul>
            </div>

            <div className="ipucu-card">
              <div className="ipucu-icon">💳</div>
              <h3>Kart Güvenliği</h3>
              <ul>
                <li>Kart bilgilerinizi paylaşmayın</li>
                <li>CVV kodunu koruyun</li>
                <li>Düzenli hesap kontrolü yapın</li>
                <li>Şüpheli işlemleri bildirin</li>
              </ul>
            </div>

            <div className="ipucu-card">
              <div className="ipucu-icon">🌐</div>
              <h3>Online Güvenlik</h3>
              <ul>
                <li>Resmi web sitesini kullanın</li>
                <li>HTTPS bağlantısını kontrol edin</li>
                <li>Phishing saldırılarına dikkat</li>
                <li>Güvenilir cihazlardan giriş yapın</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sertifikalar */}
      <section className="sertifikalar">
        <div className="container">
          <h2 className="section-title">Sertifikalar ve Onaylar</h2>
          <div className="sertifika-grid">
            <div className="sertifika-card">
              <div className="sertifika-icon">🏆</div>
              <h3>ISO 27001</h3>
              <p>Bilgi Güvenliği Yönetim Sistemi</p>
            </div>

            <div className="sertifika-card">
              <div className="sertifika-icon">🛡️</div>
              <h3>PCI DSS</h3>
              <p>Ödeme Kartı Veri Güvenliği Standardı</p>
            </div>

            <div className="sertifika-card">
              <div className="sertifika-icon">🔐</div>
              <h3>ISO 22301</h3>
              <p>İş Sürekliliği Yönetim Sistemi</p>
            </div>

            <div className="sertifika-card">
              <div className="sertifika-icon">⚖️</div>
              <h3>KVKK Uyumlu</h3>
              <p>Kişisel Verilerin Korunması Kanunu</p>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim */}
      <section className="iletisim-guvenlik">
        <div className="container">
          <div className="iletisim-content">
            <div className="iletisim-text">
              <h2>Güvenlik Konularında İletişim</h2>
              <p>
                Güvenlik ile ilgili herhangi bir endişeniz veya şüpheli bir durum 
                fark ettiyseniz, hemen bizimle iletişime geçin.
              </p>
              
              <div className="iletisim-methods">
                <div className="method">
                  <div className="method-icon">📞</div>
                  <div className="method-info">
                    <h4>7/24 Güvenlik Hattı</h4>
                    <p>0850 123 45 67</p>
                  </div>
                </div>
                
                <div className="method">
                  <div className="method-icon">📧</div>
                  <div className="method-info">
                    <h4>E-posta</h4>
                    <p>guvenlik@trustbank.com</p>
                  </div>
                </div>
                
                <div className="method">
                  <div className="method-icon">💬</div>
                  <div className="method-info">
                    <h4>Canlı Destek</h4>
                    <p>7/24 online destek</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="acil-durum">
              <div className="acil-card">
                <div className="acil-icon">🚨</div>
                <h3>Acil Durum</h3>
                <p>Kartınız çalındıysa veya şüpheli işlem fark ettiyseniz:</p>
                <button className="acil-btn">Hemen Bildir</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GuvenlikGizlilik
