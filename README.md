# HarcaGitsin

React tabanlı, modern bir e-ticaret frontend uygulaması. Workintech eğitimi kapsamında geliştirilmiş olan proje, ürün listeleme, kategoriler, sepet yönetimi, kullanıcı kaydı ve çok sayfalı bir mağaza deneyimi sunar.

## Özellikler

- **Ana Sayfa:** Hero, Editor's Picks, Best Seller, Featured Products bölümleri
- **Mağaza:** Kategorilere göre ürün listeleme
- **Ürün Detay:** Ürün sayfası ve ilgili ürünler
- **Kullanıcı Kaydı:** Rol bazlı kayıt (müşteri / mağaza), form validasyonu
- **İletişim, Hakkımızda, Takım** sayfaları
- **Redux** ile merkezi state yönetimi (kullanıcı, ürün, sepet)
- **Responsive** tasarım (Tailwind CSS)
- **SPA** yapısı (React Router ile client-side routing)

## Teknoloji Stack'i

### Çekirdek

| Teknoloji | Sürüm | Açıklama |
|-----------|--------|----------|
| **React** | 19.x | UI kütüphanesi |
| **React DOM** | 19.x | React için DOM renderer |
| **Vite** | 6.x | Build aracı ve dev sunucusu |
| **React Router** / **React Router DOM** | 7.x | Sayfa yönlendirme (SPA) |

### State Yönetimi

| Kütüphane | Sürüm | Kullanım |
|-----------|--------|----------|
| **Redux** | 5.x | Merkezi state store |
| **React Redux** | 9.x | React–Redux bağlantısı |
| **Redux Thunk** | 3.x | Asenkron aksiyonlar (API çağrıları) |
| **Redux Logger** | 3.x | Geliştirme için aksiyon loglama |

### Stil ve UI

| Kütüphane | Sürüm | Kullanım |
|-----------|--------|----------|
| **Tailwind CSS** | 4.x | Utility-first CSS framework |
| **@tailwindcss/vite** | 4.x | Vite için Tailwind entegrasyonu |
| **@fontsource/montserrat** | 5.x | Montserrat font (proje fontu) |
| **Lucide React** | 0.5x | İkon seti (Header: Search, Cart, Menu, User vb.) |
| **Font Awesome** | 6.x | İkonlar (RatingStars, ShopPageAdvert marka ikonları) |
| **@fortawesome/react-fontawesome** | 0.2.x | Font Awesome React bileşenleri |

### Form ve HTTP

| Kütüphane | Sürüm | Kullanım |
|-----------|--------|----------|
| **React Hook Form** | 7.x | Form state ve validasyon (Signup sayfası) |
| **Axios** | 1.9.x | HTTP istekleri, API client (baseURL: Workintech e-commerce API) |

### Bildirim (opsiyonel)

| Kütüphane | Sürüm | Not |
|-----------|--------|-----|
| **React Toastify** | 11.x | Projede tanımlı; kullanıma hazır toast bildirimleri |

### Geliştirme Araçları

| Araç | Sürüm | Açıklama |
|------|--------|----------|
| **@vitejs/plugin-react** | 4.x | Vite için React (JSX, HMR) |
| **ESLint** | 9.x | Kod kalitesi ve stil kuralları |
| **@eslint/js** | 9.x | ESLint JavaScript config |
| **eslint-plugin-react-hooks** | 5.x | React Hooks kuralları |
| **eslint-plugin-react-refresh** | 0.4.x | React Refresh uyumluluğu |
| **globals** | 16.x | ESLint için tarayıcı globalleri |
| **TypeScript tip tanımları** | — | `@types/react`, `@types/react-dom` (React 19) |

## Proje Yapısı

```
src/
├── api/
│   └── axiosInstance.jsx      # Axios instance (baseURL: Workintech API)
├── components/                 # Yeniden kullanılabilir UI bileşenleri
│   ├── AboutContainer.jsx
│   ├── AdvertBottom.jsx
│   ├── BestSellerProductCard.jsx
│   ├── BestSellerProducts.jsx
│   ├── BottomHero.jsx
│   ├── BottomLinks.jsx
│   ├── ContactContainer.jsx
│   ├── EditorPicks.jsx
│   ├── FeaturedProductCard.jsx
│   ├── FeaturedProducts.jsx
│   ├── HeaderContact.jsx
│   ├── Hero.jsx
│   ├── ProductContainer.jsx
│   ├── ProductList.jsx
│   ├── RatingStars.jsx
│   ├── RightReserved.jsx
│   ├── ShopCategories.jsx
│   ├── ShopCategoriesCard.jsx
│   ├── ShopPageAdvert.jsx
│   ├── Slider.jsx
│   ├── SocialMedia.jsx
│   ├── TeamContainer.jsx
│   └── TeamMemberCard.jsx
├── data/
│   ├── members.js             # Takım üyeleri verisi
│   └── products.js            # Ürün verisi (statik / demo)
├── images/                    # Görsel varlıklar
├── layouts/
│   ├── Footer.jsx
│   ├── Header.jsx
│   └── PageContent.jsx
├── pages/
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── MainPage.jsx
│   ├── ProductPage.jsx
│   ├── ShopPage.jsx
│   ├── SignupPage.jsx
│   └── TeamPage.jsx
├── store/
│   ├── actions/
│   │   ├── clientAction.js
│   │   ├── productAction.js
│   │   └── shoppingCartAction.js
│   ├── reducers/
│   │   ├── clientReducer.js
│   │   ├── productReducer.js
│   │   └── shoppingCartReducer.js
│   ├── thunks/
│   │   └── clientThunk.js     # Roller API (fetchRolesIfNeeded)
│   └── store.js               # Redux store (thunk + logger)
├── videos/
├── App.jsx
├── App.css
├── index.css                  # Tailwind + Montserrat import
└── main.jsx                   # Giriş noktası (Provider, BrowserRouter)
```

## Redux Store Yapısı

- **client:** Kullanıcı bilgisi, roller, tema, dil
- **product:** Kategoriler, ürün listesi, toplam, limit/offset, filtre, fetch durumu
- **shoppingCart:** Sepet, ödeme ve adres bilgisi

Middleware: `redux-thunk` (asenkron aksiyonlar), `redux-logger` (dev logları).

## API

- **Base URL:** `https://workintech-fe-ecommerce.onrender.com`
- **Kullanılan uç noktalar (ör.):** `/roles`, `/signup`
- Tüm API çağrıları `src/api/axiosInstance.jsx` üzerinden yapılır.

## Rotalar

| Path | Sayfa | Açıklama |
|------|--------|----------|
| `/` | MainPage | Ana sayfa |
| `/shop` | ShopPage | Mağaza / kategoriler |
| `/product/:productId` | ProductPage | Ürün detay |
| `/contact` | ContactPage | İletişim |
| `/team` | TeamPage | Takım |
| `/about` | AboutPage | Hakkımızda |
| `/signup` | SignupPage | Kullanıcı kaydı |

## Gereksinimler

- **Node.js** (v18+ önerilir)
- **npm** veya **yarn**

## Kurulum ve Çalıştırma

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat (http://localhost:5173)
npm run dev

# Production build
npm run build

# Build önizlemesi
npm run preview

# ESLint kontrolü
npm run lint
```

## Dağıtım

Proje **Vercel** ile dağıtıma uygun yapılandırılmıştır (`vercel.json`: SPA fallback rewrite). Build komutu: `vite build`; çıktı klasörü: `dist`.

## Lisans

Proje eğitim amaçlıdır; lisans bilgisi proje sahibine aittir.
