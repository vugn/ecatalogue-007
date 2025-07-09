# Panduan Integrasi Struktur Data Terpadu

Dokumen ini menjelaskan cara mengintegrasikan struktur data terpadu (unified schema) ke dalam aplikasi React Unit007. Struktur data ini memungkinkan manajemen data yang konsisten dan mudah untuk operasi CRUD (Create, Read, Update, Delete).

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
    index.ts            # Export semua hooks
    useData.ts          # Hook untuk akses context
    useProducts.ts      # Hook untuk operasi produk
    useCaseStudies.ts   # Hook untuk studi kasus
    useCertificates.ts  # Hook untuk sertifikat
    useLegalDocuments.ts # Hook untuk dokumen legal
    useContacts.ts      # Hook untuk kontak
    useCart.ts          # Hook untuk keranjang belanja
    useCartContext.ts   # Hook untuk context keranjang
```

## Cara Penggunaan

### 1. Setup Provider

Pastikan aplikasi dibungkus dengan `DataProvider` dan `CartProvider`:

```tsx
// App.tsx
function App() {
  return (
    <Router>
      <DataProvider>
        <CartProvider>{/* Komponen aplikasi */}</CartProvider>
      </DataProvider>
    </Router>
  );
}
```

### 2. Mengakses Data

#### Mengakses Produk

```tsx
import { useProducts } from '../hooks';

const MyComponent = () => {
  const { products, getProductById, getProductsByCategory } = useProducts();

  // Mendapatkan semua produk
  console.log(products);

  // Mendapatkan produk berdasarkan ID
  const product = getProductById('product-1');

  // Mendapatkan produk berdasarkan kategori
  const securityProducts = getProductsByCategory('security');

  return (
    // JSX component
  );
};
```

#### Mengakses Studi Kasus

```tsx
import { useCaseStudies } from '../hooks';

const MyComponent = () => {
  const { caseStudies, getCaseStudiesByProductId } = useCaseStudies();

  // Mendapatkan studi kasus untuk produk tertentu
  const productCaseStudies = getCaseStudiesByProductId('security-corporate');

  return (
    // JSX component
  );
};
```

### 3. Operasi CRUD

#### Membuat Data Baru

```tsx
import { useProducts } from "../hooks";
import { ProductType } from "../data/unifiedSchema";

const MyComponent = () => {
  const { createProduct } = useProducts();

  const handleCreateProduct = async () => {
    const newProduct = {
      name: "Produk Baru",
      category: "security",
      slug: "produk-baru",
      type: ProductType.INDIVIDUAL,
      price: 1500000,
      originalPrice: 1800000,
      discountPercentage: 16.67,
      rating: 0,
      reviews: 0,
      images: ["https://example.com/image.jpg"],
      description: "Deskripsi lengkap produk",
      shortDescription: "Deskripsi singkat",
      features: ["Fitur 1", "Fitur 2"],
      specifications: {
        "Spesifikasi 1": "Nilai 1",
        "Spesifikasi 2": "Nilai 2",
      },
      testimonials: [],
      faqs: [],
      relatedProducts: [],
      badge: "NEW",
      inStock: true,
      isPublished: true,
      caseStudies: [],
      metadata: {
        seoTitle: "Produk Baru | Unit007",
        seoDescription: "Deskripsi SEO produk baru",
        seoKeywords: ["produk", "baru", "unit007"],
      },
    };

    const result = await createProduct(newProduct);
    console.log("Produk baru:", result);
  };

  return <button onClick={handleCreateProduct}>Tambah Produk Baru</button>;
};
```

#### Mengupdate Data

```tsx
import { useProducts } from "../hooks";

const MyComponent = () => {
  const { updateProduct } = useProducts();

  const handleUpdateProduct = async (id: string) => {
    const updates = {
      price: 1600000,
      isPublished: true,
      features: ["Fitur 1 Updated", "Fitur 2", "Fitur 3 Baru"],
    };

    const result = await updateProduct(id, updates);
    console.log("Produk diupdate:", result);
  };

  return (
    <button onClick={() => handleUpdateProduct("product-1")}>
      Update Produk
    </button>
  );
};
```

#### Menghapus Data

```tsx
import { useProducts } from "../hooks";

const MyComponent = () => {
  const { deleteProduct } = useProducts();

  const handleDeleteProduct = async (id: string) => {
    const result = await deleteProduct(id);
    console.log("Produk dihapus:", result);
  };

  return (
    <button onClick={() => handleDeleteProduct("product-1")}>
      Hapus Produk
    </button>
  );
};
```

### 4. Menggunakan Keranjang Belanja

```tsx
import { useCartContext } from "../hooks";

const ProductComponent = () => {
  const {
    items,
    addItem,
    updateQuantity,
    removeItem,
    getTotalItems,
    getTotalPrice,
  } = useCartContext();

  const handleAddToCart = (product) => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      duration: 1, // durasi dalam bulan
      image: product.images[0],
      category: product.category,
    });
  };

  return (
    <div>
      <p>Total Item: {getTotalItems()}</p>
      <p>Total Harga: {getTotalPrice()}</p>

      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Rp {item.price.toLocaleString()}</p>
          <button
            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
          >
            +
          </button>
          <button onClick={() => removeItem(item.productId)}>Hapus</button>
        </div>
      ))}
    </div>
  );
};
```

## Mengubah Komponen yang Ada

Berikut beberapa panduan untuk mengubah komponen yang sudah ada agar menggunakan struktur data terpadu:

1. **Hapus state lokal** yang menyimpan data yang sekarang sudah ada di struktur data terpadu.
2. **Gunakan hook yang sesuai** untuk mengakses dan memanipulasi data.
3. **Perbaiki tipe data** agar sesuai dengan interface di `unifiedSchema.ts`.
4. **Gunakan operasi asynchronous** untuk operasi CRUD dengan `async/await`.

## Integrasi dengan Backend API

Struktur ini dirancang untuk mudah diintegrasikan dengan backend API. Cukup modifikasi `dataService.ts` untuk memanggil API daripada menggunakan data lokal:

```typescript
// Contoh modifikasi getAll untuk memanggil API
private async getAll<T extends BaseEntity>(endpoint: string): Promise<T[]> {
  const response = await fetch(`https://api.example.com/${endpoint}`);
  const data = await response.json();
  return data;
}

// Contoh implementasi untuk produk
async getAllProducts(): Promise<Product[]> {
  return this.getAll<Product>('products');
}
```

## Panduan Debugging

Jika terjadi masalah dalam menggunakan struktur data terpadu:

1. Periksa apakah `DataProvider` dan `CartProvider` sudah dibungkus dengan benar
2. Pastikan hook dipanggil di dalam komponen React
3. Periksa data yang dihasilkan dengan `console.log`
4. Gunakan React DevTools untuk memeriksa Context value

## Selanjutnya

Struktur data ini dapat diperluas dengan menambahkan entitas baru di `unifiedSchema.ts` dan implementasi CRUD-nya di `dataService.ts`. Kemudian buat hook baru untuk mengakses entitas tersebut.
