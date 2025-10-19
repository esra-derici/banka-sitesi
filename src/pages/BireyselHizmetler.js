import React from 'react'
import './styles/BireyselHizmetler.css'

const BireyselHizmetler = () => {
  return (
    <div className="bireysel-hizmetler">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Bireysel Hizmetlerimiz</h1>
            <p className="hero-subtitle">
              TrustBank olarak, kişisel finansal ihtiyaçlarınız için 
              kapsamlı ve güvenilir çözümler sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Hesap Türleri */}
      <section className="hesap-turleri">
        <div className="container">
          <h2 className="section-title">Hesap Türleri</h2>
          <div className="hesap-grid">
            <div className="hesap-card">
              <div className="hesap-icon">💰</div>
              <h3>Vadesiz TL Hesap</h3>
              <p>Günlük işlemleriniz için ideal, faizsiz hesap</p>
              <ul className="hesap-features">
                <li>Ücretsiz hesap açma</li>
                <li>7/24 internet bankacılığı</li>
                <li>Ücretsiz ATM işlemleri</li>
                <li>Mobil uygulama erişimi</li>
              </ul>
              <button className="hesap-btn">Hesap Aç</button>
            </div>

            <div className="hesap-card featured">
              <div className="hesap-icon">📈</div>
              <h3>Vadeli TL Hesap</h3>
              <p>Birikimlerinizi değerlendirin, yüksek faiz kazanın</p>
              <ul className="hesap-features">
                <li>%15'e kadar faiz oranı</li>
                <li>1-36 ay vade seçenekleri</li>
                <li>Erken vade sonlandırma</li>
                <li>Otomatik yenileme</li>
              </ul>
              <button className="hesap-btn">Detaylar</button>
            </div>

            <div className="hesap-card">
              <div className="hesap-icon">🌍</div>
              <h3>Döviz Hesabı</h3>
              <p>USD, EUR ve diğer dövizlerde hesap açın</p>
              <ul className="hesap-features">
                <li>Çoklu döviz desteği</li>
                <li>Düşük döviz alım-satım komisyonu</li>
                <li>Online döviz transferi</li>
                <li>Döviz kuru bildirimleri</li>
              </ul>
              <button className="hesap-btn">Hesap Aç</button>
            </div>
          </div>
        </div>
      </section>

      {/* Kredi Ürünleri */}
      <section className="kredi-urunleri">
        <div className="container">
          <h2 className="section-title">Kredi Ürünleri</h2>
          <div className="kredi-grid">
            <div className="kredi-card">
              <div className="kredi-icon">🏠</div>
              <h3>Konut Kredisi</h3>
              <div className="kredi-rate">%1.89</div>
              <p>Hayalinizdeki evi satın alın</p>
              <ul className="kredi-features">
                <li>5 milyon TL'ye kadar kredi</li>
                <li>240 aya kadar vade</li>
                <li>Düşük faiz oranları</li>
                <li>Hızlı onay süreci</li>
              </ul>
              <button className="kredi-btn">Başvur</button>
            </div>

            <div className="kredi-card">
              <div className="kredi-icon">🚗</div>
              <h3>Taşıt Kredisi</h3>
              <div className="kredi-rate">%2.19</div>
              <p>Yeni veya ikinci el araç alın</p>
              <ul className="kredi-features">
                <li>2 milyon TL'ye kadar kredi</li>
                <li>60 aya kadar vade</li>
                <li>Ön ödeme indirimi</li>
                <li>Sigorta desteği</li>
              </ul>
              <button className="kredi-btn">Başvur</button>
            </div>

            <div className="kredi-card">
              <div className="kredi-icon">💳</div>
              <h3>İhtiyaç Kredisi</h3>
              <div className="kredi-rate">%2.49</div>
              <p>Kişisel ihtiyaçlarınız için</p>
              <ul className="kredi-features">
                <li>500 bin TL'ye kadar kredi</li>
                <li>36 aya kadar vade</li>
                <li>Anında onay</li>
                <li>Esnek ödeme seçenekleri</li>
              </ul>
              <button className="kredi-btn">Başvur</button>
            </div>
          </div>
        </div>
      </section>

      {/* Yatırım Ürünleri */}
      <section className="yatirim-urunleri">
        <div className="container">
          <h2 className="section-title">Yatırım Ürünleri</h2>
          <div className="yatirim-grid">
            <div className="yatirim-card">
              <div className="yatirim-icon">📊</div>
              <h3>Borsa Yatırımı</h3>
              <p>Profesyonel yatırım danışmanlığı</p>
              <ul className="yatirim-features">
                <li>Online işlem platformu</li>
                <li>Uzman analist desteği</li>
                <li>Düşük komisyon oranları</li>
                <li>Risk yönetimi</li>
              </ul>
              <button className="yatirim-btn">Başla</button>
            </div>

            <div className="yatirim-card">
              <div className="yatirim-icon">🏦</div>
              <h3>Altın Yatırımı</h3>
              <p>Fiziki ve dijital altın seçenekleri</p>
              <ul className="yatirim-features">
                <li>Fiziki altın kasası</li>
                <li>Dijital altın hesabı</li>
                <li>Günlük fiyat takibi</li>
                <li>Güvenli saklama</li>
              </ul>
              <button className="yatirim-btn">Başla</button>
            </div>

            <div className="yatirim-card">
              <div className="yatirim-icon">💎</div>
              <h3>Döviz Yatırımı</h3>
              <p>Döviz kurlarından faydalanın</p>
              <ul className="yatirim-features">
                <li>Çoklu döviz desteği</li>
                <li>Anlık kur bildirimleri</li>
                <li>Düşük işlem maliyeti</li>
                <li>Uzman tavsiyeleri</li>
              </ul>
              <button className="yatirim-btn">Başla</button>
            </div>
          </div>
        </div>
      </section>

      {/* Dijital Hizmetler */}
      <section className="dijital-hizmetler">
        <div className="container">
          <h2 className="section-title">Dijital Bankacılık</h2>
          <div className="dijital-grid">
            <div className="dijital-card">
              <div className="dijital-icon">💻</div>
              <h3>Internet Bankacılığı</h3>
              <p>7/24 güvenli işlemlerinizi gerçekleştirin</p>
              <button className="dijital-btn">Giriş Yap</button>
            </div>

            <div className="dijital-card">
              <div className="dijital-icon">📱</div>
              <h3>Mobil Uygulama</h3>
              <p>Her yerden kolayca bankacılık işlemleri</p>
              <button className="dijital-btn">İndir</button>
            </div>

            <div className="dijital-card">
              <div className="dijital-icon">💳</div>
              <h3>Dijital Kart</h3>
              <p>Anında sanal kart oluşturun</p>
              <button className="dijital-btn">Oluştur</button>
            </div>

            <div className="dijital-card">
              <div className="dijital-icon">🔔</div>
              <h3>Bildirimler</h3>
              <p>Anlık işlem bildirimleri alın</p>
              <button className="dijital-btn">Aktif Et</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Hemen Başlayın</h2>
            <p>TrustBank'ın bireysel hizmetlerinden faydalanmaya başlayın</p>
            <div className="cta-buttons">
              <button className="btn-primary large">Online Başvuru</button>
              <button className="btn-outline large">Şube Randevusu</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BireyselHizmetler

