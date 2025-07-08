# SIM Sekolah SMKN 1 Punggelan

![SMKN 1 Punggelan Logo](https://via.placeholder.com/150x50?text=SMKN+1+Punggelan)

## Tentang Aplikasi

Sistem Informasi Manajemen (SIM) Sekolah SMKN 1 Punggelan adalah platform digital terpadu yang dirancang untuk mendukung manajemen sekolah, proses pembelajaran, dan administrasi akademik. Aplikasi ini dikembangkan khusus untuk memenuhi kebutuhan sekolah menengah kejuruan dengan fokus pada efisiensi dan efektivitas pengelolaan data sekolah.

## Fitur Utama

### 1. Manajemen Akademik
- Pengelolaan data siswa dan guru
- Manajemen kelas dan jadwal pelajaran
- Penilaian dan rapor digital
- Kalender akademik

### 2. Manajemen Keuangan
- Pembayaran SPP dan uang sekolah
- Pengelolaan keuangan sekolah
- Laporan keuangan

### 3. Perpustakaan Digital
- Katalog buku digital
- Peminjaman dan pengembalian buku
- Manajemen inventaris perpustakaan

### 4. Izin Masuk dan Keluar
- Pengajuan izin siswa
- Persetujuan wali kelas/guru piket
- Monitoring kehadiran
- Laporan kedisiplinan

### 5. Praktik Kerja Lapangan (PKL)
- Pendaftaran PKL
- Monitoring peserta PKL
- Penilaian PKL
- Laporan kegiatan PKL

## Teknologi

### Frontend
- **Framework**: React.js
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Form Handling**: Formik & Yup
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **API**: RESTful API
- **Documentasi**: Swagger/OpenAPI
- **Logging**: Winston
- **Testing**: Jest & Supertest

### Database
- **Sistem**: PostgreSQL
- **ORM**: Sequelize
- **Migrasi**: Sequelize CLI
- **Seeding**: Data dummy untuk pengembangan

### Keamanan
- **Autentikasi**: JWT (JSON Web Tokens)
- **Enkripsi**: bcryptjs
- **Rate Limiting**: express-rate-limit
- **CORS**: Pengaturan aman untuk lintas domain
- **Security Headers**: Helmet.js

### Pengembangan
- **Environment**: dotenv
- **Linting**: ESLint
- **Formatting**: Prettier
- **Version Control**: Git
- **CI/CD**: GitHub Actions

### Deployment
- **Platform**: Cloud-based (AWS/GCP/Azure)
- **Containerization**: Docker
- **Orchestration**: Kubernetes (opsional)
- **Monitoring**: Prometheus & Grafana

## Catatan Tambahan

Modul Izin Masuk dan Keluar serta Pengelolaan PKL dikembangkan menggunakan teknologi berbasis web (Node.js dengan Express.js) dan cloud, sesuai dengan infrastruktur SIM Sekolah SMKN 1 Punggelan. Antarmuka responsif memastikan aksesibilitas dari berbagai perangkat.

### Integrasi Sistem
Kedua modul baru terintegrasi dengan modul absensi, akademik, dan komunikasi SIM Sekolah SMKN 1 Punggelan untuk memastikan data terpusat dan efisien.

### Aksesibilitas
- Aplikasi web responsif yang dapat diakses melalui browser modern
- API yang dapat diintegrasikan dengan aplikasi mobile
- Dukungan multi-perangkat (desktop, tablet, mobile)

### Dukungan
- Dokumentasi API yang lengkap
- Panduan pengguna untuk setiap modul
- Dukungan teknis melalui tim pengembang

## Instalasi

1. Clone repository ini:
   ```bash
   git clone https://github.com/idiarso/PLAN_PIJAR.git
   cd PLAN_PIJAR
   ```

2. Instal dependensi:
   ```bash
   # Untuk frontend
   cd pijar-sekolah-frontend
   npm install
   
   # Untuk backend
   cd ../pijar-sekolah-backend
   npm install
   ```

3. Konfigurasi environment:
   - Salin `.env.example` ke `.env`
   - Sesuaikan konfigurasi database dan lainnya

4. Jalankan aplikasi:
   ```bash
   # Frontend
   cd pijar-sekolah-frontend
   npm start
   
   # Backend (di terminal terpisah)
   cd ../pijar-sekolah-backend
   npm start
   ```

## Kontribusi

Kami menerima kontribusi untuk pengembangan aplikasi ini. Silakan buat pull request dengan perubahan yang diusulkan.

## Lisensi

[MIT License](LICENSE)

## Kontak

SMKN 1 Punggelan  
Jl. Raya Punggelan - Banjarnegara  
Email: info@smkn1punggelan.sch.id  
Website: [www.smkn1punggelan.sch.id](https://www.smkn1punggelan.sch.id)
