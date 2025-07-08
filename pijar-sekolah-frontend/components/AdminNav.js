import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const menuStructure = [
  { name: 'Beranda', path: '/admin/dashboard', icon: '🏠' },
  { name: 'Menu Utama', path: null, icon: '📋' },
  {
    name: 'Kehadiran',
    path: null,
    icon: '📅',
    subMenu: []
  },
  {
    name: 'CBT',
    path: null,
    icon: '📝',
    subMenu: [
      { name: 'Upload Soal', path: '/admin/cbt/upload-soal' },
      { name: 'Bank Soal', path: '/admin/cbt/bank-soal' },
      { name: 'Daftar Jenis Ujian', path: '/admin/cbt/jenis-ujian' },
      { name: 'Daftar Ruangan', path: '/admin/cbt/daftar-ruangan' },
      { name: 'Penjadwalan', path: '/admin/cbt/penjadwalan' },
      { name: 'Pelaksanaan', path: '/admin/cbt/pelaksanaan' },
      { name: 'Penilaian', path: '/admin/cbt/penilaian' },
      { name: 'Analisis Butir Soal', path: '/admin/cbt/analisis-butir-soal' },
    ]
  },
  {
    name: 'Tugas',
    path: null,
    icon: '📚',
    subMenu: [
      { name: 'Daftar Tugas', path: '/admin/tugas/daftar-tugas' },
      { name: 'Unduh Tugas', path: '/admin/tugas/unduh-tugas' },
      { name: 'Nilai Tugas', path: '/admin/tugas/nilai-tugas' },
    ]
  },
  {
    name: 'Menu Lainnya',
    path: null,
    icon: '📂',
    subMenu: [
      { name: 'Data Sekolah', path: '/admin/menu-lainnya/data-sekolah' },
    ]
  },
  {
    name: 'Konten Belajar',
    path: null,
    icon: '📖',
    subMenu: [
      { name: 'Katalog Konten', path: '/admin/konten-belajar/katalog-konten' },
      { name: 'Pengaturan Konten', path: '/admin/konten-belajar/pengaturan-konten' },
      { name: 'Kelas Virtual', path: '/admin/konten-belajar/kelas-virtual' },
    ]
  },
  {
    name: 'Laporan',
    path: null,
    icon: '📊',
    subMenu: [
      { name: 'Data Kehadiran Keseluruhan', path: '/admin/laporan/data-kehadiran' },
      { name: 'Data Performa Siswa', path: '/admin/laporan/data-performa' },
    ]
  },
  {
    name: 'Akademik',
    path: null,
    icon: '🎓',
    subMenu: [
      { name: 'Manajemen Berkas', path: '/admin/akademik/manajemen-berkas' },
      { name: 'Modul Ajar/ATP', path: '/admin/akademik/modul-ajar' },
      { name: 'Kalender Pendidikan', path: '/admin/akademik/kalender-pendidikan' },
      { name: 'Jadwal Pelajaran', path: '/admin/akademik/jadwal-pelajaran' },
    ]
  },
  {
    name: 'Pengaturan Nilai',
    path: null,
    icon: '⚙️',
    subMenu: [
      { name: 'Pengaturan KKM', path: '/admin/pengaturan-nilai/kkm' },
      { name: 'Predikat Nilai', path: '/admin/pengaturan-nilai/predikat-nilai' },
    ]
  },
  {
    name: 'e-Rapor',
    path: null,
    icon: '📋',
    subMenu: [
      { name: 'Rekap Mapel', path: '/admin/e-rapor/rekap-mapel' },
      { name: 'e-Rapor Siswa', path: '/admin/e-rapor/e-rapor-siswa' },
    ]
  },
  { name: 'Pengumuman', path: '/admin/pengumuman', icon: '💡' },
  { name: 'Obrolan', path: '/admin/obrolan', icon: '💬' },
];

function MenuItem({ item, router }) {
  const [open, setOpen] = useState(false);

  if (item.subMenu && item.subMenu.length > 0) {
    return (
      <li>
        <div
          onClick={() => setOpen(!open)}
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.5rem 0',
          }}
        >
          <span>{item.icon} {item.name}</span>
          <span>{open ? '▲' : '▼'}</span>
        </div>
        {open && (
          <ul style={{ listStyle: 'none', paddingLeft: '1rem' }}>
            {item.subMenu.map(sub => (
              <li key={sub.path} style={{ padding: '0.25rem 0' }}>
                <Link href={sub.path}>
                  <a style={{
                    color: router.pathname === sub.path ? 'blue' : 'black',
                    fontWeight: router.pathname === sub.path ? 'bold' : 'normal',
                    textDecoration: 'none',
                  }}>
                    {sub.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li style={{ padding: '0.5rem 0' }}>
      <Link href={item.path}>
        <a style={{
          color: router.pathname === item.path ? 'blue' : 'black',
          fontWeight: router.pathname === item.path ? 'bold' : 'normal',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
        }}>
          <span style={{ marginRight: '0.5rem' }}>{item.icon}</span> {item.name}
        </a>
      </Link>
    </li>
  );
}

export default function AdminNav() {
  const router = useRouter();

  return (
    <nav style={{ width: '250px', background: '#f0f0f0', padding: '1rem', height: '100vh', overflowY: 'auto' }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {menuStructure.map(item => (
          <MenuItem key={item.name} item={item} router={router} />
        ))}
      </ul>
    </nav>
  );
}
