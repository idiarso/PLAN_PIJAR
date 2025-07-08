const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Academic = sequelize.define('Academic', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Tahun ajaran, contoh: 2024/2025',
    },
    semester: {
      type: DataTypes.ENUM('Ganjil', 'Genap'),
      allowNull: false,
      comment: 'Semester ajaran',
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive', 'archived'),
      allowNull: false,
      defaultValue: 'inactive',
      comment: 'Status tahun ajaran: active (sedang berjalan), inactive (belum/tidak aktif), archived (sudah selesai)',
    },
    description: {
      type: DataTypes.TEXT,
      comment: 'Deskripsi atau catatan tambahan mengenai tahun ajaran',
    },
  }, {
    tableName: 'academics',
    timestamps: true,
  });

  return Academic;
};
