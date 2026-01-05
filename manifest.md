Pentagon Pizza Index - Cyberpunk Web Sitesi İçin Prompt
Proje Özeti:
Pentagon Pizza Index (PizzINT) izleme sitesi - Pentagon çevresindeki pizza mekanlarının yoğunluğunu takip ederek potansiyel askeri aktiviteleri tahmin eden yarı şaka, yarı ciddi bir OSINT (açık kaynak istihbaratı) aracı.
Teknik Altyapı:

Framework: Expo / React Native Web (veya Next.js öneriyorum - web için daha optimize)
Stil: Tailwind CSS
Font: Space Grotesk, JetBrains Mono, Orbitron gibi cyberpunk fontlar

Tasarım Tarzı - Cyberpunk Özellikleri:

Renk Paleti:

Ana renkler: Neon yeşil (#00ff41), neon mavi (#00d9ff), mor (#b026ff)
Arka plan: Koyu siyah (#0a0a0a) ve koyu gri tonları (#1a1a1a)
Aksan: Parlak sarı (#ffff00), kırmızı alarm (#ff0040)
Glitch efektleri için: RGB shift (kırmızı, mavi, yeşil ayrımı)


Görsel Elementler:

Keskin köşeler, geometrik şekiller
Scanline efektleri (eski monitör çizgileri)
Grid pattern arka planlar
Glitch efektleri (özellikle başlıklarda)
Neon glow efektleri
Matrix tarzı falling code efektleri (arka planda hafif)
Terminal/konsol görünümü


Ana Bileşenler:
A. Hero Section:

Büyük, parlak başlık: "PENTAGON PIZZA INDEX"
Alt başlık: "PIZZINT - REAL-TIME MILITARY TENSION INDICATOR"
Animated glitch efekti
Radar sweep animasyonu veya pulse efekti

B. Pizza DEFCON Göstergesi:

5 seviyeli sistem (DEFCON 5 - En düşük → DEFCON 1 - En yüksek)
Her seviye farklı renkte (yeşilden kırmızıya)
Gerçek zamanlı pulse animasyonu
Neon border ile çerçeveli kart

C. Live Pizza Tracker:

Pentagon yakınındaki pizza mekanlarının listesi
Her mekan için:

İsim
Anlık yoğunluk seviyesi (progress bar ile)
Son güncelleme zamanı
Status indicator (🟢 Normal / 🟡 Yüksek / 🔴 Kritik)


Glowing border efektleri
Hover'da neon highlight

D. Historical Events Timeline:

Geçmiş pizza spike'ları ve sonrasında olan olaylar
Scroll animasyonlu timeline
Her olay için:

Tarih
Pizza aktivite seviyesi
Sonrasında gerçekleşen askeri/politik olay


Cyberpunk stil bağlantı çizgileri

E. Theory Explanation:

"HOW IT WORKS" bölümü
Terminal tarzı açıklama kutusu
Typing animation efekti
Code block görünümü

F. Freddie's Beach Bar Indicator:

"Negative indicator" - bar yoğunluğu düştüğünde Pentagon'da mesai arttığını gösterir
Inverse gösterge (düşük aktivite = yüksek alarm)


Animasyonlar:

Loading/Scanning Animasyon: "SCANNING PIZZA FREQUENCIES..."
Radar Sweep: Dönen radar efekti
Glitch Efekt: Text ve imagelarda random glitch
Neon Pulse: Kenarlarda ve highlight'larda pulse animasyonu
Data Stream: Arka planda akan veri akışı efekti
Number Counter: Yoğunluk sayılarında count-up animasyonu
Hover Efektleri: Neon glow ve scale up
Typing Effect: Terminal bölümlerinde yazı yazma efekti
Particle Effects: Arka planda hafif parçacık animasyonları


Typography:

Başlıklar: Bold, büyük, monospace font (JetBrains Mono / Courier)
Body: Okunabilir sans-serif (Space Grotesk / Inter)
Code/Data: Monospace font
Tüm yazılarda subtle text-shadow (neon glow için)


İçerik Önerileri:

Hero Text: "MONITORING GEOPOLITICAL TENSIONS THROUGH PEPPERONI"
Tagline: "When pizza orders spike, the world holds its breath"
Disclaimer: "⚠️ THIS IS SATIRICAL OSINT - NOT OFFICIAL INTELLIGENCE"
Status Messages:

"🟢 ALL QUIET ON THE PIZZA FRONT"
"🟡 UNUSUAL ACTIVITY DETECTED"
"🔴 CRITICAL: UNPRECEDENTED PIZZA SURGE"




Responsive Tasarım:

Mobile-first yaklaşım
Tablet ve desktop için optimize grid layouts
Touch-friendly buttons
Hamburger menu (cyberpunk stil)


Ekstra Özellikler:

Dark mode only (cyberpunk için)
Sound effects (optional - radar beep, alarm sounds)
Real-time notifications (mümkünse)
Share functionality
Easter eggs (örn: konami code ile secret panel açılması)


Footer:

"DATA SOURCE: GOOGLE MAPS OSINT"
"CREATED FOR ENTERTAINMENT PURPOSES"
Social links (X/Twitter)
Credits



Örnek Komponent Yapısı:
- Header (glitch logo, nav)
- DefconIndicator (büyük, animated)
- LivePizzaTracker (real-time cards)
- BarIndicator (Freddie's)
- Timeline (historical events)
- TheoryExplainer (terminal style)
- Footer
Teknik Detaylar:

Framer Motion veya React Spring for animations
CSS Grid & Flexbox for layout
Custom hooks for glitch effects
LocalStorage for user preferences
(Opsiyonel) Mock API for simulated real-time data