import React, { useState } from 'react'
import './styles/IletisimDestek.css'

const IletisimDestek = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    category: 'genel'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        category: 'genel'
      })
    }, 2000)
  }

  return (
    <div className="iletisim-destek">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">İletişim ve Destek</h1>
            <p className="hero-subtitle">
              TrustBank müşteri hizmetleri ekibimiz 7/24 yanınızda. 
              Her türlü sorunuz için bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </section>

      {/* İletişim Yöntemleri */}
      <section className="iletisim-yontemleri">
        <div className="container">
          <h2 className="section-title">İletişim Yöntemlerimiz</h2>
          <div className="yontem-grid">
            <div className="yontem-card">
              <div className="yontem-icon">📞</div>
              <h3>Telefon Desteği</h3>
              <p>7/24 müşteri hizmetleri hattımız</p>
              <div className="yontem-details">
                <div className="detail-item">
                  <strong>Genel Bilgi:</strong> 0850 123 45 67
                </div>
                <div className="detail-item">
                  <strong>Kredi Kartı:</strong> 0850 123 45 68
                </div>
                <div className="detail-item">
                  <strong>Kurumsal:</strong> 0850 123 45 69
                </div>
              </div>
              <button className="yontem-btn">Ara</button>
            </div>

            <div className="yontem-card">
              <div className="yontem-icon">💬</div>
              <h3>Canlı Destek</h3>
              <p>Anında online destek hizmeti</p>
              <div className="yontem-details">
                <div className="detail-item">
                  <strong>Çalışma Saatleri:</strong> 7/24
                </div>
                <div className="detail-item">
                  <strong>Ortalama Yanıt:</strong> 2 dakika
                </div>
                <div className="detail-item">
                  <strong>Dil Desteği:</strong> TR, EN
                </div>
              </div>
              <button className="yontem-btn">Sohbet Başlat</button>
            </div>

            <div className="yontem-card">
              <div className="yontem-icon">📧</div>
              <h3>E-posta Desteği</h3>
              <p>Detaylı sorularınız için e-posta</p>
              <div className="yontem-details">
                <div className="detail-item">
                  <strong>Genel:</strong> info@trustbank.com
                </div>
                <div className="detail-item">
                  <strong>Teknik:</strong> destek@trustbank.com
                </div>
                <div className="detail-item">
                  <strong>Kurumsal:</strong> kurumsal@trustbank.com
                </div>
              </div>
              <button className="yontem-btn">E-posta Gönder</button>
            </div>

            <div className="yontem-card">
              <div className="yontem-icon">🏦</div>
              <h3>Şube Ziyareti</h3>
              <p>Yakınınızdaki şubemizi ziyaret edin</p>
              <div className="yontem-details">
                <div className="detail-item">
                  <strong>Şube Sayısı:</strong> 500+
                </div>
                <div className="detail-item">
                  <strong>Çalışma Saatleri:</strong> 09:00-17:00
                </div>
                <div className="detail-item">
                  <strong>Randevu:</strong> Online randevu alın
                </div>
              </div>
              <button className="yontem-btn">Şube Bul</button>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim Formu */}
      <section className="iletisim-formu">
        <div className="container">
          <div className="form-content">
            <div className="form-text">
              <h2>Bizimle İletişime Geçin</h2>
              <p>
                Sorularınız, önerileriniz veya şikayetleriniz için aşağıdaki formu doldurun. 
                En kısa sürede size dönüş yapacağız.
              </p>
              
              <div className="form-features">
                <div className="feature">
                  <div className="feature-icon">⚡</div>
                  <span>24 saat içinde yanıt</span>
                </div>
                <div className="feature">
                  <div className="feature-icon">🔒</div>
                  <span>Güvenli iletişim</span>
                </div>
                <div className="feature">
                  <div className="feature-icon">📱</div>
                  <span>Mobil uyumlu</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Ad Soyad *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Adınızı ve soyadınızı girin"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">E-posta *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="E-posta adresinizi girin"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Telefon numaranızı girin"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="category">Konu *</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="form-select"
                  >
                    <option value="genel">Genel Bilgi</option>
                    <option value="hesap">Hesap İşlemleri</option>
                    <option value="kredi">Kredi İşlemleri</option>
                    <option value="kart">Kart İşlemleri</option>
                    <option value="teknoloji">Teknik Destek</option>
                    <option value="sikayet">Şikayet</option>
                    <option value="oneri">Öneri</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Başlık *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Mesajınızın başlığını girin"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesaj *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="form-textarea"
                  placeholder="Mesajınızı detaylı olarak yazın..."
                />
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Gönderiliyor...
                  </>
                ) : (
                  'Mesaj Gönder'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Şube ve ATM Lokasyonları */}
      <section className="lokasyonlar">
        <div className="container">
          <h2 className="section-title">Şube ve ATM Lokasyonları</h2>
          <div className="lokasyon-content">
            <div className="lokasyon-text">
              <h3>Yakınınızdaki Şubeleri Bulun</h3>
              <p>
                TrustBank'ın 500'den fazla şubesi ve binlerce ATM'i ile 
                size en yakın hizmet noktalarını keşfedin.
              </p>
              
              <div className="lokasyon-stats">
                <div className="stat">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Şube</div>
                </div>
                <div className="stat">
                  <div className="stat-number">3K+</div>
                  <div className="stat-label">ATM</div>
                </div>
                <div className="stat">
                  <div className="stat-number">81</div>
                  <div className="stat-label">İl</div>
                </div>
              </div>
            </div>
            
            <div className="lokasyon-map">
              <div className="map-placeholder">
                <div className="map-icon">🗺️</div>
                <h4>Harita Görünümü</h4>
                <p>Yakınınızdaki şube ve ATM'leri görüntüleyin</p>
                <button className="map-btn">Haritayı Aç</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sık Sorulan Sorular */}
      <section className="sss">
        <div className="container">
          <h2 className="section-title">Sık Sorulan Sorular</h2>
          <div className="sss-grid">
            <div className="sss-category">
              <h3>Genel Sorular</h3>
              <div className="sss-list">
                <div className="sss-item">
                  <h4>TrustBank hesabı nasıl açarım?</h4>
                  <p>Online başvuru formunu doldurarak veya şubemizi ziyaret ederek hesap açabilirsiniz.</p>
                </div>
                <div className="sss-item">
                  <h4>İnternet bankacılığına nasıl giriş yaparım?</h4>
                  <p>TC kimlik numaranız ve şifrenizle giriş yapabilir, SMS doğrulama kullanabilirsiniz.</p>
                </div>
                <div className="sss-item">
                  <h4>Kartımı nasıl bloke ederim?</h4>
                  <p>7/24 müşteri hizmetlerimizi arayarak veya internet bankacılığından kartınızı bloke edebilirsiniz.</p>
                </div>
              </div>
            </div>

            <div className="sss-category">
              <h3>Teknik Destek</h3>
              <div className="sss-list">
                <div className="sss-item">
                  <h4>Mobil uygulamada sorun yaşıyorum</h4>
                  <p>Uygulamayı güncelleyin veya teknik destek hattımızı arayın: 0850 123 45 70</p>
                </div>
                <div className="sss-item">
                  <h4>Şifremi unuttum, ne yapmalıyım?</h4>
                  <p>"Şifremi unuttum" linkini kullanarak yeni şifre oluşturabilirsiniz.</p>
                </div>
                <div className="sss-item">
                  <h4>İşlem geçmişimi nasıl görüntülerim?</h4>
                  <p>İnternet bankacılığı veya mobil uygulamadan "Hesap Hareketleri" bölümünden görüntüleyebilirsiniz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sosyal Medya ve Diğer İletişim */}
      <section className="sosyal-medya">
        <div className="container">
          <h2 className="section-title">Sosyal Medyada Takip Edin</h2>
          <div className="sosyal-grid">
            <div className="sosyal-card">
              <div className="sosyal-icon">📘</div>
              <h3>Facebook</h3>
              <p>@TrustBankOfficial</p>
              <button className="sosyal-btn">Takip Et</button>
            </div>
            
            <div className="sosyal-card">
              <div className="sosyal-icon">🐦</div>
              <h3>Twitter</h3>
              <p>@TrustBank</p>
              <button className="sosyal-btn">Takip Et</button>
            </div>
            
            <div className="sosyal-card">
              <div className="sosyal-icon">📷</div>
              <h3>Instagram</h3>
              <p>@trustbank</p>
              <button className="sosyal-btn">Takip Et</button>
            </div>
            
            <div className="sosyal-card">
              <div className="sosyal-icon">💼</div>
              <h3>LinkedIn</h3>
              <p>TrustBank</p>
              <button className="sosyal-btn">Takip Et</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IletisimDestek
