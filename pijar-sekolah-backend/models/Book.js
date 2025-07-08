const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Book = sequelize.define('Book', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Judul buku',
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Nama pengarang buku',
    },
    publisher: {
      type: DataTypes.STRING,
      comment: 'Nama penerbit buku',
    },
    publicationYear: {
      type: DataTypes.INTEGER,
      comment: 'Tahun buku diterbitkan',
    },
    isbn: {
      type: DataTypes.STRING,
      unique: true,
      comment: 'Nomor ISBN unik buku',
    },
    category: {
      type: DataTypes.STRING,
      comment: 'Kategori buku, misal: Fiksi, Non-Fiksi, Pelajaran',
    },
    language: {
      type: DataTypes.STRING,
      defaultValue: 'Indonesia',
      comment: 'Bahasa buku',
    },
    numberOfPages: {
      type: DataTypes.INTEGER,
      comment: 'Jumlah halaman buku',
    },
    totalStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: 'Jumlah total stok buku yang dimiliki',
    },
    availableStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: 'Jumlah stok buku yang tersedia untuk dipinjam',
    },
    location: {
      type: DataTypes.STRING,
      comment: 'Lokasi fisik buku di rak perpustakaan',
    },
    coverImage: {
      type: DataTypes.STRING,
      comment: 'URL atau path ke gambar sampul buku',
    },
    description: {
      type: DataTypes.TEXT,
      comment: 'Sinopsis atau deskripsi singkat buku',
    },
  }, {
    tableName: 'books',
    timestamps: true,
  });

  return Book;
};
