import app from './app';
import config from './config/config';
import { sequelize } from './config/database';

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to database');

    await sequelize.sync({ alter: true });
    console.log('Tables synchronized');

    app.listen(config.port, () => {
      console.log(`Server running on http://localhost:${config.port}`);
    });
  } catch (error) {
    console.error('Error starting application:', error);
  }
})();
