const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Announcement = sequelize.define('Announcement', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Judul pengumuman',
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: 'Isi lengkap dari pengumuman',
    },
    authorId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID pengguna (author) yang membuat pengumuman',
    },
    target: {
      type: DataTypes.ENUM('all', 'teachers', 'students', 'parents'),
      allowNull: false,
      defaultValue: 'all',
      comment: 'Target audiens pengumuman',
    },
    status: {
      type: DataTypes.ENUM('published', 'draft', 'archived'),
      allowNull: false,
      defaultValue: 'draft',
      comment: 'Status pengumuman',
    },
    publishedAt: {
      type: DataTypes.DATE,
      comment: 'Tanggal dan waktu pengumuman dipublikasikan',
    },
    expiresAt: {
      type: DataTypes.DATE,
      comment: 'Tanggal dan waktu pengumuman tidak lagi ditampilkan',
    },
  }, {
    tableName: 'announcements',
    timestamps: true,
  });

  return Announcement;
};
