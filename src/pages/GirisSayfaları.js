import React, { useState } from 'react'
import './styles/GirisSayfaları.css'

const GirisSayfaları = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert('Giriş başarılı! (Demo)')
    }, 2000)
  }

  return (
    <div className="giris-sayfasi">
      <div className="giris-container">
        {/* Left Side - Branding */}
        <div className="giris-left">
          <div className="brand-content">
            <div className="logo-section">
              <div className="logo">🏦</div>
              <h1 className="brand-name">TrustBank</h1>
              <p className="brand-tagline">Güvenilir Bankacılık</p>
            </div>
            
            <div className="features">
              <div className="feature">
                <div className="feature-icon">🔒</div>
                <div className="feature-text">
                  <h3>Güvenli Giriş</h3>
                  <p>256-bit SSL şifreleme ile korunuyorsunuz</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">📱</div>
                <div className="feature-text">
                  <h3>Mobil Uyumlu</h3>
                  <p>Her cihazdan kolayca erişim</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">⚡</div>
                <div className="feature-text">
                  <h3>Hızlı İşlemler</h3>
                  <p>7/24 kesintisiz hizmet</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="giris-right">
          <div className="form-container">
            <div className="form-header">
              <h2>TrustBank'a Hoş Geldiniz</h2>
              <p>Güvenli internet bankacılığına giriş yapın</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="username">Kullanıcı Adı / TC Kimlik No</label>
                <div className="input-container">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Kullanıcı adınızı veya TC kimlik numaranızı girin"
                    required
                    className="form-input"
                  />
                  <div className="input-icon">👤</div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Şifre</label>
                <div className="input-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Şifrenizi girin"
                    required
                    className="form-input"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              <div className="form-options">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <span className="checkmark"></span>
                  Beni hatırla
                </label>
                
                <div className="forgot-links">
                  <a href="#" className="forgot-password">
                    Şifremi unuttum
                  </a>
                  <a href="#" className="forgot-username">
                    Kullanıcı adımı unuttum
                  </a>
                </div>
              </div>

              <button 
                type="submit" 
                className={`login-btn ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="spinner"></div>
                    Giriş yapılıyor...
                  </>
                ) : (
                  'Giriş Yap'
                )}
              </button>

              <div className="divider">
                <span>veya</span>
              </div>

              <div className="alternative-login">
                <button type="button" className="alt-login-btn">
                  <div className="alt-icon">📱</div>
                  SMS ile Giriş
                </button>
                
                <button type="button" className="alt-login-btn">
                  <div className="alt-icon">🔐</div>
                  E-İmza ile Giriş
                </button>
                
                <button type="button" className="alt-login-btn">
                  <div className="alt-icon">👆</div>
                  Biyometrik Giriş
                </button>
              </div>
            </form>

            <div className="form-footer">
              <div className="register-section">
                <p>
                  Hesabınız yok mu? 
                  <a href="#" className="register-link">Hemen kayıt olun</a>
                </p>
                <p className="demo-info">
                  Demo hesap: <strong>demo123</strong> / <strong>demo123</strong>
                </p>
              </div>
              
              <div className="security-info">
                <div className="security-item">
                  <span className="security-icon">🔒</span>
                  <span>Güvenli Bağlantı</span>
                </div>
                <div className="security-item">
                  <span className="security-icon">🛡️</span>
                  <span>256-bit SSL</span>
                </div>
                <div className="security-item">
                  <span className="security-icon">✅</span>
                  <span>TrustBank Güvenli</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </div>
  )
}

export default GirisSayfaları
