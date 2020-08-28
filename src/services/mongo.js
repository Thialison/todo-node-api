require('dotenv').config()

const mongoose = require('mongoose');
mongoose.connect(`mongodb://${process.env.MONGO_HOST}` +
  `:27017/${process.env.MONGO_DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});
