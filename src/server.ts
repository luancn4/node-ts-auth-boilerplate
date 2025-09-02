import app from './app';
import config from './config/config';
import { sequelize } from './config/database';

const PORT = process.env.PORT || config.port;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to database');

    await sequelize.sync({ alter: true });
    console.log('Tables synchronized');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting application:', error);
  }
})();
