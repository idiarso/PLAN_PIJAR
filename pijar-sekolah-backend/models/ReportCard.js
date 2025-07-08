const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ReportCard = sequelize.define('ReportCard', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID siswa pemilik rapor',
    },
    academicId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID tahun ajaran rapor ini dibuat',
    },
    schoolId: {
      type: DataTypes.UUID,
      allowNull: true, // Jika multi-sekolah
      comment: 'ID sekolah terkait rapor',
    },
    semester: {
      type: DataTypes.ENUM('Ganjil', 'Genap'),
      allowNull: false,
      comment: 'Semester rapor',
    },
    overallScore: {
      type: DataTypes.FLOAT,
      comment: 'Nilai rata-rata keseluruhan',
    },
    academicScore: {
      type: DataTypes.FLOAT,
      comment: 'Nilai rata-rata akademik',
    },
    nonAcademicScore: {
      type: DataTypes.FLOAT,
      comment: 'Nilai rata-rata non-akademik (ekskul, kepribadian)',
    },
    attendanceSummary: {
      type: DataTypes.JSONB,
      comment: 'Ringkasan absensi (misal: {hadir: 100, sakit: 2, izin: 1, alpa: 0})',
    },
    teacherNotes: {
      type: DataTypes.TEXT,
      comment: 'Catatan dari wali kelas mengenai perkembangan siswa',
    },
    principalNotes: {
      type: DataTypes.TEXT,
      comment: 'Catatan dari kepala sekolah',
    },
    homeroomTeacherId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID wali kelas yang membuat rapor',
    },
    principalId: {
      type: DataTypes.UUID,
      allowNull: true, // Bisa null jika belum disahkan
      comment: 'ID kepala sekolah yang mengesahkan rapor',
    },
    status: {
      type: DataTypes.ENUM('draft', 'finalized', 'published'),
      allowNull: false,
      defaultValue: 'draft',
      comment: 'Status rapor',
    },
    publishedDate: {
      type: DataTypes.DATEONLY,
      comment: 'Tanggal rapor dipublikasikan',
    },
    reportCardUrl: {
      type: DataTypes.STRING,
      comment: 'URL ke file rapor yang dihasilkan (misal: PDF)',
    },
  }, {
    tableName: 'report_cards',
    timestamps: true,
  });

  return ReportCard;
};