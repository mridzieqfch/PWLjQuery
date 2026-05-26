# Demo Animasi jQuery - Kelompok 9 🚀

Sebuah web aplikasi interaktif modern bertema *cyberpunk/dark-neon* yang dibuat khusus untuk mendemonstrasikan berbagai kemampuan visual dan transisi dari pustaka **jQuery 3.7.1**. Proyek ini mencakup kontrol manipulasi elemen dasar, indikator status sistem real-time, simulasi pengiriman paket data sekuensial dua-arah, visualisasi struktur UML, serta profil interaktif dari pengembang kelompok.

---

## 🛠️ Tech Stack & Dependencies

Proyek ini dibangun menggunakan teknologi berbasis web modern tanpa memerlukan server kompilasi berat:
- **Core Engine**: HTML5 & JavaScript (ES6)
- **Library Animasi**: [jQuery 3.7.1](https://jquery.com/) (via CDN resmi)
- **Styling & Layout**: [Tailwind CSS](https://tailwindcss.com/) (Play CDN)
- **Tipografi**: Google Fonts - [Inter](https://fonts.google.com/specimen/Inter)

---

## ✨ Fitur & Simulasi Utama

Aplikasi web ini memiliki 5 pilar fitur demo utama:

### 1. Kontrol Animasi Kotak (Box Animation Control)
Menampilkan manipulasi visual dasar dan tingkat lanjut terhadap objek kotak preview (`#box`):
- **Hide & Show**: Memunculkan dan menyembunyikan objek dengan animasi linear durasi 1 detik.
- **Fade Toggle**: Transisi memudar halus transparan (`opacity`) bolak-balik.
- **Slide Toggle**: Efek membuka dan menutup vertikal laci bergaya jQuery.
- **Animate**: Animasi properti multivariabel simultan (mengubah ukuran, opasitas, dan posisi `left` secara berurutan dalam antrean).
- **Bounce**: Simulasi efek memantul kinetik menggunakan chaining `.animate()` properti `top`.
- **Reset Position**: Menghentikan semua animasi yang berjalan (`.stop(true, true)`) dan mengembalikan kotak ke kondisi default.

### 2. Simulasi Indikator Kapasitas Sistem (Progress Bar)
Demonstrasi animasi dimensi (`width`) bersamaan dengan efek penghitung angka berjalan (**Running Number**):
- **Isi Kapasitas**: Mengisi bar kapasitas secara progresif dari 0% ke 100% menggunakan durasi 2 detik, lengkap dengan teks counter persentase yang berjalan naik serentak.
- **Kosongkan**: Menguras balik kapasitas dari posisi berjalan kembali ke 0% dengan animasi counter turun.

### 3. Simulasi Aliran Data Jaringan (Cyberpunk Network Flow) 🆕
Demonstrasi tingkat lanjut mengenai teknik **Chaining, Callback, dan Queue** jQuery untuk memvisualisasikan arsitektur request HTTP:
- Jalur transmisi visual tiga-node server glassmorphic (Client App 💻, API Gateway ⚡, Database 🗄️).
- Paket data bersinar (*glowing packet*) yang berjalan horizontal secara dua-arah.
- Konsol log jaringan real-time bergaya retro-cyberpunk dengan *auto-scroll* otomatis.
- Efek *bouncing* dinamis pada setiap kartu server dan efek neon-glow adaptif sesuai status aktif node (READY, SENDING, PROCESSING, QUERYING, RESPONDING, SUCCESS).

### 4. Visualisasi Diagram UML Terintegrasi
Menyajikan rancangan diagram perangkat lunak aplikasi ini dalam tata letak kartu yang rapi:
- **Use Case Diagram**: Hubungan aksi aktor (pengguna) dengan sistem.
- **Sequence Diagram**: Aliran kronologis pemanggilan objek di balik layar.
- **Class Diagram**: Struktur properti dan method pengontrol animasi.

### 5. Floating Panel Tim Pengembang
Panel profil interaktif pengembang yang diakses menggunakan floating button:
- Transisi buka-tutup halus menggunakan jQuery `.fadeToggle()`.
- Efek melayang responsif (*hover dynamic card lifting*) menggunakan `.animate()` properti `top`.
- Pembuka detail deskripsi tugas anggota menggunakan interaksi halus `.slideToggle()`.

---

## 👥 Tim Pengembang (Kelompok 9)

| Nama Anggota | NIM | Peran Utama dalam Tugas |
| :--- | :--- | :--- |
| **Muhammad Ridzieq F** | 202331070 | Pengembangan logika jQuery & perancangan Web UI |
| **Davina Najwa Ermawan** | 202331111 | Penyusunan struktur UML & desain layout antarmuka |
| **Dhea Febrina Kusumawardhani** | 202331102 | Penyusunan laporan dokumentasi & materi presentasi |

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

Karena proyek ini tidak memiliki dependensi Node.js server yang rumit, Anda bisa menjalankannya dalam hitungan detik:

1. **Unduh atau Kloning Repositori**:
   ```bash
   git clone https://github.com/username/jquery-project.git
   ```
2. **Buka Direktori Proyek**:
   ```bash
   cd jquery-project/docs
   ```
3. **Jalankan File**:
   - Cukup klik dua kali (*double click*) pada file `index.html` untuk langsung membukanya di browser favorit Anda.
   - *Alternatif*: Anda dapat membukanya menggunakan ekstensi **Live Server** di VS Code untuk pengalaman reloading real-time yang optimal.
