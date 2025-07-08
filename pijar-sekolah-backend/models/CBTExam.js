const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CBTExam = sequelize.define('CBTExam', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Judul atau nama ujian',
    },
    description: {
      type: DataTypes.TEXT,
      comment: 'Deskripsi lengkap mengenai ujian',
    },
    examType: {
      type: DataTypes.ENUM('Ulangan Harian', 'UTS', 'UAS', 'Try Out', 'Lainnya'),
      allowNull: false,
      comment: 'Jenis ujian yang dilaksanakan',
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: 'Waktu mulai ujian bisa diakses',
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: 'Waktu selesai ujian tidak bisa diakses lagi',
    },
    durationMinutes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Durasi pengerjaan ujian dalam menit',
    },
    passingScore: {
      type: DataTypes.INTEGER,
      defaultValue: 70,
      comment: 'Nilai minimum kelulusan',
    },
    status: {
      type: DataTypes.ENUM('draft', 'published', 'ongoing', 'completed', 'archived'),
      allowNull: false,
      defaultValue: 'draft',
      comment: 'Status dari jadwal ujian',
    },
    token: {
      type: DataTypes.STRING,
      unique: true,
      comment: 'Token unik untuk siswa masuk ke ruang ujian',
    },
    questionPackageId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID paket soal yang digunakan dalam ujian ini',
    },
    academicId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID tahun ajaran saat ujian diadakan',
    },
    authorId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID pengguna (guru) yang membuat ujian',
    },
  }, {
    tableName: 'cbt_exams',
    timestamps: true,
  });

  return CBTExam;
};
