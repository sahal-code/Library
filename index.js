const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./src/routes/bookRoutes');
const borrowRoutes = require('./src/routes/borrowRoutes');
const sequelize = require('./src/config/database');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/books', bookRoutes);
app.use('/borrow', borrowRoutes);

sequelize.sync().then(() => {
  console.log('Database and tables synced');
  app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
  });
}).catch((error) => {
  console.error('Error syncing database:', error);
});
