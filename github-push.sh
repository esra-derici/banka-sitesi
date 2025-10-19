#!/bin/bash

# TrustBank Projesi - GitHub'a Yükleme Script'i
# Bu script'i çalıştırmak için terminal'de şu komutu yazın:
# bash github-push.sh

echo "🚀 TrustBank projesi GitHub'a yükleniyor..."
echo ""
echo "⚠️  GitHub Personal Access Token'a ihtiyacınız var!"
echo ""
echo "📝 Token almak için:"
echo "1. https://github.com/settings/tokens sayfasına gidin"
echo "2. 'Generate new token (classic)' tıklayın"
echo "3. 'repo' yetkisini seçin"
echo "4. Token'ı kopyalayın"
echo ""
echo "-----------------------------------"
echo ""

cd "/Users/esraderici/Desktop/react projeler/banka"

# Kullanıcı adını sor
read -p "GitHub kullanıcı adınız (esra-derici): " username
username=${username:-esra-derici}

# Token'ı sor (gizli olarak)
echo ""
echo "Personal Access Token'ınızı yapıştırın (görünmeyecek):"
read -s token

echo ""
echo "📤 Push yapılıyor..."
echo ""

# Push yap
git push https://${username}:${token}@github.com/esra-derici/banka.git main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Başarılı! Projeniz GitHub'da: https://github.com/esra-derici/banka"
    echo ""
else
    echo ""
    echo "❌ Bir hata oluştu. Lütfen token'ınızı kontrol edin."
    echo ""
fi

