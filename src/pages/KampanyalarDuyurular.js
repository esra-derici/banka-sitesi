import React, { useState } from 'react'
import './styles/KampanyalarDuyurular.css'

const KampanyalarDuyurular = () => {
  const [activeTab, setActiveTab] = useState('kampanyalar')
  const [selectedCategory, setSelectedCategory] = useState('tumu')

  const campaigns = [
    {
      id: 1,
      title: "Yeni Müşteri Özel Kampanyası",
      description: "İlk hesabınızı açın, 500 TL hoş geldin bonusu kazanın!",
      category: "hesap",
      type: "kampanya",
      image: "🎁",
      validUntil: "31 Aralık 2024",
      isNew: true,
      isHot: true,
      details: "TrustBank'a ilk kez hesap açan müşterilerimize özel. Minimum 1000 TL ile hesap açmanız yeterli.",
      conditions: [
        "18 yaşını doldurmuş olmak",
        "İlk kez TrustBank müşterisi olmak",
        "Minimum 1000 TL ile hesap açmak",
        "Kampanya süresi içinde başvuru yapmak"
      ]
    },
    {
      id: 2,
      title: "Kredi Kartı Nakit Avans İndirimi",
      description: "Nakit avans işlemlerinizde %0,99 faiz oranı!",
      category: "kredi",
      type: "kampanya",
      image: "💳",
      validUntil: "15 Ocak 2025",
      isNew: false,
      isHot: true,
      details: "TrustBank kredi kartı sahipleri için özel nakit avans kampanyası. Sınırlı süre!",
      conditions: [
        "TrustBank kredi kartı sahibi olmak",
        "Kart limitiniz dahilinde işlem yapmak",
        "Kampanya süresi içinde işlem gerçekleştirmek"
      ]
    },
    {
      id: 3,
      title: "Dijital Yatırım Platformu",
      description: "İlk yatırımınızda komisyon yok!",
      category: "yatirim",
      type: "kampanya",
      image: "📈",
      validUntil: "28 Şubat 2025",
      isNew: true,
      isHot: false,
      details: "TrustBank Dijital Yatırım platformunda ilk işleminizde komisyon ödemeyin.",
      conditions: [
        "TrustBank müşterisi olmak",
        "Dijital yatırım hesabı açmak",
        "İlk işlemi kampanya süresi içinde yapmak"
      ]
    },
    {
      id: 4,
      title: "Ev Kredisi Özel Faiz Oranı",
      description: "Ev kredisi faiz oranında %0,50 indirim!",
      category: "kredi",
      type: "kampanya",
      image: "🏠",
      validUntil: "20 Mart 2025",
      isNew: false,
      isHot: true,
      details: "Konut kredisi alacak müşterilerimize özel indirimli faiz oranı.",
      conditions: [
        "İlk konut kredisi almak",
        "Minimum 200.000 TL kredi tutarı",
        "Kampanya süresi içinde başvuru yapmak"
      ]
    },
    {
      id: 5,
      title: "Mobil Bankacılık Bonusu",
      description: "Mobil uygulamadan işlem yapın, puan kazanın!",
      category: "dijital",
      type: "kampanya",
      image: "📱",
      validUntil: "Süresiz",
      isNew: false,
      isHot: false,
      details: "TrustBank mobil uygulamasından yaptığınız her işlem için puan kazanın.",
      conditions: [
        "TrustBank mobil uygulamasını kullanmak",
        "Aktif müşteri olmak"
      ]
    },
    {
      id: 6,
      title: "Altın Yatırım Kampanyası",
      description: "Altın yatırımında komisyon indirimi!",
      category: "yatirim",
      type: "kampanya",
      image: "🥇",
      validUntil: "10 Nisan 2025",
      isNew: true,
      isHot: false,
      details: "Altın yatırım işlemlerinizde %50 komisyon indirimi.",
      conditions: [
        "TrustBank müşterisi olmak",
        "Altın yatırım hesabı açmak",
        "Minimum 1 gram altın yatırımı"
      ]
    }
  ]

  const announcements = [
    {
      id: 1,
      title: "Yeni Güvenlik Önlemleri",
      description: "Hesabınızın güvenliği için yeni güvenlik önlemleri devreye alındı.",
      date: "15 Aralık 2024",
      type: "guvenlik",
      priority: "high",
      details: "Müşterilerimizin güvenliği için iki faktörlü kimlik doğrulama sistemi güncellendi."
    },
    {
      id: 2,
      title: "Şube Çalışma Saatleri Güncellemesi",
      description: "Yeni yıl döneminde şube çalışma saatleri değişikliği.",
      date: "20 Aralık 2024",
      type: "hizmet",
      priority: "medium",
      details: "31 Aralık ve 1 Ocak tarihlerinde şubelerimiz kapalı olacaktır."
    },
    {
      id: 3,
      title: "Mobil Uygulama Güncellemesi",
      description: "TrustBank mobil uygulaması yeni özelliklerle güncellendi.",
      date: "10 Aralık 2024",
      type: "teknoloji",
      priority: "low",
      details: "Yeni arayüz ve gelişmiş güvenlik özellikleri eklendi."
    },
    {
      id: 4,
      title: "Kredi Kartı Limit Artırımı",
      description: "Kredi kartı limit artırım işlemleri için yeni kriterler.",
      date: "5 Aralık 2024",
      type: "kredi",
      priority: "medium",
      details: "Limit artırım başvuruları için güncellenmiş değerlendirme kriterleri."
    }
  ]

  const categories = [
    { id: 'tumu', name: 'Tümü', icon: '📋' },
    { id: 'hesap', name: 'Hesap', icon: '🏦' },
    { id: 'kredi', name: 'Kredi', icon: '💳' },
    { id: 'yatirim', name: 'Yatırım', icon: '📈' },
    { id: 'dijital', name: 'Dijital', icon: '📱' }
  ]

  const filteredCampaigns = selectedCategory === 'tumu' 
    ? campaigns 
    : campaigns.filter(campaign => campaign.category === selectedCategory)

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return '#ef4444'
      case 'medium': return '#f59e0b'
      case 'low': return '#10b981'
      default: return '#6b7280'
    }
  }

  const getTypeColor = (type) => {
    switch(type) {
      case 'guvenlik': return '#ef4444'
      case 'hizmet': return '#3b82f6'
      case 'teknoloji': return '#8b5cf6'
      case 'kredi': return '#f59e0b'
      default: return '#6b7280'
    }
  }

  return (
    <div className="kampanyalar-duyurular">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Kampanyalar & Duyurular
          </h1>
          <p className="hero-subtitle">
            TrustBank'tan size özel kampanyalar ve önemli duyurular
          </p>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">{campaigns.length}</div>
            <div className="stat-label">Aktif Kampanya</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{announcements.length}</div>
            <div className="stat-label">Duyuru</div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button 
          className={`tab-btn ${activeTab === 'kampanyalar' ? 'active' : ''}`}
          onClick={() => setActiveTab('kampanyalar')}
        >
          <span className="tab-icon">🎁</span>
          Kampanyalar
        </button>
        <button 
          className={`tab-btn ${activeTab === 'duyurular' ? 'active' : ''}`}
          onClick={() => setActiveTab('duyurular')}
        >
          <span className="tab-icon">📢</span>
          Duyurular
        </button>
      </div>

      {/* Campaigns Tab */}
      {activeTab === 'kampanyalar' && (
        <div className="campaigns-content">
          {/* Category Filter */}
          <div className="category-filter">
            <h3>Kategoriler</h3>
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

          {/* Campaigns Grid */}
          <div className="campaigns-grid">
            {filteredCampaigns.map(campaign => (
              <div key={campaign.id} className="campaign-card">
                <div className="campaign-header">
                  <div className="campaign-badges">
                    {campaign.isNew && <span className="badge new">YENİ</span>}
                    {campaign.isHot && <span className="badge hot">HOT</span>}
                  </div>
                  <div className="campaign-image">{campaign.image}</div>
                </div>
                
                <div className="campaign-content">
                  <h3 className="campaign-title">{campaign.title}</h3>
                  <p className="campaign-description">{campaign.description}</p>
                  
                  <div className="campaign-details">
                    <div className="detail-item">
                      <span className="detail-label">Geçerlilik:</span>
                      <span className="detail-value">{campaign.validUntil}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Kategori:</span>
                      <span className="detail-value">{categories.find(c => c.id === campaign.category)?.name}</span>
                    </div>
                  </div>

                  <div className="campaign-conditions">
                    <h4>Şartlar:</h4>
                    <ul>
                      {campaign.conditions.map((condition, index) => (
                        <li key={index}>{condition}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="campaign-actions">
                    <button className="btn-primary">Başvur</button>
                    <button className="btn-secondary">Detaylar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Announcements Tab */}
      {activeTab === 'duyurular' && (
        <div className="announcements-content">
          <div className="announcements-list">
            {announcements.map(announcement => (
              <div key={announcement.id} className="announcement-card">
                <div className="announcement-header">
                  <div className="announcement-meta">
                    <span 
                      className="announcement-type"
                      style={{ backgroundColor: getTypeColor(announcement.type) }}
                    >
                      {announcement.type.toUpperCase()}
                    </span>
                    <span 
                      className="announcement-priority"
                      style={{ color: getPriorityColor(announcement.priority) }}
                    >
                      {announcement.priority === 'high' ? 'YÜKSEK' : 
                       announcement.priority === 'medium' ? 'ORTA' : 'DÜŞÜK'} ÖNCELİK
                    </span>
                  </div>
                  <div className="announcement-date">{announcement.date}</div>
                </div>
                
                <div className="announcement-content">
                  <h3 className="announcement-title">{announcement.title}</h3>
                  <p className="announcement-description">{announcement.description}</p>
                  <p className="announcement-details">{announcement.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Kampanyalarımızdan Haberdar Olun</h2>
          <p>E-posta bildirimleri ile yeni kampanyalarımızdan ilk siz haberdar olun</p>
          <div className="cta-form">
            <input 
              type="email" 
              placeholder="E-posta adresinizi girin"
              className="cta-input"
            />
            <button className="btn-primary">Abone Ol</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default KampanyalarDuyurular
