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

- **Frontend**: React.js dengan antarmuka responsif
- **Backend**: Node.js dengan Express.js
- **Database**: PostgreSQL
- **Autentikasi**: JWT (JSON Web Tokens)
- **Hosting**: Cloud-based

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
