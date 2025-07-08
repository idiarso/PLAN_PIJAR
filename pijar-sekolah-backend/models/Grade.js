const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Grade = sequelize.define('Grade', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID siswa yang mendapatkan nilai',
    },
    academicId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID tahun ajaran saat nilai diberikan',
    },
    // subjectId: {
    //   type: DataTypes.UUID,
    //   allowNull: false,
    //   comment: 'ID mata pelajaran terkait nilai',
    // },
    scheduleId: {
      type: DataTypes.UUID,
      allowNull: true, // Nilai bisa tidak terikat jadwal spesifik
      comment: 'ID jadwal pelajaran terkait nilai (jika ada)',
    },
    score: {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: 'Nilai yang diperoleh siswa',
    },
    gradeType: {
      type: DataTypes.ENUM('Tugas', 'Ulangan Harian', 'UTS', 'UAS', 'Nilai Akhir', 'Lainnya'),
      allowNull: false,
      comment: 'Jenis nilai (tugas, ulangan, UTS, UAS, dll.)',
    },
    weight: {
      type: DataTypes.FLOAT,
      defaultValue: 1.0,
      comment: 'Bobot nilai ini dalam perhitungan nilai akhir',
    },
    teacherId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID guru yang memberikan nilai',
    },
    notes: {
      type: DataTypes.TEXT,
      comment: 'Catatan tambahan dari guru mengenai nilai',
    },
  }, {
    tableName: 'grades',
    timestamps: true,
  });

  return Grade;
};