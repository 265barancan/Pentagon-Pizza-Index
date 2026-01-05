# GitHub'a Yayınlama Adımları

## 1. Git Repository Başlatma

Terminal'de proje klasörüne gidin ve şu komutları çalıştırın:

```bash
cd /Users/barancan/Desktop/ppi
git init
```

## 2. Dosyaları Stage'e Ekleme

```bash
git add .
```

## 3. İlk Commit

```bash
git commit -m "Initial commit: Pentagon Pizza Index (PIZZINT)"
```

## 4. GitHub Repository'nizi Remote Olarak Ekleme

GitHub'da oluşturduğunuz repository'nin URL'sini kullanın. Örnek:

```bash
git remote add origin https://github.com/KULLANICI_ADINIZ/REPO_ADI.git
```

veya SSH kullanıyorsanız:

```bash
git remote add origin git@github.com:KULLANICI_ADINIZ/REPO_ADI.git
```

## 5. Branch Adını Ayarlama (Opsiyonel)

```bash
git branch -M main
```

## 6. GitHub'a Push Etme

```bash
git push -u origin main
```

## Tam Komut Dizisi (Tek Seferde)

Eğer GitHub repository URL'niz hazırsa, şu komutları sırayla çalıştırın:

```bash
cd /Users/barancan/Desktop/ppi
git init
git add .
git commit -m "Initial commit: Pentagon Pizza Index (PIZZINT)"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADINIZ/REPO_ADI.git
git push -u origin main
```

**Not:** `KULLANICI_ADINIZ` ve `REPO_ADI` kısımlarını kendi GitHub kullanıcı adınız ve repository adınızla değiştirin.

## Sorun Giderme

### Eğer "remote origin already exists" hatası alırsanız:
```bash
git remote remove origin
git remote add origin https://github.com/KULLANICI_ADINIZ/REPO_ADI.git
```

### Eğer authentication hatası alırsanız:
- GitHub'da Personal Access Token oluşturmanız gerekebilir
- Veya SSH key kullanabilirsiniz

### Eğer "nothing to commit" hatası alırsanız:
- `.gitignore` dosyası bazı dosyaları hariç tutuyor olabilir
- `git status` ile durumu kontrol edin

