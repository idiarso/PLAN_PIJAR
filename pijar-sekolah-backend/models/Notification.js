const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Notification = sequelize.define('Notification', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID pengguna penerima notifikasi',
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Judul singkat notifikasi',
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: 'Isi lengkap notifikasi',
    },
    notificationType: {
      type: DataTypes.ENUM('announcement', 'grade_update', 'task_reminder', 'chat_message', 'system_alert', 'other'),
      allowNull: false,
      defaultValue: 'system_alert',
      comment: 'Tipe notifikasi',
    },
    sourceId: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: 'ID dari entitas sumber (misal: Announcement ID, Task ID)',
    },
    sourceType: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Tipe dari entitas sumber (misal: Announcement, Task)',
    },
    link: {
      type: DataTypes.STRING,
      comment: 'URL atau path yang akan dituju ketika notifikasi diklik',
    },
    priority: {
      type: DataTypes.ENUM('low', 'medium', 'high'),
      defaultValue: 'medium',
      comment: 'Prioritas notifikasi',
    },
    readAt: {
      type: DataTypes.DATE,
      comment: 'Timestamp kapan notifikasi dibaca oleh pengguna',
    },
    expiresAt: {
      type: DataTypes.DATE,
      comment: 'Tanggal dan waktu notifikasi tidak lagi ditampilkan',
    },
  }, {
    tableName: 'notifications',
    timestamps: true,
  });

  return Notification;
};