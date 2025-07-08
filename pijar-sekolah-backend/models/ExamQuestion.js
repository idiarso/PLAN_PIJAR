const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ExamQuestion = sequelize.define('ExamQuestion', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    questionPackageId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID paket soal tempat pertanyaan ini berada',
    },
    questionText: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: 'Teks lengkap pertanyaan',
    },
    questionType: {
      type: DataTypes.ENUM('multiple_choice', 'essay', 'true_false', 'matching'),
      allowNull: false,
      comment: 'Tipe pertanyaan (pilihan ganda, esai, dll.)',
    },
    options: {
      type: DataTypes.JSONB,
      comment: 'Pilihan jawaban untuk pertanyaan pilihan ganda (dalam format JSON)',
    },
    correctAnswer: {
      type: DataTypes.TEXT,
      comment: 'Jawaban yang benar (untuk pilihan ganda, bisa berupa indeks atau teks; untuk esai, bisa berupa kunci jawaban)',
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      comment: 'Bobot nilai untuk pertanyaan ini',
    },
    mediaUrl: {
      type: DataTypes.STRING,
      comment: 'URL ke media (gambar, audio, video) yang terkait dengan pertanyaan',
    },
    difficultyLevel: {
      type: DataTypes.ENUM('easy', 'medium', 'hard'),
      comment: 'Tingkat kesulitan pertanyaan',
    },
    explanation: {
      type: DataTypes.TEXT,
      comment: 'Penjelasan atau pembahasan jawaban yang benar',
    },
  }, {
    tableName: 'exam_questions',
    timestamps: true,
  });

  return ExamQuestion;
};
