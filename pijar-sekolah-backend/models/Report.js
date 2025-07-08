const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Report = sequelize.define('Report', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Judul laporan',
    },
    reportType: {
      type: DataTypes.ENUM('Absensi', 'Nilai', 'Keuangan', 'PKL', 'Izin', 'Lainnya'),
      allowNull: false,
      comment: 'Tipe laporan yang dihasilkan',
    },
    description: {
      type: DataTypes.TEXT,
      comment: 'Deskripsi singkat mengenai laporan',
    },
    parameters: {
      type: DataTypes.JSONB,
      comment: 'Parameter yang digunakan untuk menghasilkan laporan (misal: tanggal, kelas, mata pelajaran)',
    },
    reportUrl: {
      type: DataTypes.STRING,
      comment: 'URL atau path ke file laporan yang dihasilkan (misal: PDF, Excel)',
    },
    status: {
      type: DataTypes.ENUM('generated', 'failed', 'pending'),
      allowNull: false,
      defaultValue: 'pending',
      comment: 'Status pembuatan laporan',
    },
    generatedAt: {
      type: DataTypes.DATE,
      comment: 'Waktu laporan dihasilkan',
    },
    createdBy: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID pengguna yang membuat permintaan laporan',
    },
    academicId: {
      type: DataTypes.UUID,
      allowNull: true, // Laporan bisa tidak terikat tahun ajaran
      comment: 'ID tahun ajaran terkait laporan',
    },
  }, {
    tableName: 'reports',
    timestamps: true,
  });

  return Report;
};