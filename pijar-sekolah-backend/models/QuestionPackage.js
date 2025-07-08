const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const QuestionPackage = sequelize.define('QuestionPackage', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Judul paket soal (misal: Paket Soal UTS Matematika Kelas X)',
    },
    description: {
      type: DataTypes.TEXT,
      comment: 'Deskripsi singkat mengenai paket soal',
    },
    packageType: {
      type: DataTypes.ENUM('Ujian', 'Latihan', 'Bank Soal', 'Try Out'),
      allowNull: false,
      comment: 'Tipe paket soal',
    },
    level: {
      type: DataTypes.ENUM('Kelas X', 'Kelas XI', 'Kelas XII', 'Umum'),
      comment: 'Tingkat kelas yang dituju',
    },
    // subjectId: {
    //   type: DataTypes.UUID,
    //   allowNull: true,
    //   comment: 'ID mata pelajaran terkait paket soal',
    // },
    // classId: {
    //   type: DataTypes.UUID,
    //   allowNull: true,
    //   comment: 'ID kelas/jurusan terkait paket soal',
    // },
    academicId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID tahun ajaran terkait paket soal',
    },
    questionType: {
      type: DataTypes.ENUM('Pilihan Ganda', 'Esai', 'Campuran'),
      comment: 'Tipe pertanyaan dominan dalam paket soal',
    },
    totalQuestions: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      comment: 'Jumlah total pertanyaan dalam paket ini',
    },
    status: {
      type: DataTypes.ENUM('draft', 'ready', 'archived'),
      allowNull: false,
      defaultValue: 'draft',
      comment: 'Status paket soal',
    },
    createdBy: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID pengguna (guru) yang membuat paket soal',
    },
    lastModifiedBy: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: 'ID pengguna terakhir yang memodifikasi paket soal',
    },
    tags: {
      type: DataTypes.STRING, // Bisa disimpan sebagai string koma-terpisah
      comment: 'Kata kunci atau tag untuk paket soal',
    },
  }, {
    tableName: 'question_packages',
    timestamps: true,
  });

  return QuestionPackage;
};