const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Internship = sequelize.define('Internship', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID siswa yang mengikuti PKL',
    },
    academicId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID tahun ajaran saat PKL dilaksanakan',
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Nama perusahaan/industri tempat PKL',
    },
    companyAddress: {
      type: DataTypes.STRING,
      comment: 'Alamat perusahaan/industri',
    },
    industrySupervisorName: {
      type: DataTypes.STRING,
      comment: 'Nama pembimbing dari pihak industri',
    },
    industrySupervisorContact: {
      type: DataTypes.STRING,
      comment: 'Kontak pembimbing dari pihak industri',
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: 'Tanggal mulai PKL',
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: 'Tanggal selesai PKL',
    },
    schoolSupervisorId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID guru pembimbing dari sekolah',
    },
    status: {
      type: DataTypes.ENUM('scheduled', 'ongoing', 'completed', 'cancelled', 'evaluated'),
      allowNull: false,
      defaultValue: 'scheduled',
      comment: 'Status program PKL',
    },
    dailyReportUrl: {
      type: DataTypes.STRING,
      comment: 'URL ke laporan harian siswa (jika ada)',
    },
    finalReportUrl: {
      type: DataTypes.STRING,
      comment: 'URL ke laporan akhir siswa (jika ada)',
    },
    evaluationScore: {
      type: DataTypes.FLOAT,
      comment: 'Nilai evaluasi dari pembimbing industri atau sekolah',
    },
    notes: {
      type: DataTypes.TEXT,
      comment: 'Catatan tambahan mengenai PKL',
    },
  }, {
    tableName: 'internships',
    timestamps: true,
  });

  return Internship;
};