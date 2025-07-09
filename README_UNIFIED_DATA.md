# Unit007 Unified Data Structure

Proyek ini menggunakan struktur data terpadu (unified schema) untuk memudahkan pengelolaan data dan operasi CRUD (Create, Read, Update, Delete). Struktur ini dirancang untuk memudahkan pengembangan aplikasi dan mempersiapkan integrasi dengan backend API.

## Fitur Utama

- ✅ **Struktur Data Terpadu** - Semua entitas menggunakan struktur data yang konsisten dan terhubung
- ✅ **Operasi CRUD** - Fungsi lengkap untuk Create, Read, Update, Delete
- ✅ **TypeScript** - Definisi tipe yang kuat untuk mengurangi kesalahan
- ✅ **React Context & Hooks** - State management menggunakan React Context dan Custom Hooks
- ✅ **SEO Friendly** - Struktur data mendukung metadata SEO untuk setiap entitas
- ✅ **Extensible** - Mudah diperluas dengan menambahkan entitas dan operasi baru
- ✅ **API Ready** - Dirancang untuk mudah diintegrasikan dengan backend API

## Entitas Utama

Struktur data mencakup entitas-entitas berikut:

- **Product** - Produk dan layanan
- **CaseStudy** - Studi kasus untuk produk
- **Certificate** - Sertifikat profesional
- **LegalDocument** - Dokumen legal perusahaan
- **Contact** - Data kontak dari form kontak
- **User** - Pengguna admin
- **Order** - Data pesanan
- **CartItem** - Item keranjang belanja

## Cara Menggunakan

Untuk mengetahui cara menggunakan struktur data terpadu ini, lihat [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md).

## Struktur Folder

```
src/
  data/
    unifiedSchema.ts    # Definisi tipe/interface untuk semua data
    dataService.ts      # Service untuk operasi CRUD
    mockData.ts         # Data contoh untuk pengembangan
  context/
    DataContext.tsx     # Context Provider untuk data
  hooks/
    useData.ts          # Hook untuk akses context
    useProducts.ts      # Hook untuk operasi produk
    useCaseStudies.ts   # Hook untuk studi kasus
    useCertificates.ts  # Hook untuk sertifikat
    useLegalDocuments.ts # Hook untuk dokumen legal
    useContacts.ts      # Hook untuk kontak
    useCart.ts          # Hook untuk keranjang belanja
    useCartContext.ts   # Hook untuk context keranjang
```

## Struktur Data

Contoh struktur data produk:

```typescript
interface Product extends BaseEntity {
  name: string;
  category: string;
  slug: string;
  type: ProductType;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  reviews: number;
  images: string[];
  description: string;
  shortDescription: string;
  features: string[];
  specifications: Record<string, string>;
  testimonials: Testimonial[];
  faqs: FAQ[];
  relatedProducts: string[]; // IDs of related products
  badge: string | null;
  inStock: boolean;
  isPublished: boolean;
  caseStudies: string[]; // IDs of related case studies
  rabConfig?: RABConfig; // For corporate products only
  metadata: {
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string[];
  };
}
```

Untuk definisi lengkap, lihat `src/data/unifiedSchema.ts`.

## Pengembangan Selanjutnya

- [ ] Integrasi dengan backend API
- [ ] Implementasi autentikasi pengguna
- [ ] Dashboard admin untuk pengelolaan data
- [ ] Filter dan pencarian tingkat lanjut

## Kontribusi

Untuk berkontribusi pada proyek ini, ikuti pedoman kontribusi standar:

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/fitur-baru`)
3. Commit perubahan (`git commit -m 'Tambahkan fitur baru'`)
4. Push ke branch (`git push origin feature/fitur-baru`)
5. Buat Pull Request

## Lisensi

Unit007 © 2023. All rights reserved.
