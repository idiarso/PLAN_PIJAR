const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ChatMessage = sequelize.define('ChatMessage', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    senderId: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: 'ID pengguna yang mengirim pesan',
    },
    receiverId: {
      type: DataTypes.UUID,
      comment: 'ID pengguna penerima (untuk pesan pribadi)',
    },
    classroomId: {
      type: DataTypes.UUID,
      comment: 'ID kelas virtual (untuk pesan grup)',
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: 'Isi pesan teks',
    },
    messageType: {
      type: DataTypes.ENUM('text', 'image', 'file', 'system'),
      allowNull: false,
      defaultValue: 'text',
      comment: 'Tipe pesan yang dikirim',
    },
    fileUrl: {
      type: DataTypes.STRING,
      comment: 'URL ke file atau gambar jika messageType bukan text',
    },
    readAt: {
      type: DataTypes.DATE,
      comment: 'Waktu pesan dibaca oleh penerima',
    },
  }, {
    tableName: 'chat_messages',
    timestamps: true, // `createdAt` akan menjadi waktu pesan dikirim
  });

  return ChatMessage;
};
