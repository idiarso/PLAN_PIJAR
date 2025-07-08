const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Attendance = sequelize.define('Attendance', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID siswa yang diabsen',
    },
    scheduleId: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: 'ID jadwal pelajaran terkait (jika ada)',
    },
    academicId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID tahun ajaran saat absensi dicatat',
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: 'Tanggal absensi',
    },
    status: {
      type: DataTypes.ENUM('Hadir', 'Sakit', 'Izin', 'Alpa', 'Terlambat'),
      allowNull: false,
      comment: 'Status kehadiran siswa',
    },
    checkInTime: {
      type: DataTypes.TIME,
      comment: 'Waktu masuk siswa',
    },
    checkOutTime: {
      type: DataTypes.TIME,
      comment: 'Waktu pulang siswa',
    },
    remarks: {
      type: DataTypes.TEXT,
      comment: 'Catatan tambahan dari guru, misal: alasan izin/sakit',
    },
    proof: {
      type: DataTypes.STRING,
      comment: 'URL atau path ke file bukti (misal: surat dokter)',
    },
    recordedById: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID pengguna (guru/staf) yang mencatat absensi',
    },
  }, {
    tableName: 'attendances',
    timestamps: true,
  });

  return Attendance;
};
