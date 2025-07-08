const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const School = sequelize.define('School', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Nama lengkap sekolah',
    },
    npsn: {
      type: DataTypes.STRING,
      unique: true,
      comment: 'Nomor Pokok Sekolah Nasional',
    },
    nss: {
      type: DataTypes.STRING,
      unique: true,
      comment: 'Nomor Statistik Sekolah',
    },
    address: {
      type: DataTypes.TEXT,
      comment: 'Alamat lengkap sekolah',
    },
    city: {
      type: DataTypes.STRING,
      comment: 'Kota/Kabupaten sekolah',
    },
    province: {
      type: DataTypes.STRING,
      comment: 'Provinsi sekolah',
    },
    postalCode: {
      type: DataTypes.STRING,
      comment: 'Kode pos sekolah',
    },
    phone: {
      type: DataTypes.STRING,
      comment: 'Nomor telepon sekolah',
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      comment: 'Alamat email resmi sekolah',
    },
    website: {
      type: DataTypes.STRING,
      comment: 'Alamat website resmi sekolah',
    },
    logoUrl: {
      type: DataTypes.STRING,
      comment: 'URL logo sekolah',
    },
    schoolType: {
      type: DataTypes.ENUM('Negeri', 'Swasta', 'SMK', 'SMA', 'SMP', 'SD'),
      comment: 'Tipe sekolah',
    },
    accreditation: {
      type: DataTypes.ENUM('A', 'B', 'C', 'Belum Terakreditasi'),
      comment: 'Akreditasi sekolah',
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active',
      comment: 'Status operasional sekolah',
    },
  }, {
    tableName: 'schools',
    timestamps: true,
  });

  return School;
};