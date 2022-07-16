const mongoose = require('mongoose')
mongoose.Promise = global.Promise


async function StartMongo(connectionString) {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  await mongoose.connect(connectionString, options)
  .then(()=>console.log("[database] connected to mongoDB"))
  .catch(err=> console.error(err));
}

module.exports = { StartMongo }