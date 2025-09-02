import app from './app';
import config from './config/config';
import { sequelize } from './config/database';

const PORT = process.env.PORT || config.port;

(async () => {
  try {
    console.log('Starting app...');
    console.log('PORT env:', process.env.PORT);
    console.log('DB host:', process.env.MYSQLHOST);

    await sequelize.authenticate();
    console.log('Connected to database');

    await sequelize.sync({ alter: true });
    console.log('Tables synchronized');

    app.listen(PORT as number, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting application:', error);
  }
})();
