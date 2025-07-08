const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Schedule = sequelize.define('Schedule', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    academicId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID tahun ajaran terkait jadwal',
    },
    // subjectId: {
    //   type: DataTypes.UUID,
    //   allowNull: false,
    //   comment: 'ID mata pelajaran yang diajarkan',
    // },
    teacherId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID guru yang mengajar',
    },
    virtualClassroomId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID kelas virtual/rombongan belajar yang mengikuti jadwal ini',
    },
    roomId: {
      type: DataTypes.UUID,
      allowNull: true, // Bisa null jika kelas virtual murni
      comment: 'ID ruangan fisik tempat pelajaran diadakan (jika ada)',
    },
    dayOfWeek: {
      type: DataTypes.ENUM('Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'),
      allowNull: false,
      comment: 'Hari dalam seminggu',
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false,
      comment: 'Waktu mulai pelajaran',
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false,
      comment: 'Waktu selesai pelajaran',
    },
    scheduleType: {
      type: DataTypes.ENUM('Pelajaran', 'Ekstrakurikuler', 'Ujian', 'Lainnya'),
      allowNull: false,
      defaultValue: 'Pelajaran',
      comment: 'Tipe jadwal',
    },
    status: {
      type: DataTypes.ENUM('active', 'cancelled', 'completed'),
      allowNull: false,
      defaultValue: 'active',
      comment: 'Status jadwal',
    },
    notes: {
      type: DataTypes.TEXT,
      comment: 'Catatan tambahan mengenai jadwal',
    },
  }, {
    tableName: 'schedules',
    timestamps: true,
  });

  return Schedule;
};