import React, { useState } from 'react'
import './styles/KurumsalHizmetler.css'

const KurumsalHizmetler = () => {
  const [activeTab, setActiveTab] = useState('krediler')
  const [selectedCategory, setSelectedCategory] = useState('tumu')

  const corporateServices = [
    {
      id: 1,
      title: "Kurumsal Krediler",
      category: "krediler",
      type: "kredi",
      icon: "🏦",
      description: "İşletmenizin büyümesi için ihtiyaç duyduğu finansmanı sağlıyoruz.",
      features: [
        "İşletme kredisi",
        "Yatırım kredisi",
        "Nakit kredisi",
        "Teminatlı krediler",
        "Teminatsız krediler"
      ],
      benefits: [
        "Rekabetçi faiz oranları",
        "Esnek geri ödeme seçenekleri",
        "Hızlı onay süreci",
        "Özel müşteri danışmanı"
      ],
      requirements: [
        "Ticari sicil kaydı",
        "Mali tablolar",
        "Vergi levhası",
        "İmza sirküleri"
      ],
      isPopular: true
    },
    {
      id: 2,
      title: "Ticari Hesaplar",
      category: "hesaplar",
      type: "hesap",
      icon: "💼",
      description: "İşletmenizin günlük bankacılık ihtiyaçlarını karşılayan hesap çözümleri.",
      features: [
        "Ticari mevduat hesabı",
        "Kurumsal cari hesap",
        "Döviz hesapları",
        "Yatırım hesapları",
        "Escrow hesapları"
      ],
      benefits: [
        "Düşük hesap işlem ücretleri",
        "Online bankacılık erişimi",
        "Mobil bankacılık",
        "7/24 müşteri hizmetleri"
      ],
      requirements: [
        "Ticari sicil kaydı",
        "Vergi numarası",
        "İmza sirküleri",
        "Yetkili kişi kimlik belgesi"
      ],
      isPopular: false
    },
    {
      id: 3,
      title: "Ödeme Çözümleri",
      category: "odeme",
      type: "odeme",
      icon: "💳",
      description: "İşletmenizin ödeme süreçlerini kolaylaştıran dijital çözümler.",
      features: [
        "POS cihazları",
        "Online ödeme sistemi",
        "E-Fatura entegrasyonu",
        "Toplu ödeme sistemi",
        "Döviz transferi"
      ],
      benefits: [
        "Düşük işlem komisyonları",
        "Güvenli ödeme altyapısı",
        "7/24 teknik destek",
        "Detaylı raporlama"
      ],
      requirements: [
        "Ticari sicil kaydı",
        "Vergi levhası",
        "İş yeri ruhsatı",
        "Teknik altyapı uygunluğu"
      ],
      isPopular: true
    },
    {
      id: 4,
      title: "Yatırım Hizmetleri",
      category: "yatirim",
      type: "yatirim",
      icon: "📈",
      description: "İşletmenizin fazla nakitini değerlendirmek için profesyonel yatırım çözümleri.",
      features: [
        "Kurumsal yatırım fonları",
        "Tahvil yatırımları",
        "Döviz yatırımları",
        "Altın yatırımları",
        "Portföy yönetimi"
      ],
      benefits: [
        "Uzman yatırım danışmanlığı",
        "Risk yönetimi",
        "Düzenli raporlama",
        "Esnek yatırım seçenekleri"
      ],
      requirements: [
        "Kurumsal hesap",
        "Yatırım yetkisi belgesi",
        "Risk profili analizi",
        "Minimum yatırım tutarı"
      ],
      isPopular: false
    },
    {
      id: 5,
      title: "Dış Ticaret",
      category: "dis-ticaret",
      type: "dis-ticaret",
      icon: "🌍",
      description: "İhracat ve ithalat işlemleriniz için kapsamlı dış ticaret hizmetleri.",
      features: [
        "Akreditif işlemleri",
        "Garanti mektupları",
        "Döviz alım-satımı",
        "İhracat kredileri",
        "İthalat finansmanı"
      ],
      benefits: [
        "Uluslararası bankacılık deneyimi",
        "Hızlı işlem süreçleri",
        "Döviz riski yönetimi",
        "Uzman danışmanlık"
      ],
      requirements: [
        "Dış ticaret sicil kaydı",
        "İhracat/ithalat lisansı",
        "Gümrük beyannameleri",
        "Ticari belgeler"
      ],
      isPopular: true
    },
    {
      id: 6,
      title: "Nakit Yönetimi",
      category: "nakit",
      type: "nakit",
      icon: "💰",
      description: "İşletmenizin nakit akışını optimize eden profesyonel çözümler.",
      features: [
        "Nakit konsantrasyonu",
        "Otomatik transferler",
        "Liquidity yönetimi",
        "Faiz optimizasyonu",
        "Risk yönetimi"
      ],
      benefits: [
        "Nakit akış optimizasyonu",
        "Faiz geliri artışı",
        "Risk azaltma",
        "Otomatik süreçler"
      ],
      requirements: [
        "Kurumsal hesap",
        "Nakit yönetim yetkisi",
        "Mali tablolar",
        "Nakit akış projeksiyonları"
      ],
      isPopular: false
    }
  ]

  const categories = [
    { id: 'tumu', name: 'Tümü', icon: '📋' },
    { id: 'krediler', name: 'Krediler', icon: '🏦' },
    { id: 'hesaplar', name: 'Hesaplar', icon: '💼' },
    { id: 'odeme', name: 'Ödeme', icon: '💳' },
    { id: 'yatirim', name: 'Yatırım', icon: '📈' },
    { id: 'dis-ticaret', name: 'Dış Ticaret', icon: '🌍' },
    { id: 'nakit', name: 'Nakit Yönetimi', icon: '💰' }
  ]

  const corporateBenefits = [
    {
      title: "Özel Müşteri Danışmanı",
      description: "Her kurumsal müşterimize özel atanmış danışman",
      icon: "👤"
    },
    {
      title: "7/24 Destek",
      description: "Kesintisiz müşteri hizmetleri ve teknik destek",
      icon: "🕐"
    },
    {
      title: "Online Bankacılık",
      description: "Gelişmiş kurumsal online bankacılık platformu",
      icon: "💻"
    },
    {
      title: "Rekabetçi Fiyatlar",
      description: "Sektörde en uygun faiz oranları ve komisyonlar",
      icon: "💎"
    }
  ]

  const successStories = [
    {
      company: "ABC Teknoloji A.Ş.",
      sector: "Teknoloji",
      service: "Yatırım Kredisi",
      amount: "5 Milyon TL",
      result: "Yeni fabrika kurulumu tamamlandı",
      testimonial: "TrustBank'ın hızlı onay süreci sayesinde projemizi zamanında hayata geçirdik."
    },
    {
      company: "XYZ İnşaat Ltd.",
      sector: "İnşaat",
      service: "İşletme Kredisi",
      amount: "10 Milyon TL",
      result: "Yeni projeler için finansman sağlandı",
      testimonial: "Uzman danışmanlık hizmetleri ile risklerimizi minimize ettik."
    },
    {
      company: "DEF Dış Ticaret A.Ş.",
      sector: "Dış Ticaret",
      service: "Akreditif",
      amount: "2 Milyon USD",
      result: "İhracat hacmi %50 arttı",
      testimonial: "Uluslararası işlemlerimizde güvenilir partnerimiz oldu."
    }
  ]

  const filteredServices = selectedCategory === 'tumu' 
    ? corporateServices 
    : corporateServices.filter(service => service.category === selectedCategory)

  const getTypeColor = (type) => {
    switch(type) {
      case 'kredi': return '#1e3a8a'
      case 'hesap': return '#059669'
      case 'odeme': return '#dc2626'
      case 'yatirim': return '#7c3aed'
      case 'dis-ticaret': return '#ea580c'
      case 'nakit': return '#0891b2'
      default: return '#6b7280'
    }
  }

  return (
    <div className="kurumsal-hizmetler">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Kurumsal Hizmetler
          </h1>
          <p className="hero-subtitle">
            İşletmenizin büyümesi için ihtiyaç duyduğu tüm finansal çözümleri sunuyoruz
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Kurumsal Müşteri</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Hizmet Türü</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Yıl Deneyim</div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="corporate-illustration">
            <div className="illustration-item">🏢</div>
            <div className="illustration-item">📊</div>
            <div className="illustration-item">🤝</div>
            <div className="illustration-item">💼</div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button 
          className={`tab-btn ${activeTab === 'krediler' ? 'active' : ''}`}
          onClick={() => setActiveTab('krediler')}
        >
          <span className="tab-icon">🏦</span>
          Krediler
        </button>
        <button 
          className={`tab-btn ${activeTab === 'hesaplar' ? 'active' : ''}`}
          onClick={() => setActiveTab('hesaplar')}
        >
          <span className="tab-icon">💼</span>
          Hesaplar
        </button>
        <button 
          className={`tab-btn ${activeTab === 'odeme' ? 'active' : ''}`}
          onClick={() => setActiveTab('odeme')}
        >
          <span className="tab-icon">💳</span>
          Ödeme Çözümleri
        </button>
        <button 
          className={`tab-btn ${activeTab === 'yatirim' ? 'active' : ''}`}
          onClick={() => setActiveTab('yatirim')}
        >
          <span className="tab-icon">📈</span>
          Yatırım
        </button>
        <button 
          className={`tab-btn ${activeTab === 'dis-ticaret' ? 'active' : ''}`}
          onClick={() => setActiveTab('dis-ticaret')}
        >
          <span className="tab-icon">🌍</span>
          Dış Ticaret
        </button>
      </div>

      {/* Services Content */}
      <div className="services-content">
        {/* Category Filter */}
        <div className="category-filter">
          <h3>Hizmet Kategorileri</h3>
          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-header">
                <div className="service-badges">
                  {service.isPopular && <span className="badge popular">POPÜLER</span>}
                  <span 
                    className="service-type"
                    style={{ backgroundColor: getTypeColor(service.type) }}
                  >
                    {service.type.toUpperCase()}
                  </span>
                </div>
                <div className="service-icon">{service.icon}</div>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <h4>Özellikler:</h4>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-benefits">
                  <h4>Avantajlar:</h4>
                  <ul>
                    {service.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-requirements">
                  <h4>Gereksinimler:</h4>
                  <ul>
                    {service.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-actions">
                  <button className="btn-primary">Detaylı Bilgi</button>
                  <button className="btn-secondary">Başvur</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate Benefits */}
      <section className="corporate-benefits">
        <div className="benefits-content">
          <h2>Kurumsal Müşteri Avantajları</h2>
          <p>TrustBank olarak kurumsal müşterilerimize özel avantajlar sunuyoruz</p>
          <div className="benefits-grid">
            {corporateBenefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <div className="stories-content">
          <h2>Başarı Hikayeleri</h2>
          <p>Kurumsal müşterilerimizin başarı hikayelerini keşfedin</p>
          <div className="stories-grid">
            {successStories.map((story, index) => (
              <div key={index} className="story-card">
                <div className="story-header">
                  <h3 className="story-company">{story.company}</h3>
                  <span className="story-sector">{story.sector}</span>
                </div>
                <div className="story-content">
                  <div className="story-service">
                    <span className="service-label">Hizmet:</span>
                    <span className="service-value">{story.service}</span>
                  </div>
                  <div className="story-amount">
                    <span className="amount-label">Tutar:</span>
                    <span className="amount-value">{story.amount}</span>
                  </div>
                  <div className="story-result">
                    <span className="result-label">Sonuç:</span>
                    <span className="result-value">{story.result}</span>
                  </div>
                  <blockquote className="story-testimonial">
                    "{story.testimonial}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Kurumsal Bankacılık Danışmanınızla Görüşün</h2>
          <p>İşletmeniz için en uygun finansal çözümleri birlikte belirleyelim</p>
          <div className="cta-actions">
            <button className="btn-primary">Danışman Randevusu</button>
            <button className="btn-secondary">Hemen İletişime Geç</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default KurumsalHizmetler
