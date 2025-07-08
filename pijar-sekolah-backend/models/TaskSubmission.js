const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TaskSubmission = sequelize.define('TaskSubmission', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    taskId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID tugas yang disubmit',
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID siswa yang melakukan submit tugas',
    },
    submissionDate: {
      type: DataTypes.DATE,
      comment: 'Tanggal dan waktu submit tugas',
    },
    submissionType: {
      type: DataTypes.ENUM('file', 'text', 'link'),
      comment: 'Tipe submit (file, teks langsung, atau link)',
    },
    fileUrl: {
      type: DataTypes.STRING,
      comment: 'URL ke file submit (jika tipe file)',
    },
    submissionText: {
      type: DataTypes.TEXT,
      comment: 'Teks submit (jika tipe teks)',
    },
    submissionLink: {
      type: DataTypes.STRING,
      comment: 'Link submit (jika tipe link)',
    },
    submissionStatus: {
      type: DataTypes.ENUM('submitted', 'late', 'not_submitted', 'graded'),
      defaultValue: 'not_submitted',
      comment: 'Status pengumpulan tugas',
    },
    grade: {
      type: DataTypes.FLOAT,
      comment: 'Nilai yang diberikan untuk submit tugas ini',
    },
    gradedBy: {
      type: DataTypes.UUID,
      allowNull: true, // Bisa null jika belum dinilai
      comment: 'ID pengguna (guru) yang menilai tugas',
    },
    gradedAt: {
      type: DataTypes.DATE,
      comment: 'Tanggal dan waktu tugas dinilai',
    },
    teacherComments: {
      type: DataTypes.TEXT,
      comment: 'Komentar atau feedback dari guru',
    },
  }, {
    tableName: 'task_submissions',
    timestamps: true,
  });

  return TaskSubmission;
};