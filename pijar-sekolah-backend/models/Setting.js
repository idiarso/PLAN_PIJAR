const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Setting = sequelize.define('Setting', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: 'Kunci unik untuk pengaturan (misal: app_name, default_semester)',
    },
    value: {
      type: DataTypes.TEXT,
      comment: 'Nilai pengaturan',
    },
    valueType: {
      type: DataTypes.ENUM('string', 'number', 'boolean', 'json', 'date'),
      defaultValue: 'string',
      comment: 'Tipe data dari nilai pengaturan',
    },
    description: {
      type: DataTypes.TEXT,
      comment: 'Deskripsi singkat mengenai pengaturan ini',
    },
    scope: {
      type: DataTypes.ENUM('global', 'school', 'user'),
      defaultValue: 'global',
      comment: 'Cakupan pengaturan (global, per sekolah, atau per pengguna)',
    },
    schoolId: {
      type: DataTypes.UUID,
      allowNull: true, // Null jika scope global atau user
      comment: 'ID sekolah jika pengaturan berlaku per sekolah',
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: true, // Null jika scope global atau school
      comment: 'ID pengguna jika pengaturan berlaku per pengguna',
    },
    category: {
      type: DataTypes.STRING,
      comment: 'Kategori pengaturan (misal: Umum, Notifikasi, Keamanan)',
    },
    isEditable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      comment: 'Apakah pengaturan ini bisa diubah melalui antarmuka pengguna',
    },
  }, {
    tableName: 'settings',
    timestamps: true,
  });

  return Setting;
};