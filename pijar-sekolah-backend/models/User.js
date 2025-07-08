const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      comment: 'Username untuk login',
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Hash kata sandi pengguna',
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true, // Bisa null jika tidak semua user punya email
      comment: 'Alamat email pengguna',
    },
    phoneNumber: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
      comment: 'Nomor telepon pengguna',
    },
    role: {
      type: DataTypes.ENUM('admin', 'teacher', 'student', 'parent', 'staff'),
      allowNull: false,
      defaultValue: 'student',
      comment: 'Peran pengguna dalam sistem',
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Nama depan pengguna',
    },
    lastName: {
      type: DataTypes.STRING,
      comment: 'Nama belakang pengguna',
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName || ''}`.trim();
      },
      comment: 'Nama lengkap pengguna (gabungan nama depan dan belakang)',
    },
    nis: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true, // Hanya untuk siswa
      comment: 'Nomor Induk Siswa (untuk peran student)',
    },
    nip: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true, // Hanya untuk guru/staf
      comment: 'Nomor Induk Pegawai (untuk peran teacher/staff)',
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      comment: 'Tanggal lahir pengguna',
    },
    gender: {
      type: DataTypes.ENUM('Laki-laki', 'Perempuan'),
      comment: 'Jenis kelamin pengguna',
    },
    address: {
      type: DataTypes.TEXT,
      comment: 'Alamat lengkap pengguna',
    },
    profilePictureUrl: {
      type: DataTypes.STRING,
      comment: 'URL gambar profil pengguna',
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive', 'suspended'),
      defaultValue: 'active',
      comment: 'Status akun pengguna',
    },
    schoolId: {
      type: DataTypes.UUID,
      allowNull: true, // Bisa null jika user global admin
      comment: 'ID sekolah tempat pengguna terdaftar',
    },
    parentId: {
      type: DataTypes.UUID,
      allowNull: true, // Hanya untuk siswa, mengacu ke user role parent
      comment: 'ID pengguna orang tua/wali (untuk peran student)',
    },
    resetPasswordToken: {
      type: DataTypes.STRING,
      comment: 'Token untuk reset password',
    },
    resetPasswordExpires: {
      type: DataTypes.DATE,
      comment: 'Waktu kadaluarsa token reset password',
    },
  }, {
    tableName: 'users',
    timestamps: true,
  });

  return User;
};