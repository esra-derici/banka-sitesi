import React from 'react'
import './styles/Hakkımızda.css'

const Hakkımızda = () => {
  return (
    <div className="hakkimizda">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Hakkımızda</h1>
            <p className="hero-subtitle">
              TrustBank olarak 50 yıldır güvenilir bankacılık hizmetleri sunuyor, 
              müşterilerimizin finansal hedeflerine ulaşmalarına yardımcı oluyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Şirket Hikayesi */}
      <section className="sirket-hikayesi">
        <div className="container">
          <div className="hikaye-content">
            <div className="hikaye-text">
              <h2>TrustBank Hikayesi</h2>
              <p className="hikaye-intro">
                1974 yılında kurulan TrustBank, Türkiye'nin önde gelen finansal kurumlarından 
                biridir. Müşteri odaklı yaklaşımımız ve yenilikçi çözümlerimizle, 
                bankacılık sektöründe güvenilirliğin simgesi haline geldik.
              </p>
              
              <div className="hikaye-timeline">
                <div className="timeline-item">
                  <div className="timeline-year">1974</div>
                  <div className="timeline-content">
                    <h3>Kuruluş</h3>
                    <p>TrustBank, İstanbul'da küçük bir yerel banka olarak kuruldu.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">1990</div>
                  <div className="timeline-content">
                    <h3>Genişleme</h3>
                    <p>Türkiye genelinde şube ağını genişletti ve büyük banka statüsüne yükseldi.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">2000</div>
                  <div className="timeline-content">
                    <h3>Dijitalleşme</h3>
                    <p>İnternet bankacılığı hizmetlerini başlattı ve teknoloji yatırımlarına odaklandı.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">2010</div>
                  <div className="timeline-content">
                    <h3>Mobil Bankacılık</h3>
                    <p>Mobil uygulama ile 7/24 bankacılık hizmetlerini müşterilerine sundu.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">2024</div>
                  <div className="timeline-content">
                    <h3>Bugün</h3>
                    <p>2 milyondan fazla müşteriye hizmet veren, teknoloji odaklı modern banka.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hikaye-image">
              <div className="image-placeholder">
                <div className="placeholder-icon">🏦</div>
                <p>TrustBank Tarihçesi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misyon, Vizyon, Değerler */}
      <section className="misyon-vizyon">
        <div className="container">
          <h2 className="section-title">Misyon, Vizyon ve Değerlerimiz</h2>
          <div className="mvd-grid">
            <div className="mvd-card">
              <div className="mvd-icon">🎯</div>
              <h3>Misyonumuz</h3>
              <p>
                Müşterilerimizin finansal ihtiyaçlarını karşılamak, güvenilir bankacılık 
                hizmetleri sunmak ve toplumsal kalkınmaya katkıda bulunmak.
              </p>
            </div>
            
            <div className="mvd-card">
              <div className="mvd-icon">👁️</div>
              <h3>Vizyonumuz</h3>
              <p>
                Türkiye'nin en güvenilir ve yenilikçi bankası olmak, müşteri memnuniyetinde 
                sektör lideri konumunu sürdürmek.
              </p>
            </div>
            
            <div className="mvd-card">
              <div className="mvd-icon">💎</div>
              <h3>Değerlerimiz</h3>
              <ul>
                <li>Güvenilirlik ve şeffaflık</li>
                <li>Müşteri odaklı yaklaşım</li>
                <li>Yenilikçilik ve sürekli gelişim</li>
                <li>Toplumsal sorumluluk</li>
                <li>Etik değerler</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rakamlar */}
      <section className="rakamlar">
        <div className="container">
          <h2 className="section-title">TrustBank Rakamlarla</h2>
          <div className="rakamlar-grid">
            <div className="rakam-card">
              <div className="rakam-number">2M+</div>
              <div className="rakam-label">Aktif Müşteri</div>
            </div>
            
            <div className="rakam-card">
              <div className="rakam-number">500+</div>
              <div className="rakam-label">Şube</div>
            </div>
            
            <div className="rakam-card">
              <div className="rakam-number">50</div>
              <div className="rakam-label">Yıllık Deneyim</div>
            </div>
            
            <div className="rakam-card">
              <div className="rakam-number">₺150B</div>
              <div className="rakam-label">Toplam Varlık</div>
            </div>
            
            <div className="rakam-card">
              <div className="rakam-number">₺25B</div>
              <div className="rakam-label">Kredi Portföyü</div>
            </div>
            
            <div className="rakam-card">
              <div className="rakam-number">15K+</div>
              <div className="rakam-label">Çalışan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Yönetim Ekibi */}
      <section className="yonetim-ekibi">
        <div className="container">
          <h2 className="section-title">Yönetim Ekibimiz</h2>
          <div className="yonetim-grid">
            <div className="yonetim-card">
              <div className="yonetim-avatar">👨‍💼</div>
              <h3>Ahmet Yılmaz</h3>
              <p className="yonetim-pozisyon">Genel Müdür</p>
              <p className="yonetim-aciklama">
                25 yıllık bankacılık deneyimi ile TrustBank'ı yönetiyor.
              </p>
            </div>
            
            <div className="yonetim-card">
              <div className="yonetim-avatar">👩‍💼</div>
              <h3>Fatma Demir</h3>
              <p className="yonetim-pozisyon">İcra Kurulu Başkanı</p>
              <p className="yonetim-aciklama">
                Stratejik planlama ve operasyonel mükemmellik konularında uzman.
              </p>
            </div>
            
            <div className="yonetim-card">
              <div className="yonetim-avatar">👨‍💻</div>
              <h3>Mehmet Kaya</h3>
              <p className="yonetim-pozisyon">Teknoloji Direktörü</p>
              <p className="yonetim-aciklama">
                Dijital dönüşüm ve teknoloji inovasyonu alanında lider.
              </p>
            </div>
            
            <div className="yonetim-card">
              <div className="yonetim-avatar">👩‍💼</div>
              <h3>Ayşe Özkan</h3>
              <p className="yonetim-pozisyon">Risk Yönetimi Direktörü</p>
              <p className="yonetim-aciklama">
                Finansal risk yönetimi ve uyum konularında deneyimli.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sosyal Sorumluluk */}
      <section className="sosyal-sorumluluk">
        <div className="container">
          <h2 className="section-title">Sosyal Sorumluluk</h2>
          <div className="sosyal-content">
            <div className="sosyal-text">
              <h3>Toplumsal Katkılarımız</h3>
              <p>
                TrustBank olarak, sadece finansal hizmetler sunmakla kalmıyor, 
                toplumsal kalkınmaya ve sürdürülebilir geleceğe katkıda bulunuyoruz.
              </p>
              
              <div className="sosyal-projeler">
                <div className="proje-item">
                  <div className="proje-icon">🎓</div>
                  <div className="proje-text">
                    <h4>Eğitim Desteği</h4>
                    <p>Binlerce öğrenciye burs ve eğitim desteği sağlıyoruz.</p>
                  </div>
                </div>
                
                <div className="proje-item">
                  <div className="proje-icon">🌱</div>
                  <div className="proje-text">
                    <h4>Çevre Koruma</h4>
                    <p>Karbon nötr banka olma hedefiyle çevre projeleri yürütüyoruz.</p>
                  </div>
                </div>
                
                <div className="proje-item">
                  <div className="proje-icon">🤝</div>
                  <div className="proje-text">
                    <h4>Toplumsal Projeler</h4>
                    <p>Yerel topluluklara destek ve sosyal girişimcilik programları.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="sosyal-stats">
              <div className="stat-item">
                <div className="stat-number">₺50M</div>
                <div className="stat-label">Sosyal Yatırım</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Desteklenen Öğrenci</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Yenilenebilir Enerji</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ödüller */}
      <section className="oduller">
        <div className="container">
          <h2 className="section-title">Ödüller ve Başarılar</h2>
          <div className="odul-grid">
            <div className="odul-card">
              <div className="odul-icon">🏆</div>
              <h3>En İyi Banka 2024</h3>
              <p>Finansal Hizmetler Ödülleri</p>
            </div>
            
            <div className="odul-card">
              <div className="odul-icon">⭐</div>
              <h3>Müşteri Memnuniyeti</h3>
              <p>4.8/5 Müşteri Puanı</p>
            </div>
            
            <div className="odul-card">
              <div className="odul-icon">🔒</div>
              <h3>Güvenlik Ödülü</h3>
              <p>En Güvenli Banka 2023</p>
            </div>
            
            <div className="odul-card">
              <div className="odul-icon">💡</div>
              <h3>İnovasyon Ödülü</h3>
              <p>Dijital Bankacılık 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>TrustBank Ailesine Katılın</h2>
            <p>Güvenilir bankacılık deneyimini keşfedin</p>
            <div className="cta-buttons">
              <button className="btn-primary large">Hesap Aç</button>
              <button className="btn-outline large">İletişime Geç</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hakkımızda
