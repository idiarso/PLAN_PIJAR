# Sistem Informasi Manajemen Sekolah
## SMKN 1 Punggelan

## Daftar Isi
1. [Ikhtisar Sistem](#ikhtisar-sistem)
2. [Modul dan Fitur](#daftar-modul-dan-fitur)
3. [Hak Akses](#hak-akses)
4. [Fitur Tambahan](#fitur-tambahan)
5. [Teknologi dan Dukungan](#teknologi-dan-dukungan)
6. [Panduan Implementasi](#panduan-implementasi-komprehensif)
7. [Kontak](#kontak)

## Ikhtisar Sistem
SIM Sekolah SMKN 1 Punggelan adalah platform terpadu berbasis web dan mobile yang dirancang untuk mendigitalisasi seluruh aspek manajemen sekolah. Sistem ini mengintegrasikan berbagai modul penting mulai dari administrasi akademik, keuangan, hingga manajemen sumber daya sekolah.

### Keunggulan Utama
- **Terintegrasi**: Semua modul terhubung dalam satu platform
- **Aksesibilitas**: Dapat diakses kapan saja dan di mana saja
- **Keamanan**: Dilengkapi enkripsi data dan sistem backup otomatis
- **Skalabilitas**: Dapat dikembangkan sesuai kebutuhan sekolah
- **Dukungan 24/7**: Tim dukungan siap membantu kapan saja

## Daftar Modul dan Fitur

| No | Modul | Deskripsi | Fitur Utama |
|----|-------|-----------|-------------|
| 1 | Manajemen Sekolah | Pengelolaan data dan administrasi sekolah | - Profil Sekolah (visi, misi, fasilitas, dll)<br>- Data Siswa (biodata, kenaikan kelas, alumni)<br>- Data Guru & Staf<br>- Data Akademik (kurikulum, jadwal, nilai)<br>- Data Ekstrakurikuler<br>- Data Jurusan dan Kelas<br>- Manajemen Aset Sekolah<br>- Keuangan Sekolah (SPP, BOS, penggajian)<br>- Laporan dan Pengajuan |
| 2 | Pembelajaran Digital | Fitur pendukung proses belajar mengajar | - Buku Digital Interaktif<br>- Video Pembelajaran<br>- Laboratorium Maya<br>- Modul Penugasan<br>- UKP (Uji Kompetensi Penilaian)<br>- E-Learning (kuis, tanya-jawab) |
| 3 | Absensi | Pengelolaan kehadiran | - Absensi Siswa (digital, rekap, statistik)<br>- Absensi Guru & Staf |
| 4 | Komunikasi | Sarana komunikasi sekolah | - Komunikasi dengan Orang Tua<br>- Notifikasi dan Informasi |
| 5 | Administrasi | Pengelolaan administrasi sekolah | - Website Sekolah<br>- Manajemen Perpustakaan<br>- Dashboard Kepala Sekolah |
| 6 | Keamanan dan Akses | Pengaturan hak akses pengguna | - Pengaturan Akun Berbasis Peran<br>- Keamanan Data |
| 7 | Izin Masuk dan Keluar | Manajemen perizinan siswa | - Pengajuan Izin Online<br>- Persetujuan Guru BP/Wali Kelas<br>- Pemantauan Real-Time<br>- Notifikasi Otomatis<br>- Laporan Izin |
| 8 | Pengelolaan PKL | Manajemen Praktik Kerja Lapangan | - Pendaftaran PKL<br>- Manajemen Mitra Industri<br>- Penjadwalan PKL<br>- Supervisi PKL<br>- Penilaian PKL<br>- Laporan PKL<br>- Komunikasi dengan Mitra |

## Hak Akses

| Peran | Izin Masuk/Keluar | PKL |
|-------|-------------------|-----|
| Siswa | Ajukan & lihat status izin | Daftar PKL, unggah laporan, lihat nilai |
| Orang Tua | Ajukan izin, terima notifikasi | - |
| Guru BP/Wali Kelas | Setujui/tolak izin, lihat laporan | Kelola jadwal supervisi, nilai kinerja |
| Operator Sekolah | Kelola data izin, buat laporan | Kelola mitra industri, buat laporan |
| Kepala Sekolah | Pantau aktivitas izin | Pantau progres PKL |
| Mitra Industri | - | Isi evaluasi, unggah laporan |

## Fitur Tambahan

### Izin Masuk dan Keluar

#### Tabel 1: Alur Pengajuan Izin
| No | Tahap | Deskripsi | Durasi | Status |
|----|-------|-----------|---------|--------|
| 1 | Pengajuan | Siswa/orang tua mengisi form izin online | - | Menunggu |
| 2 | Notifikasi | Pemberitahuan real-time ke wali kelas/Guru BP | Realtime | Terkirim |
| 3 | Verifikasi | Pemeriksaan kelengkapan dan validasi data | 1x24 jam | Diproses |
| 4 | Persetujuan | Persetujuan/penolakan oleh pihak berwenang | 1x24 jam | Disetujui/Ditolak |
| 5 | Notifikasi | Pengiriman hasil keputusan ke pemohon | Realtime | Selesai |

#### Tabel 2: Integrasi dengan Sistem Absensi
| Komponen | Deskripsi | Frekuensi | Keterangan |
|----------|-----------|-----------|------------|
| Sinkronisasi Data | Update otomatis status kehadiran | Real-time | - |
| Validasi | Pengecekan data ganda | Setiap transaksi | - |
| Peringatan | Notifikasi untuk data tidak valid | Real-time | - |
| Backup | Penyimpanan data terenkripsi | Harian | - |

#### Tabel 3: Fitur Pelacakan Izin
| Fitur | Deskripsi | Output | Akses |
|-------|-----------|--------|-------|
| Riwayat Izin | Catatan lengkap perizinan | Tabel & Grafik | Admin, Guru, Wali |
| Analisis Pola | Identifikasi pola izin | Grafik & Laporan | Admin, BP |
| Peringatan | Notifikasi untuk pola tidak wajar | Notifikasi | Admin, BP |
| Rekapitulasi | Ringkasan per periode | PDF/Excel | Semua Level |

#### Tabel 4: Opsi Pelaporan
| Jenis Laporan | Format | Frekuensi | Filter Tersedia |
|---------------|--------|-----------|-----------------|
| Harian | PDF, Excel | Per Hari | Kelas, Jurusan |
| Mingguan | PDF, Excel | Per Minggu | Kelas, Guru |
| Bulanan | PDF, Excel | Per Bulan | Seluruh Sekolah |
| Khusus | Custom | Sesuai Kebutuhan | Multi-filter |

#### Tabel 5: Pengaturan Keamanan
| Aspek | Metode | Frekuensi | Keterangan |
|-------|--------|-----------|------------|
| Autentikasi | 2FA, OTP | Setiap Login | Wajib |
| Otorisasi | RBAC | Real-time | Berbasis Peran |
| Enkripsi | AES-256 | Selalu | Data Transit & Simpan |
| Audit Log | Blockchain | Real-time | Tidak Dapat Diubah |

### Pengelolaan PKL (Praktik Kerja Lapangan)

#### Tabel 6: Proses Pendaftaran PKL
| Tahap | Deskripsi | Dokumen | Timeline | Status |
|-------|-----------|---------|----------|--------|
| 1 | Pendaftaran Awal | Formulir Online | 1-30 Sept | Buka |
| 2 | Verifikasi Dokumen | - Surat Keterangan<br>- CV<br>- Transkrip | 3 hari kerja | Verifikasi |
| 3 | Penempatan | Surat Penempatan | 1-15 Okt | Proses |
| 4 | Pembekalan | Materi PKL | 20-25 Okt | Akan Datang |
| 5 | Pelaksanaan | - | Nov-Feb | - |
| 6 | Evaluasi | Laporan Akhir | Maret | - |

#### Tabel 7: Sistem Penilaian PKL
| Komponen | Bobot | Penilai | Metode |
|----------|-------|---------|--------|
| Laporan Harian | 30% | Pembimbing Lapangan | Online Form |
| Laporan Akhir | 40% | Dudi & Sekolah | Dokumen & Presentasi |
| Evaluasi Pembimbing | 20% | Dudi | Form Online |
| Kehadiran | 10% | Sistem | Absensi Digital |

#### Tabel 8: Manajemen Mitra PKL
| Nama Perusahaan | Kuota | Masa Kerja Sama | Kontak | Status |
|-----------------|-------|-----------------|--------|--------|
| PT. Contoh 1 | 5 | 2023-2026 | 021-xxx | Aktif |
| CV. Contoh 2 | 3 | 2024-2025 | 021-yyy | Baru |
| UD. Contoh 3 | 2 | 2022-2024 | 021-zzz | Akan Berakhir |

#### Tabel 9: Dokumen PKL
| Jenis Dokumen | Format | Ukuran Maks | Wajib |
|---------------|--------|-------------|-------|
| Proposal PKL | PDF/DOCX | 5 MB | Ya |
| Surat Permohonan | PDF | 2 MB | Ya |
| Laporan Harian | DOCX/PDF | 10 MB | Ya |
| Laporan Akhir | PDF | 20 MB | Ya |
| Dokumen Pendukung | PDF/JPG | 5 MB | Tidak |

#### Tabel 10: Timeline PKL
| Kegiatan | Periode | PIC | Keterangan |
|----------|---------|-----|------------|
| Sosialisasi | September | Humas | - |
| Pendaftaran | 1-30 Sept | Panitia | Online |
| Penempatan | 1-15 Okt | PKL | - |
| Pembekalan | 20-25 Okt | BKK | Wajib |
| PKL | Nov-Feb | Semua | - |
| Ujian | Maret | Guru | - |
| Wisuda PKL | April | Sekolah | - |

#### Tabel 11: Daftar Perusahaan Mitra PKL
| No | Nama Perusahaan | Bidang | Kuota | Masa Kerja Sama | Kontak | Status |
|----|-----------------|--------|-------|-----------------|--------|--------|
| 1 | PT. Teknologi Maju | IT | 5 | 2023-2026 | 021-xxx | Aktif |
| 2 | CV. Karya Mandiri | Desain | 3 | 2024-2025 | 021-yyy | Baru |
| 3 | UD. Jaya Abadi | Perdagangan | 2 | 2022-2024 | 021-zzz | Akan Berakhir |
| 4 | PT. Digital Solusi | Software | 4 | 2024-2027 | 021-aaa | Aktif |
| 5 | CV. Kreatif Media | Multimedia | 3 | 2023-2025 | 021-bbb | Aktif |

#### Tabel 12: Daftar Siswa PKL
| No | NIS | Nama | Kelas | Perusahaan | Periode | Status |
|----|-----|------|-------|------------|---------|--------|
| 1 | 1001 | Andi Wijaya | XII RPL 1 | PT. Teknologi Maju | 2024 | Aktif |
| 2 | 1002 | Budi Santoso | XII TKJ 2 | CV. Karya Mandiri | 2024 | Aktif |
| 3 | 1003 | Citra Dewi | XII MM 1 | UD. Jaya Abadi | 2024 | Selesai |
| 4 | 1004 | Dina Puspita | XII RPL 2 | PT. Digital Solusi | 2024 | Aktif |

#### Tabel 13: Jadwal Monitoring PKL
| No | Tanggal | Jam | Pembimbing | Perusahaan | Kegiatan |
|----|---------|-----|------------|------------|----------|
| 1 | 10/11/24 | 09.00 | Bu Ani | PT. Teknologi Maju | Monitoring 1 |
| 2 | 25/11/24 | 10.00 | Pak Budi | CV. Karya Mandiri | Monitoring 1 |
| 3 | 15/12/24 | 13.00 | Bu Citra | UD. Jaya Abadi | Monitoring 2 |
| 4 | 05/01/25 | 11.00 | Pak Dedi | PT. Digital Solusi | Monitoring 2 |

#### Tabel 14: Rekapitulasi Nilai PKL
| No | Nama | Laporan Harian (30%) | Laporan Akhir (40%) | Pembimbing (20%) | Kehadiran (10%) | Total |
|----|------|----------------------|---------------------|------------------|-----------------|-------|
| 1 | Andi W. | 85 | 90 | 88 | 95 | 88.9 |
| 2 | Budi S. | 78 | 85 | 80 | 90 | 82.4 |
| 3 | Citra D. | 92 | 88 | 90 | 100 | 91.4 |
| 4 | Dina P. | 80 | 82 | 85 | 95 | 84.3 |

#### Tabel 15: Dokumen Pendukung
| No | Jenis Dokumen | Format | Ukuran Maks | Wajib | Keterangan |
|----|---------------|--------|-------------|-------|------------|
| 1 | Proposal PKL | PDF/DOCX | 5 MB | Ya | - |
| 2 | Surat Permohonan | PDF | 2 MB | Ya | Bermaterai |
| 3 | Laporan Harian | DOCX/PDF | 10 MB | Ya | Per pekan |
| 4 | Laporan Akhir | PDF | 20 MB | Ya | Hardcopy + Softcopy |
| 5 | Foto Kegiatan | JPG/PNG | 5 MB | Tidak | Maks 10 file |
| 6 | Bukti Kegiatan | PDF/JPG | 5 MB | Tidak | Jika ada |

#### Tabel 16: Sistem Keamanan Dokumen
| Aspek | Deskripsi | Teknologi | Frekuensi |
|-------|-----------|-----------|-----------|
| Enkripsi | Perlindungan data | AES-256 | Real-time |
| Backup | Cadangan data | Cloud Storage | Harian |
| Akses | Kontrol berbasis peran | RBAC | Real-time |
| Audit | Pelacakan perubahan | Blockchain | Real-time |
| Validasi | Tanda tangan digital | PKI | Per Dokumen |

## Rincian Teknis dan Dukungan

### Spesifikasi Teknis
#### Tabel 17: Kebutuhan Sistem
| Komponen | Spesifikasi Minimal | Rekomendasi |
|----------|---------------------|-------------|
| Server | 4 Core, 8GB RAM | 8 Core, 16GB RAM |
| Database | MySQL 5.7 | MySQL 8.0+ |
| PHP | 7.4 | 8.0+ |
| Browser | Chrome 80+ | Chrome/Edge terbaru |
| Internet | 5 Mbps | 10+ Mbps |

#### Tabel 18: Tim Dukungan
| Nama | Jabatan | Kontak | Jam Kerja |
|------|---------|--------|-----------|
| Ahmad F. | Koordinator | 0812-xxxx-xxxx | 08.00-17.00 |
| Budi K. | Teknisi | 0813-xxxx-xxxx | 08.00-17.00 |
| Citra M. | Admin | 0815-xxxx-xxxx | 08.00-17.00 |
| Dedi P. | Helpdesk | 0811-xxxx-xxxx | 24/7 (Darurat) |

### Panduan Penggunaan
#### Tabel 19: Kode Error dan Solusi
| Kode Error | Deskripsi | Solusi | Tingkat Kesulitan |
|------------|-----------|--------|------------------|
| ERR-001 | Gagal Login | Periksa username/password | Mudah |
| ERR-002 | Session Expired | Login ulang | Mudah |
| ERR-003 | File Terlalu Besar | Kompres file | Sedang |
| ERR-004 | Koneksi Terputus | Periksa jaringan | Sedang |
| ERR-005 | Akses Ditolak | Hubungi admin | Sulit |

#### Tabel 20: FAQ Umum
| Pertanyaan | Jawaban | Kategori |
|------------|---------|----------|
| Bagaimana cara reset password? | Klik lupa password di halaman login | Akun |
| Bagaimana cara cetak laporan? | Pilih menu Laporan > Pilih periode > Ekspor PDF | Laporan |
| Kapan jadwal maintenance? | Setiap Minggu pukul 00.00-02.00 WIB | Umum |
| Bagaimana cara update data? | Akses menu Profil > Edit Data | Akun |

## Spesifikasi Teknologi

### Arsitektur Sistem
- **Backend**: Node.js dengan Express.js
- **Database**: MySQL dengan Sequelize ORM
- **Autentikasi**: JWT (JSON Web Tokens)
- **API**: RESTful API
- **Realtime**: WebSocket (untuk notifikasi dan chat)

### Spesifikasi Database
#### Tabel 21: Struktur Database Utama
| Tabel | Deskripsi | Jumlah Kolom | Relasi Utama |
|-------|-----------|--------------|--------------|
| Users | Data pengguna (siswa, guru, orang tua) | 25+ | School, Parent |
| Academic | Tahun ajaran dan periode | 10+ | School |
| Attendance | Presensi siswa | 15+ | User, Schedule |
| Internship | Data PKL siswa | 20+ | User, Company |
| LeavePermit | Perizinan siswa | 15+ | User |
| Task | Tugas dan penugasan | 20+ | User, Class |
| Schedule | Jadwal pelajaran | 15+ | Academic, User, Class |
| Exam | Ujian dan penilaian | 20+ | Academic, Class |

#### Tabel 22: Struktur Tabel User
| Kolom | Tipe Data | Keterangan |
|-------|-----------|------------|
| id | UUID | Primary Key |
| username | String(50) | Unik, untuk login |
| passwordHash | String(255) | Hash password |
| role | ENUM | admin/teacher/student/parent/staff |
| email | String(100) | Email pengguna |
| phoneNumber | String(20) | Nomor telepon |
| nis/nip | String(20) | NIS/Nomor Induk |
| status | ENUM | Status akun |
| lastLogin | DateTime | Login terakhir |
| createdAt | DateTime | Waktu pembuatan |
| updatedAt | DateTime | Waktu update |

#### Tabel 23: Relasi Utama
| Tabel | Relasi | Tabel Tujuan | Tipe Relasi |
|-------|--------|--------------|-------------|
| User | belongsTo | School | Many-to-One |
| User | hasMany | Attendance | One-to-Many |
| User | hasMany | Task | One-to-Many |
| User | hasMany | LeavePermit | One-to-Many |
| Academic | hasMany | Schedule | One-to-Many |
| Schedule | hasMany | Attendance | One-to-Many |
| Internship | belongsTo | User | Many-to-One |

### API Endpoint Utama
| Endpoint | Method | Deskripsi | Otorisasi |
|----------|--------|------------|------------|
| /api/auth/login | POST | Login pengguna | - |
| /api/users | GET | Daftar pengguna | Admin |
| /api/attendance | POST | Input presensi | Teacher |
| /api/leave-permits | POST | Ajukan izin | Student |
| /api/tasks | GET | Daftar tugas | All |
| /api/internships | GET | Data PKL | Student/Teacher |

### Keamanan Sistem
- **Enkripsi**: AES-256 untuk data sensitif
- **Autentikasi**: JWT dengan expiry 24 jam
- **CORS**: Dibatasi ke domain yang dipercaya
- **Rate Limiting**: 100 request/menit per IP
- **SQL Injection**: Dicegah oleh Sequelize ORM
- **XSS**: Sanitasi input otomatis

### Skalabilitas
- **Load Balancing**: Nginx sebagai reverse proxy
- **Caching**: Redis untuk session dan data sering diakses
- **Background Jobs**: Queue untuk proses berat
- **File Storage**: AWS S3 untuk penyimpanan dokumen

### Monitoring
- **Logging**: Centralized logging dengan ELK Stack
- **Monitoring**: Prometheus + Grafana
- **Alerting**: Notifikasi untuk error dan anomali
- **Backup**: Otomatis harian ke cloud storage

## Panduan Pengembangan

### Persyaratan Sistem
- Node.js v16+
- MySQL 8.0+
- Redis (untuk caching dan session)
- Nginx (sebagai reverse proxy)

### Instalasi
1. Clone repository
2. Install dependencies: `npm install`
3. Buat file `.env` dari `.env.example`
4. Setup database MySQL
5. Jalankan migrasi: `npx sequelize-cli db:migrate`
6. Jalankan seeder: `npx sequelize-cli db:seed:all`
7. Start server: `npm run dev`

### Struktur Direktori
```
backend/
├── config/         # Konfigurasi aplikasi
├── controllers/    # Logic bisnis
├── middleware/     # Custom middleware
├── migrations/     # Migrasi database
├── models/         # Model database
├── routes/         # Definisi route
├── services/       # Layanan eksternal
├── utils/          # Utility functions
└── validators/     # Validasi input
```

## Teknologi dan Dukungan

| Aspek | Keterangan |
|-------|------------|
| **Platform** | Berbasis web dan cloud |
| **Akses** | Website (sim.pijarsekolah.id) dan aplikasi mobile |
| **Dukungan** | Email: support@pijarsekolah.id |
| **Kustomisasi** | Tersedia melalui tim SIM Sekolah |
| **Keamanan** | Data dienkripsi dengan sistem backup berkala |
| **Integrasi** | Terintegrasi dengan modul absensi dan akademik |

## Keunggulan Sistem

1. **Terpusat**
   - Semua data tersimpan dalam satu sistem terintegrasi
   - Akses mudah melalui berbagai perangkat

2. **Efisiensi Waktu**
   - Otomatisasi proses administrasi
   - Laporan dapat dihasilkan secara instan

3. **Transparansi**
   - Orang tua dapat memantau perkembangan siswa
   - Data keuangan dapat diaudit dengan mudah

4. **Fleksibel**
   - Dapat diakses kapan saja dan di mana saja
   - Antarmuka responsif untuk berbagai ukuran layar

## Panduan Implementasi Komprehensif

### 1. Fase Persiapan (Minggu 1-2)
#### Infrastruktur
- Verifikasi koneksi internet stabil dengan bandwidth minimal 10 Mbps
- Siapkan perangkat akses (komputer/tablet) untuk setiap operator
- Instalasi aplikasi pendukung (browser terbaru, office suite)
- Konfigurasi jaringan internal sekolah

#### Persiapan Data
- Kumpulkan data awal:
  - Data siswa (NIS, nama, kelas, dll.)
  - Data guru dan staf
  - Mata pelajaran dan kurikulum
  - Jadwal pelajaran
  - Data keuangan (jika ada)
- Format data dalam template Excel yang disediakan
- Verifikasi kelengkapan dan keakuratan data

### 2. Fase Pelatihan (Minggu 3-4)
#### Pelatihan Admin/Operator (2 hari)
- Pengenalan sistem dan antarmuka admin
- Manajemen pengguna dan hak akses
- Pengelolaan data master (siswa, guru, mata pelajaran)
- Pembuatan laporan
- Troubleshooting dasar

#### Pelatihan Guru (3 hari)
- Pengisian jadwal mengajar
- Pengelolaan kelas digital
- Input nilai dan presensi
- Pemanfaatan fitur e-learning
- Penggunaan modul penilaian

#### Sosialisasi ke Siswa dan Orang Tua
- Pembuatan panduan pengguna
- Video tutorial
- Sesi tanya jawab
- Demo penggunaan aplikasi mobile

### 3. Fase Uji Coba (Minggu 5-6)
#### Uji Coba Terbatas
- Melibatkan 1-2 kelas per jenjang
- Uji semua fitur utama:
  - Presensi digital
  - Pembelajaran online
  - Penilaian
  - Komunikasi
- Kumpulkan feedback pengguna

#### Evaluasi dan Perbaikan
- Analisis masalah teknis
- Penyesuaian kebutuhan khusus
- Optimasi performa sistem
- Perbaikan antarmuka berdasarkan masukan

### 4. Fase Peluncuran (Minggu 7-8)
#### Persiapan Peluncuran
- Backup data uji coba
- Persiapkan data lengkap
- Siapkan tim dukungan teknis
- Buat jadwal dukungan 24/7

#### Implementasi Penuh
- Migrasi data lengkap
- Aktivasi semua fitur
- Peluncuran bertahap per jenjang
- Monitoring ketat minggu pertama

### 5. Fase Pasca Peluncuran
#### Dukungan dan Pemantauan
- Helpdesk aktif
- Pemantauan server 24/7
- Backup data harian
- Update berkala sistem

#### Evaluasi Berkala
- Evaluasi bulan pertama
- Survey kepuasan pengguna
- Pelaporan ke pimpinan sekolah
- Perencanaan pengembangan fitur tambahan

### 6. Dokumen Pendukung
- Buku Panduan Pengguna (Admin, Guru, Siswa, Orang Tua)
- SOP Penggunaan Sistem
- Panduan Troubleshooting
- Kontak Dukungan Teknis

### 7. Jadwal Implementasi
| Fase | Durasi | Penanggung Jawab |
|------|--------|------------------|
| Persiapan | 2 minggu | Tim IT Sekolah |
| Pelatihan | 2 minggu | Tim Implementasi |
| Uji Coba | 2 minggu | Seluruh Pengguna |
| Peluncuran | 2 minggu | Manajemen Sekolah |
| Evaluasi | Berkelanjutan | Tim Penjamin Mutu |

## Kontak dan Dukungan

### Tim Implementasi
| Jabatan | Nama | Kontak |
|---------|------|--------|
| Project Manager | [Nama] | [Email] |
| Technical Lead | [Nama] | [Email] |
| Training Coordinator | [Nama] | [Email] |
| Helpdesk Support | [Nama] | [Email] |

### Jam Operasional Dukungan
- **Hari Kerja**: Senin - Jumat (08.00 - 17.00 WIB)
- **Sabtu**: 08.00 - 12.00 WIB
- **Dukungan Darurat**: 24/7 untuk masalah kritis

### Sumber Daya Tambahan
- [Panduan Pengguna](https://pijarsekolah.id/panduan)
- [Video Tutorial](https://youtube.com/pijarsekolah)
- [FAQ](https://pijarsekolah.id/faq)
- [Forum Diskusi](https://forum.pijarsekolah.id)

### Formulir Permintaan
- [Permintaan Fitur Baru](https://pijarsekolah.id/permintaan-fitur)
- [Laporan Masalah](https://pijarsekolah.id/laporan-masalah)
- [Permintaan Pelatihan](https://pijarsekolah.id/pelatihan)

---
*Dokumen ini diperbarui terakhir pada Juli 2024*
*© 2024 SIM Sekolah SMKN 1 Punggelan. Seluruh hak cipta dilindungi undang-undang.*

### Catatan Versi
| Versi | Tanggal | Deskripsi Perubahan |
|-------|---------|---------------------|
| 1.0 | 08 Juli 2024 | Dokumen awal dibuat |
| 1.1 | 08 Juli 2024 | Penambahan panduan implementasi |
| 1.2 | 08 Juli 2024 | Penyempurnaan struktur dokumen |
