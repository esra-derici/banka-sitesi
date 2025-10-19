import React, { useState } from 'react'
import './styles/SıkSorulanSorular.css'

const SıkSorulanSorular = () => {
  const [activeCategory, setActiveCategory] = useState('genel')
  const [openItems, setOpenItems] = useState({})
  const [searchTerm, setSearchTerm] = useState('')

  const faqCategories = [
    { id: 'genel', name: 'Genel', icon: '📋' },
    { id: 'hesap', name: 'Hesap İşlemleri', icon: '🏦' },
    { id: 'kredi', name: 'Kredi ve Kredi Kartı', icon: '💳' },
    { id: 'dijital', name: 'Dijital Bankacılık', icon: '📱' },
    { id: 'guvenlik', name: 'Güvenlik', icon: '🔒' },
    { id: 'yatirim', name: 'Yatırım', icon: '📈' },
    { id: 'doviz', name: 'Döviz İşlemleri', icon: '💱' }
  ]

  const faqData = {
    genel: [
      {
        id: 1,
        question: "TrustBank'ın şube sayısı kaçtır?",
        answer: "TrustBank olarak Türkiye genelinde 150'den fazla şubemiz bulunmaktadır. Şubelerimizin tam listesini web sitemizden veya mobil uygulamamızdan görüntüleyebilirsiniz."
      },
      {
        id: 2,
        question: "Müşteri hizmetlerine nasıl ulaşabilirim?",
        answer: "Müşteri hizmetlerimize 7/24 444 0 123 numaralı telefon hattımızdan, web sitemizdeki canlı destek özelliğinden veya mobil uygulamamızdan ulaşabilirsiniz. Ayrıca şubelerimizden de destek alabilirsiniz."
      },
      {
        id: 3,
        question: "Hangi saatlerde hizmet veriyorsunuz?",
        answer: "Şubelerimiz hafta içi 09:00-17:00, cumartesi 09:00-13:00 saatleri arasında hizmet vermektedir. Online bankacılık ve mobil uygulama 7/24 kullanılabilir durumdadır."
      },
      {
        id: 4,
        question: "Yeni müşteri olmak için hangi belgeler gereklidir?",
        answer: "Yeni müşteri olmak için kimlik belgeniz, ikametgah belgeniz ve gelir belgeniz yeterlidir. Kurumsal müşteriler için ticari sicil kaydı, vergi levhası ve imza sirküleri gereklidir."
      },
      {
        id: 5,
        question: "Hesap açma ücreti var mı?",
        answer: "Bireysel müşterilerimiz için hesap açma ücreti bulunmamaktadır. Kurumsal hesaplar için minimal bir açılış ücreti uygulanmaktadır. Detaylı bilgi için şubelerimizden bilgi alabilirsiniz."
      }
    ],
    hesap: [
      {
        id: 1,
        question: "Hesap bakiyemi nasıl sorgulayabilirim?",
        answer: "Hesap bakiyenizi online bankacılık, mobil uygulama, ATM'ler veya şubelerimizden sorgulayabilirsiniz. Ayrıca SMS ile günlük bakiye bildirimi alabilirsiniz."
      },
      {
        id: 2,
        question: "Hesap işlem ücretleri nelerdir?",
        answer: "Hesap işlem ücretlerimiz sektörde en uygun seviyededir. EFT/HAVALE işlemleri, çek işlemleri ve diğer hesap işlemleri için güncel ücret listemizi web sitemizden inceleyebilirsiniz."
      },
      {
        id: 3,
        question: "Hesabımı nasıl kapatabilirim?",
        answer: "Hesap kapatma işlemi için şubelerimizden başvuru yapmanız gerekmektedir. Hesabınızda bakiye varsa, önce bakiyeyi başka hesaba transfer etmeniz veya nakit olarak çekmeniz gerekir."
      },
      {
        id: 4,
        question: "Hesap limitimi nasıl artırabilirim?",
        answer: "Hesap limitinizi artırmak için online bankacılık üzerinden başvuru yapabilir veya şubelerimizden destek alabilirsiniz. Limit artırımı gelir durumunuza göre değerlendirilir."
      },
      {
        id: 5,
        question: "Hesap ekstresi nasıl alınır?",
        answer: "Hesap ekstrenizi online bankacılık, mobil uygulama veya ATM'lerden alabilirsiniz. Ayrıca şubelerimizden de yazdırabilirsiniz. E-posta ile otomatik ekstre gönderimi de mevcuttur."
      }
    ],
    kredi: [
      {
        id: 1,
        question: "Kredi başvurusu nasıl yapılır?",
        answer: "Kredi başvurunuzu online bankacılık, mobil uygulama, şubelerimizden veya web sitemizden yapabilirsiniz. Başvuru süreci ortalama 15 dakika sürmektedir."
      },
      {
        id: 2,
        question: "Kredi onay süreci ne kadar sürer?",
        answer: "Kredi onay süreci genellikle 1-3 iş günü arasında tamamlanır. Acil durumlar için hızlı onay seçeneği mevcuttur. Onay durumunuzu SMS ile bildiriyoruz."
      },
      {
        id: 3,
        question: "Kredi kartı limitimi nasıl artırabilirim?",
        answer: "Kredi kartı limitinizi online bankacılık üzerinden artırabilir veya şubelerimizden başvuru yapabilirsiniz. Limit artırımı gelir durumunuz ve kredi geçmişinize göre değerlendirilir."
      },
      {
        id: 4,
        question: "Kredi kartı aidatı var mı?",
        answer: "Kredi kartlarımızın çoğu aidatsızdır. Sadece premium kartlarımız için yıllık aidat uygulanmaktadır. Detaylı bilgi için kart türlerimizi inceleyebilirsiniz."
      },
      {
        id: 5,
        question: "Kredi erken kapatma cezası var mı?",
        answer: "Kredilerimizi erken kapatma cezası bulunmamaktadır. Erken kapatma durumunda sadece kalan anapara ve faiz tutarını ödemeniz yeterlidir."
      }
    ],
    dijital: [
      {
        id: 1,
        question: "Online bankacılık şifremi unuttum, ne yapmalıyım?",
        answer: "Online bankacılık şifrenizi unuttuysanız, web sitemizdeki 'Şifremi Unuttum' bölümünden veya mobil uygulamamızdan yeni şifre oluşturabilirsiniz. SMS doğrulama ile güvenli şekilde şifrenizi yenileyebilirsiniz."
      },
      {
        id: 2,
        question: "Mobil uygulamayı nasıl indirebilirim?",
        answer: "Mobil uygulamamızı App Store ve Google Play Store'dan ücretsiz olarak indirebilirsiniz. Uygulama adı: 'TrustBank Mobil'"
      },
      {
        id: 3,
        question: "Biyometrik giriş nasıl aktif edilir?",
        answer: "Biyometrik girişi mobil uygulamamızın ayarlar bölümünden aktif edebilirsiniz. Parmak izi veya yüz tanıma özelliğini kullanarak güvenli giriş yapabilirsiniz."
      },
      {
        id: 4,
        question: "E-Fatura entegrasyonu nasıl yapılır?",
        answer: "E-Fatura entegrasyonu için online bankacılık üzerinden 'E-Fatura' bölümünden başvuru yapabilirsiniz. Gerekli belgeleri yükledikten sonra entegrasyon 1-2 iş günü içinde tamamlanır."
      },
      {
        id: 5,
        question: "SMS bildirimleri nasıl aktif edilir?",
        answer: "SMS bildirimlerini online bankacılık veya mobil uygulama üzerinden aktif edebilirsiniz. Hangi işlemler için bildirim almak istediğinizi seçebilirsiniz."
      }
    ],
    guvenlik: [
      {
        id: 1,
        question: "Hesabımın güvenliği için neler yapmalıyım?",
        answer: "Hesabınızın güvenliği için güçlü şifreler kullanın, şifrenizi kimseyle paylaşmayın, şüpheli e-postalara tıklamayın ve düzenli olarak şifrenizi değiştirin. Ayrıca iki faktörlü kimlik doğrulamayı aktif edin."
      },
      {
        id: 2,
        question: "Şüpheli işlem fark edersem ne yapmalıyım?",
        answer: "Şüpheli işlem fark ettiğinizde hemen müşteri hizmetlerimizi arayın (444 0 123) veya şubelerimizden destek alın. Kartınızı bloke ettirebilir ve gerekli önlemleri alabilirsiniz."
      },
      {
        id: 3,
        question: "Kartım çalındı veya kayboldu, ne yapmalıyım?",
        answer: "Kartınız çalındı veya kaybolduysa hemen müşteri hizmetlerimizi arayın (444 0 123) veya online bankacılık üzerinden kartınızı bloke ettirin. Yeni kart talebinde bulunabilirsiniz."
      },
      {
        id: 4,
        question: "SSL sertifikası nedir?",
        answer: "SSL sertifikası, web sitemizdeki veri alışverişinin şifrelenmesini sağlar. Bu sayede kişisel bilgileriniz güvenli şekilde korunur. Tarayıcınızda kilit simgesi görüyorsanız güvenli bağlantı kurulmuştur."
      },
      {
        id: 5,
        question: "Phishing saldırılarına karşı nasıl korunabilirim?",
        answer: "Phishing saldırılarına karşı şüpheli e-postalara tıklamayın, bankamızın resmi web sitesini kullanın, kişisel bilgilerinizi kimseyle paylaşmayın ve düzenli olarak güvenlik yazılımlarınızı güncelleyin."
      }
    ],
    yatirim: [
      {
        id: 1,
        question: "Yatırım hesabı nasıl açılır?",
        answer: "Yatırım hesabı açmak için online bankacılık üzerinden başvuru yapabilir veya şubelerimizden destek alabilirsiniz. Risk profili analizi yapıldıktan sonra hesabınız aktif hale gelir."
      },
      {
        id: 2,
        question: "Hangi yatırım araçları mevcuttur?",
        answer: "Borsa, tahvil, yatırım fonları, altın, döviz ve kripto para yatırımları yapabilirsiniz. Detaylı bilgi için yatırım danışmanlarımızdan destek alabilirsiniz."
      },
      {
        id: 3,
        question: "Yatırım komisyonları nasıldır?",
        answer: "Yatırım komisyonlarımız sektörde en uygun seviyededir. İlk işleminizde komisyon almıyoruz. Detaylı komisyon listesi için web sitemizi inceleyebilirsiniz."
      },
      {
        id: 4,
        question: "Yatırım riski nedir?",
        answer: "Tüm yatırımlar risk içerir. Yatırım yapmadan önce risk profilinizi belirlememiz ve size uygun yatırım araçlarını önermemiz önemlidir. Kayıp riski her zaman mevcuttur."
      },
      {
        id: 5,
        question: "Yatırım danışmanlığı ücretsiz mi?",
        answer: "Temel yatırım danışmanlığımız ücretsizdir. Detaylı portföy yönetimi için ücretli hizmetlerimiz de mevcuttur. Danışmanlarımız size en uygun seçenekleri sunar."
      }
    ],
    doviz: [
      {
        id: 1,
        question: "Döviz alım-satım işlemi nasıl yapılır?",
        answer: "Döviz alım-satım işlemini online bankacılık, mobil uygulama veya şubelerimizden yapabilirsiniz. Güncel kurları web sitemizden takip edebilirsiniz."
      },
      {
        id: 2,
        question: "Döviz hesapları için komisyon var mı?",
        answer: "Döviz hesaplarımız için komisyon almıyoruz. Sadece alım-satım işlemlerinde minimal komisyon uygulanmaktadır."
      },
      {
        id: 3,
        question: "Döviz transferi nasıl yapılır?",
        answer: "Döviz transferi için online bankacılık üzerinden 'Döviz Transferi' bölümünden işlem yapabilirsiniz. Gerekli belgeleri yükledikten sonra transfer işlemi gerçekleştirilir."
      },
      {
        id: 4,
        question: "Döviz kurları ne sıklıkla güncellenir?",
        answer: "Döviz kurlarımız piyasa koşullarına göre güncellenir. Genellikle gün içinde birkaç kez güncelleme yapılır. Güncel kurları web sitemizden takip edebilirsiniz."
      },
      {
        id: 5,
        question: "Döviz yatırımı yapabilir miyim?",
        answer: "Evet, döviz yatırımı yapabilirsiniz. Döviz hesaplarınızda farklı para birimlerinde yatırım yapabilir ve faiz kazanabilirsiniz."
      }
    ]
  }

  const toggleItem = (category, itemId) => {
    const key = `${category}-${itemId}`
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const filteredFaqs = faqData[activeCategory].filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="sik-sorulan-sorular">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Sık Sorulan Sorular
          </h1>
          <p className="hero-subtitle">
            TrustBank hizmetleri hakkında merak ettiğiniz her şeyi burada bulabilirsiniz
          </p>
          <div className="search-container">
            <div className="search-box">
              <input
                type="text"
                placeholder="Sorunuzu yazın..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button className="search-btn">
                <span className="search-icon">🔍</span>
              </button>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="faq-illustration">
            <div className="illustration-item">❓</div>
            <div className="illustration-item">💡</div>
            <div className="illustration-item">📞</div>
            <div className="illustration-item">🤝</div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="category-navigation">
        <div className="category-buttons">
          {faqCategories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Content */}
      <div className="faq-content">
        <div className="faq-container">
          <div className="faq-header">
            <h2>{faqCategories.find(cat => cat.id === activeCategory)?.name} Soruları</h2>
            <p>{filteredFaqs.length} soru bulundu</p>
          </div>

          <div className="faq-list">
            {filteredFaqs.map(item => {
              const key = `${activeCategory}-${item.id}`
              const isOpen = openItems[key]
              
              return (
                <div key={item.id} className="faq-item">
                  <button
                    className={`faq-question ${isOpen ? 'active' : ''}`}
                    onClick={() => toggleItem(activeCategory, item.id)}
                  >
                    <span className="question-text">{item.question}</span>
                    <span className="toggle-icon">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>Aradığınız soru bulunamadı</h3>
              <p>Farklı anahtar kelimeler deneyebilir veya kategoriler arasında geçiş yapabilirsiniz.</p>
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-content">
          <h2>Hala Aradığınızı Bulamadınız mı?</h2>
          <p>Uzman ekibimiz size yardımcı olmaya hazır</p>
          <div className="contact-options">
            <div className="contact-option">
              <div className="contact-icon">📞</div>
              <h3>Telefon Desteği</h3>
              <p>7/24 müşteri hizmetleri</p>
              <span className="contact-detail">444 0 123</span>
            </div>
            <div className="contact-option">
              <div className="contact-icon">💬</div>
              <h3>Canlı Destek</h3>
              <p>Anında yanıt alın</p>
              <button className="contact-btn">Sohbet Başlat</button>
            </div>
            <div className="contact-option">
              <div className="contact-icon">📧</div>
              <h3>E-posta Desteği</h3>
              <p>Detaylı yanıt alın</p>
              <span className="contact-detail">destek@trustbank.com</span>
            </div>
            <div className="contact-option">
              <div className="contact-icon">🏢</div>
              <h3>Şube Ziyareti</h3>
              <p>Yüz yüze görüşme</p>
              <button className="contact-btn">Şube Bul</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>TrustBank ile Tanışın</h2>
          <p>Modern bankacılık deneyimini keşfedin</p>
          <div className="cta-actions">
            <button className="btn-primary">Hesap Aç</button>
            <button className="btn-secondary">Hizmetlerimizi Keşfet</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SıkSorulanSorular
