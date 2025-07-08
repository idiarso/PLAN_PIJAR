const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const VirtualClassroom = sequelize.define('VirtualClassroom', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Nama kelas virtual (misal: X IPA 1, XI TKJ 2)',
    },
    description: {
      type: DataTypes.TEXT,
      comment: 'Deskripsi singkat mengenai kelas virtual',
    },
    classCode: {
      type: DataTypes.STRING,
      unique: true,
      comment: 'Kode unik untuk kelas virtual (bisa digunakan untuk bergabung)',
    },
    gradeLevel: {
      type: DataTypes.ENUM('X', 'XI', 'XII', 'Umum'),
      allowNull: false,
      comment: 'Tingkat kelas',
    },
    major: {
      type: DataTypes.STRING,
      comment: 'Jurusan (misal: IPA, IPS, TKJ, Akuntansi)',
    },
    homeroomTeacherId: {
      type: DataTypes.UUID,
      allowNull: true, // Bisa null jika belum ditentukan
      comment: 'ID guru wali kelas',
    },
    academicId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID tahun ajaran kelas ini',
    },
    schoolId: {
      type: DataTypes.UUID,
      allowNull: true, // Jika multi-sekolah
      comment: 'ID sekolah tempat kelas ini berada',
    },
    maxStudents: {
      type: DataTypes.INTEGER,
      comment: 'Jumlah maksimum siswa dalam kelas ini',
    },
    meetingLink: {
      type: DataTypes.STRING,
      comment: 'Link untuk pertemuan online (misal: Google Meet, Zoom)',
    },
    status: {
      type: DataTypes.ENUM('active', 'archived'),
      defaultValue: 'active',
      comment: 'Status kelas virtual',
    },
  }, {
    tableName: 'virtual_classrooms',
    timestamps: true,
  });

  return VirtualClassroom;
};