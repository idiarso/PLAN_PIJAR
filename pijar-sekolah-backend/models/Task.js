const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Task = sequelize.define('Task', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Judul tugas',
    },
    description: {
      type: DataTypes.TEXT,
      comment: 'Deskripsi lengkap tugas',
    },
    taskType: {
      type: DataTypes.ENUM('individual', 'group', 'project', 'quiz', 'other'),
      allowNull: false,
      defaultValue: 'individual',
      comment: 'Tipe tugas',
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: 'Batas waktu pengumpulan tugas',
    },
    publishedAt: {
      type: DataTypes.DATE,
      comment: 'Waktu tugas dipublikasikan',
    },
    status: {
      type: DataTypes.ENUM('draft', 'published', 'closed', 'archived'),
      defaultValue: 'draft',
      comment: 'Status tugas',
    },
    maxScore: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
      comment: 'Nilai maksimum yang bisa didapatkan dari tugas ini',
    },
    attachmentUrl: {
      type: DataTypes.STRING,
      comment: 'URL ke file lampiran tugas (misal: soal, materi)',
    },
    assignedBy: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID pengguna (guru) yang memberikan tugas',
    },
    academicId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID tahun ajaran terkait tugas',
    },
    virtualClassroomId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID kelas virtual/rombongan belajar yang mendapatkan tugas ini',
    },
    // subjectId: {
    //   type: DataTypes.UUID,
    //   allowNull: true,
    //   comment: 'ID mata pelajaran terkait tugas',
    // },
  }, {
    tableName: 'tasks',
    timestamps: true,
  });

  return Task;
};