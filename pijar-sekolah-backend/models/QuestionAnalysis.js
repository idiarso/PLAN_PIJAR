const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const QuestionAnalysis = sequelize.define('QuestionAnalysis', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    examQuestionId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID pertanyaan ujian yang dianalisis',
    },
    cbtExamId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID ujian CBT tempat pertanyaan ini digunakan',
    },
    totalRespondents: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: 'Jumlah total siswa yang menjawab pertanyaan ini',
    },
    correctRespondents: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: 'Jumlah siswa yang menjawab pertanyaan ini dengan benar',
    },
    difficultyIndex: {
      type: DataTypes.FLOAT,
      comment: 'Indeks kesulitan soal (0-1)',
    },
    discriminationIndex: {
      type: DataTypes.FLOAT,
      comment: 'Indeks daya beda soal (-1 sampai 1)',
    },
    guessingIndex: {
      type: DataTypes.FLOAT,
      comment: 'Indeks keberuntungan/tebakan',
    },
    analysisDate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: 'Tanggal analisis dilakukan',
    },
    analysisType: {
      type: DataTypes.ENUM('pre_test', 'post_test', 'formative', 'summative', 'other'),
      comment: 'Tipe analisis (misal: analisis setelah ujian, atau analisis awal)',
    },
    analystId: {
      type: DataTypes.UUID,
      allowNull: true, // Bisa otomatis oleh sistem
      comment: 'ID pengguna (guru/staf) yang melakukan analisis',
    },
    notes: {
      type: DataTypes.TEXT,
      comment: 'Catatan atau rekomendasi berdasarkan hasil analisis',
    },
  }, {
    tableName: 'question_analyses',
    timestamps: true,
  });

  return QuestionAnalysis;
};