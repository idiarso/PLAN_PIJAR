const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const LibraryLoan = sequelize.define('LibraryLoan', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    bookId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID buku yang dipinjam',
    },
    borrowerId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID pengguna (siswa/guru) yang meminjam buku',
    },
    loanDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: 'Tanggal buku dipinjam',
    },
    dueDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: 'Tanggal buku harus dikembalikan',
    },
    returnDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: 'Tanggal buku dikembalikan (null jika belum kembali)',
    },
    status: {
      type: DataTypes.ENUM('borrowed', 'returned', 'overdue', 'lost'),
      allowNull: false,
      defaultValue: 'borrowed',
      comment: 'Status peminjaman buku',
    },
    fineAmount: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0,
      comment: 'Jumlah denda jika ada (misal: karena terlambat atau hilang)',
    },
    librarianId: {
      type: DataTypes.UUID,
      allowNull: true, // Bisa null jika sistem otomatis
      comment: 'ID pustakawan yang memproses peminjaman/pengembalian',
    },
  }, {
    tableName: 'library_loans',
    timestamps: true,
  });

  return LibraryLoan;
};