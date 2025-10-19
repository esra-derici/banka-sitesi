import React, { useState } from 'react'
import './styles/KariyerInsanKanakları.css'

const KariyerInsanKanakları = () => {
  const [activeTab, setActiveTab] = useState('acik-pozisyonlar')
  const [selectedDepartment, setSelectedDepartment] = useState('tumu')
  const [selectedLocation, setSelectedLocation] = useState('tumu')

  const jobOpenings = [
    {
      id: 1,
      title: "Yazılım Geliştirici",
      department: "teknoloji",
      location: "istanbul",
      type: "Tam Zamanlı",
      experience: "2-4 Yıl",
      salary: "Competitive",
      description: "TrustBank'ın dijital dönüşüm projelerinde yer alacak yazılım geliştirici arıyoruz.",
      requirements: [
        "React, Node.js ve JavaScript deneyimi",
        "RESTful API geliştirme bilgisi",
        "Veritabanı yönetimi (SQL/NoSQL)",
        "Agile metodolojileri deneyimi",
        "İngilizce iletişim becerisi"
      ],
      benefits: [
        "Esnek çalışma saatleri",
        "Uzaktan çalışma imkanı",
        "Eğitim ve gelişim desteği",
        "Sağlık sigortası",
        "Yemek kartı"
      ],
      isNew: true,
      isUrgent: false
    },
    {
      id: 2,
      title: "Müşteri İlişkileri Uzmanı",
      department: "musteri-hizmetleri",
      location: "ankara",
      type: "Tam Zamanlı",
      experience: "1-3 Yıl",
      salary: "Competitive",
      description: "Müşteri memnuniyetini artırmak için çalışacak deneyimli uzman arıyoruz.",
      requirements: [
        "Müşteri hizmetleri deneyimi",
        "Problem çözme becerisi",
        "Etkili iletişim yeteneği",
        "Bankacılık bilgisi tercih edilir",
        "MS Office kullanımı"
      ],
      benefits: [
        "Performans primi",
        "Kariyer gelişim fırsatları",
        "Sosyal etkinlikler",
        "Eğitim desteği"
      ],
      isNew: false,
      isUrgent: true
    },
    {
      id: 3,
      title: "Risk Yönetimi Uzmanı",
      department: "risk-yonetimi",
      location: "izmir",
      type: "Tam Zamanlı",
      experience: "3-5 Yıl",
      salary: "Competitive",
      description: "Finansal risk analizi ve yönetimi konularında uzman personel arıyoruz.",
      requirements: [
        "Finans veya ekonomi lisansı",
        "Risk yönetimi deneyimi",
        "İstatistiksel analiz bilgisi",
        "Excel ve SQL kullanımı",
        "Analitik düşünme becerisi"
      ],
      benefits: [
        "Uzmanlık alanında gelişim",
        "Uluslararası sertifikasyon desteği",
        "Yüksek maaş paketi",
        "Esnek çalışma"
      ],
      isNew: false,
      isUrgent: false
    },
    {
      id: 4,
      title: "Dijital Pazarlama Uzmanı",
      department: "pazarlama",
      location: "istanbul",
      type: "Tam Zamanlı",
      experience: "2-4 Yıl",
      salary: "Competitive",
      description: "Dijital pazarlama stratejileri geliştirecek yaratıcı uzman arıyoruz.",
      requirements: [
        "Dijital pazarlama deneyimi",
        "Google Analytics ve Ads bilgisi",
        "Sosyal medya yönetimi",
        "İçerik üretimi deneyimi",
        "Kreatif düşünme yeteneği"
      ],
      benefits: [
        "Yaratıcı projeler",
        "Dijital araçlar eğitimi",
        "Hibrit çalışma modeli",
        "Kampanya bütçesi"
      ],
      isNew: true,
      isUrgent: false
    },
    {
      id: 5,
      title: "İnsan Kaynakları Uzmanı",
      department: "insan-kaynaklari",
      location: "ankara",
      type: "Tam Zamanlı",
      experience: "3-5 Yıl",
      salary: "Competitive",
      description: "İK süreçlerini yönetecek ve çalışan deneyimini geliştirecek uzman arıyoruz.",
      requirements: [
        "İnsan Kaynakları lisansı",
        "İK süreçleri deneyimi",
        "İşe alım süreçleri bilgisi",
        "Çalışan ilişkileri deneyimi",
        "HRIS kullanımı"
      ],
      benefits: [
        "İK alanında uzmanlaşma",
        "Çalışan gelişim programları",
        "Organizasyonel gelişim",
        "Liderlik fırsatları"
      ],
      isNew: false,
      isUrgent: false
    },
    {
      id: 6,
      title: "Mali Müşavir",
      department: "muhasebe",
      location: "izmir",
      type: "Tam Zamanlı",
      experience: "4-6 Yıl",
      salary: "Competitive",
      description: "Mali işler departmanında çalışacak sertifikalı mali müşavir arıyoruz.",
      requirements: [
        "Mali Müşavirlik sertifikası",
        "Muhasebe deneyimi",
        "Vergi mevzuatı bilgisi",
        "Mali raporlama deneyimi",
        "Dikkatli ve titiz çalışma"
      ],
      benefits: [
        "Sertifika yenileme desteği",
        "Mali danışmanlık deneyimi",
        "Kurumsal muhasebe",
        "Yüksek maaş paketi"
      ],
      isNew: false,
      isUrgent: true
    }
  ]

  const departments = [
    { id: 'tumu', name: 'Tümü', icon: '🏢' },
    { id: 'teknoloji', name: 'Teknoloji', icon: '💻' },
    { id: 'musteri-hizmetleri', name: 'Müşteri Hizmetleri', icon: '👥' },
    { id: 'risk-yonetimi', name: 'Risk Yönetimi', icon: '📊' },
    { id: 'pazarlama', name: 'Pazarlama', icon: '📈' },
    { id: 'insan-kaynaklari', name: 'İnsan Kaynakları', icon: '👤' },
    { id: 'muhasebe', name: 'Muhasebe', icon: '📋' }
  ]

  const locations = [
    { id: 'tumu', name: 'Tümü', icon: '🌍' },
    { id: 'istanbul', name: 'İstanbul', icon: '🏙️' },
    { id: 'ankara', name: 'Ankara', icon: '🏛️' },
    { id: 'izmir', name: 'İzmir', icon: '🌊' }
  ]

  const companyValues = [
    {
      title: "Güven",
      description: "Müşterilerimiz ve çalışanlarımızla kurduğumuz güven ilişkisi temel değerimizdir.",
      icon: "🤝"
    },
    {
      title: "İnovasyon",
      description: "Sürekli gelişim ve yenilikçi düşünce ile sektörde öncü olmaya devam ediyoruz.",
      icon: "💡"
    },
    {
      title: "Mükemmellik",
      description: "Her işimizde en yüksek kalite standartlarını hedefliyoruz.",
      icon: "⭐"
    },
    {
      title: "Takım Çalışması",
      description: "Birlikte çalışarak daha büyük başarılar elde ediyoruz.",
      icon: "👥"
    }
  ]

  const benefits = [
    {
      title: "Kariyer Gelişimi",
      description: "Sürekli eğitim ve gelişim fırsatları",
      icon: "📚"
    },
    {
      title: "Esnek Çalışma",
      description: "Hibrit ve uzaktan çalışma seçenekleri",
      icon: "🏠"
    },
    {
      title: "Sağlık Desteği",
      description: "Kapsamlı sağlık sigortası ve wellness programları",
      icon: "🏥"
    },
    {
      title: "Sosyal Etkinlikler",
      description: "Takım etkinlikleri ve sosyal sorumluluk projeleri",
      icon: "🎉"
    }
  ]

  const filteredJobs = jobOpenings.filter(job => {
    const departmentMatch = selectedDepartment === 'tumu' || job.department === selectedDepartment
    const locationMatch = selectedLocation === 'tumu' || job.location === selectedLocation
    return departmentMatch && locationMatch
  })

  const getDepartmentName = (deptId) => {
    return departments.find(d => d.id === deptId)?.name || deptId
  }

  const getLocationName = (locId) => {
    return locations.find(l => l.id === locId)?.name || locId
  }

  return (
    <div className="kariyer-insan-kaynaklari">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Kariyer Fırsatları
          </h1>
          <p className="hero-subtitle">
            TrustBank ailesine katılın ve kariyerinizde yeni bir sayfa açın
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">{jobOpenings.length}</div>
              <div className="stat-label">Açık Pozisyon</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Çalışan</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Şehir</div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="career-illustration">
            <div className="illustration-item">💼</div>
            <div className="illustration-item">📈</div>
            <div className="illustration-item">🤝</div>
            <div className="illustration-item">💡</div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button 
          className={`tab-btn ${activeTab === 'acik-pozisyonlar' ? 'active' : ''}`}
          onClick={() => setActiveTab('acik-pozisyonlar')}
        >
          <span className="tab-icon">💼</span>
          Açık Pozisyonlar
        </button>
        <button 
          className={`tab-btn ${activeTab === 'sirket-kulturu' ? 'active' : ''}`}
          onClick={() => setActiveTab('sirket-kulturu')}
        >
          <span className="tab-icon">🏢</span>
          Şirket Kültürü
        </button>
        <button 
          className={`tab-btn ${activeTab === 'faydalar' ? 'active' : ''}`}
          onClick={() => setActiveTab('faydalar')}
        >
          <span className="tab-icon">🎁</span>
          Faydalar
        </button>
      </div>

      {/* Job Openings Tab */}
      {activeTab === 'acik-pozisyonlar' && (
        <div className="job-openings-content">
          {/* Filters */}
          <div className="filters-section">
            <div className="filter-group">
              <h3>Departman</h3>
              <div className="filter-buttons">
                {departments.map(dept => (
                  <button
                    key={dept.id}
                    className={`filter-btn ${selectedDepartment === dept.id ? 'active' : ''}`}
                    onClick={() => setSelectedDepartment(dept.id)}
                  >
                    <span className="filter-icon">{dept.icon}</span>
                    {dept.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-group">
              <h3>Lokasyon</h3>
              <div className="filter-buttons">
                {locations.map(loc => (
                  <button
                    key={loc.id}
                    className={`filter-btn ${selectedLocation === loc.id ? 'active' : ''}`}
                    onClick={() => setSelectedLocation(loc.id)}
                  >
                    <span className="filter-icon">{loc.icon}</span>
                    {loc.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="job-listings">
            {filteredJobs.map(job => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <div className="job-badges">
                    {job.isNew && <span className="badge new">YENİ</span>}
                    {job.isUrgent && <span className="badge urgent">ACİL</span>}
                  </div>
                  <div className="job-meta">
                    <span className="job-department">{getDepartmentName(job.department)}</span>
                    <span className="job-location">{getLocationName(job.location)}</span>
                  </div>
                </div>
                
                <div className="job-content">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-description">{job.description}</p>
                  
                  <div className="job-details">
                    <div className="detail-item">
                      <span className="detail-label">Deneyim:</span>
                      <span className="detail-value">{job.experience}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Çalışma Şekli:</span>
                      <span className="detail-value">{job.type}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Maaş:</span>
                      <span className="detail-value">{job.salary}</span>
                    </div>
                  </div>

                  <div className="job-requirements">
                    <h4>Gereksinimler:</h4>
                    <ul>
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="job-benefits">
                    <h4>Faydalar:</h4>
                    <ul>
                      {job.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="job-actions">
                    <button className="btn-primary">Başvur</button>
                    <button className="btn-secondary">Detaylar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Company Culture Tab */}
      {activeTab === 'sirket-kulturu' && (
        <div className="company-culture-content">
          <div className="culture-intro">
            <h2>TrustBank Kültürü</h2>
            <p>Güven, inovasyon ve mükemmellik değerleriyle şekillenen bir çalışma ortamı sunuyoruz.</p>
          </div>

          <div className="values-grid">
            {companyValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="culture-features">
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <div className="feature-content">
                <h3>Hedef Odaklı</h3>
                <p>Net hedefler ve ölçülebilir sonuçlarla ilerliyoruz.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🚀</div>
              <div className="feature-content">
                <h3>Hızlı Büyüme</h3>
                <p>Sürekli gelişim ve öğrenme fırsatları sunuyoruz.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌍</div>
              <div className="feature-content">
                <h3>Çeşitlilik</h3>
                <p>Farklı kültürlerden insanları bir araya getiriyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Benefits Tab */}
      {activeTab === 'faydalar' && (
        <div className="benefits-content">
          <div className="benefits-intro">
            <h2>Çalışan Faydaları</h2>
            <p>Çalışanlarımızın mutluluğu ve gelişimi için kapsamlı fayda paketleri sunuyoruz.</p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="additional-benefits">
            <h3>Ek Faydalar</h3>
            <div className="benefits-list">
              <div className="benefit-item">🏆 Performans primleri</div>
              <div className="benefit-item">🍽️ Yemek kartı</div>
              <div className="benefit-item">🚗 Ulaşım desteği</div>
              <div className="benefit-item">📱 Cep telefonu</div>
              <div className="benefit-item">💻 Laptop/Tablet</div>
              <div className="benefit-item">🏖️ Yıllık izin</div>
              <div className="benefit-item">🎓 Eğitim bütçesi</div>
              <div className="benefit-item">🏥 Özel sağlık sigortası</div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Hemen Başvurun</h2>
          <p>TrustBank ailesine katılmak için CV'nizi gönderin</p>
          <div className="cta-actions">
            <button className="btn-primary">CV Gönder</button>
            <button className="btn-secondary">İletişime Geç</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default KariyerInsanKanakları
