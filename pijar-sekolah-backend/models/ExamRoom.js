const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ExamRoom = sequelize.define('ExamRoom', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Nama ruangan ujian (misal: Lab Komputer 1, Ruang Ujian A)',
    },
    location: {
      type: DataTypes.STRING,
      comment: 'Lokasi fisik ruangan (misal: Gedung B, Lantai 3)',
    },
    capacity: {
      type: DataTypes.INTEGER,
      comment: 'Kapasitas maksimum siswa yang bisa menempati ruangan',
    },
    roomType: {
      type: DataTypes.ENUM('physical', 'virtual'),
      allowNull: false,
      defaultValue: 'physical',
      comment: 'Tipe ruangan: fisik atau virtual',
    },
    availabilityStatus: {
      type: DataTypes.ENUM('available', 'occupied', 'maintenance'),
      allowNull: false,
      defaultValue: 'available',
      comment: 'Status ketersediaan ruangan',
    },
    cbtExamId: {
      type: DataTypes.UUID,
      allowNull: true, // Ruangan bisa tidak terikat langsung ke satu ujian
      comment: 'ID ujian CBT yang sedang berlangsung di ruangan ini (jika ada)',
    },
    schoolId: {
      type: DataTypes.UUID,
      allowNull: true, // Jika aplikasi mendukung multi-sekolah
      comment: 'ID sekolah tempat ruangan ini berada',
    },
  }, {
    tableName: 'exam_rooms',
    timestamps: true,
  });

  return ExamRoom;
};
