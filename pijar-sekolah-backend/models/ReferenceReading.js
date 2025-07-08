const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ReferenceReading = sequelize.define('ReferenceReading', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    questionPackageId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID paket soal yang terkait dengan bacaan referensi ini',
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Judul bacaan referensi',
    },
    description: {
      type: DataTypes.TEXT,
      comment: 'Deskripsi singkat atau ringkasan bacaan',
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'URL atau path ke file bacaan referensi',
    },
    contentType: {
      type: DataTypes.ENUM('document', 'video', 'audio', 'image', 'link', 'other'),
      allowNull: false,
      defaultValue: 'document',
      comment: 'Tipe konten bacaan referensi',
    },
    authorId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID pengguna (guru) yang mengunggah bacaan referensi',
    },
    academicId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID tahun ajaran terkait bacaan referensi',
    },
    status: {
      type: DataTypes.ENUM('draft', 'published', 'archived'),
      allowNull: false,
      defaultValue: 'draft',
      comment: 'Status bacaan referensi',
    },
    tags: {
      type: DataTypes.STRING, // Bisa disimpan sebagai string koma-terpisah
      comment: 'Kata kunci atau tag untuk bacaan referensi',
    },
  }, {
    tableName: 'reference_readings',
    timestamps: true,
  });

  return ReferenceReading;
};