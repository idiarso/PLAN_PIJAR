const sequelize = require('./sequelize');

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true }); // Use { force: true } for development to drop and recreate tables
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
}

syncDatabase();
