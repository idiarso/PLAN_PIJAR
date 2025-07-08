const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const LeavePermit = sequelize.define('LeavePermit', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID siswa yang mengajukan izin',
    },
    academicId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID tahun ajaran saat izin diajukan',
    },
    permitType: {
      type: DataTypes.ENUM('Masuk', 'Keluar', 'Tidak Hadir'),
      allowNull: false,
      comment: 'Jenis izin: Masuk, Keluar, atau Tidak Hadir (misal: sakit, izin)',
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: 'Alasan pengajuan izin',
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: 'Tanggal mulai izin',
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: 'Tanggal selesai izin',
    },
    startTime: {
      type: DataTypes.TIME,
      comment: 'Waktu mulai izin (jika izin harian)',
    },
    endTime: {
      type: DataTypes.TIME,
      comment: 'Waktu selesai izin (jika izin harian)',
    },
    status: {
      type: DataTypes.ENUM('Pending', 'Approved', 'Rejected', 'Cancelled'),
      allowNull: false,
      defaultValue: 'Pending',
      comment: 'Status persetujuan izin',
    },
    approvedById: {
      type: DataTypes.UUID,
      allowNull: true, // Bisa null jika masih pending
      comment: 'ID pengguna (guru/staf) yang menyetujui atau menolak izin',
    },
    approvalDate: {
      type: DataTypes.DATE,
      comment: 'Tanggal dan waktu persetujuan atau penolakan izin',
    },
    notes: {
      type: DataTypes.TEXT,
      comment: 'Catatan tambahan dari pemberi izin',
    },
    proofUrl: {
      type: DataTypes.STRING,
      comment: 'URL ke bukti pendukung (misal: surat dokter)',
    },
  }, {
    tableName: 'leave_permits',
    timestamps: true,
  });

  return LeavePermit;
};
