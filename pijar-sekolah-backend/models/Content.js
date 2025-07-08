const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Content = sequelize.define('Content', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Judul konten pembelajaran',
    },
    contentType: {
      type: DataTypes.ENUM('document', 'video', 'audio', 'image', 'link', 'quiz', 'other'),
      allowNull: false,
      comment: 'Tipe konten (misal: dokumen, video, link)',
    },
    description: {
      type: DataTypes.TEXT,
      comment: 'Deskripsi singkat atau ringkasan konten',
    },
    url: {
      type: DataTypes.STRING,
      comment: 'URL atau path ke file konten (jika ada)',
    },
    authorId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID pengguna (guru) yang mengunggah konten',
    },
    academicId: {
      type: DataTypes.UUID,
      allowNull: true, // Konten bisa umum atau spesifik tahun ajaran
      comment: 'ID tahun ajaran terkait konten',
    },
    // subjectId: {
    //   type: DataTypes.UUID,
    //   allowNull: true,
    //   comment: 'ID mata pelajaran terkait konten',
    // },
    // classId: {
    //   type: DataTypes.UUID,
    //   allowNull: true,
    //   comment: 'ID kelas terkait konten',
    // },
    visibility: {
      type: DataTypes.ENUM('public', 'private', 'class_only', 'subject_only'),
      allowNull: false,
      defaultValue: 'public',
      comment: 'Visibilitas konten',
    },
    status: {
      type: DataTypes.ENUM('draft', 'published', 'archived'),
      allowNull: false,
      defaultValue: 'draft',
      comment: 'Status konten',
    },
    tags: {
      type: DataTypes.STRING, // Bisa disimpan sebagai string koma-terpisah
      comment: 'Kata kunci atau tag untuk konten',
    },
  }, {
    tableName: 'contents',
    timestamps: true,
  });

  return Content;
};
