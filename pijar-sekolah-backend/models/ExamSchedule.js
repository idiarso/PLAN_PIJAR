const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ExamSchedule = sequelize.define('ExamSchedule', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    cbtExamId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID ujian CBT yang dijadwalkan',
    },
    roomId: {
      type: DataTypes.UUID,
      allowNull: true, // Ujian bisa saja tidak terikat pada ruangan fisik
      comment: 'ID ruangan ujian (jika ada)',
    },
    academicId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID tahun ajaran saat ujian dijadwalkan',
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: 'Waktu mulai jadwal ujian',
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: 'Waktu selesai jadwal ujian',
    },
    supervisorId: {
      type: DataTypes.UUID,
      allowNull: true, // Pengawas bisa ditambahkan nanti
      comment: 'ID pengguna (guru/staf) yang mengawasi ujian',
    },
    status: {
      type: DataTypes.ENUM('scheduled', 'active', 'completed', 'cancelled'),
      allowNull: false,
      defaultValue: 'scheduled',
      comment: 'Status jadwal ujian',
    },
    notes: {
      type: DataTypes.TEXT,
      comment: 'Catatan tambahan untuk jadwal ujian',
    },
    // targetClassId: {
    //   type: DataTypes.UUID,
    //   allowNull: true,
    //   comment: 'ID kelas yang mengikuti ujian ini (jika spesifik)',
    // },
  }, {
    tableName: 'exam_schedules',
    timestamps: true,
  });

  return ExamSchedule;
};
