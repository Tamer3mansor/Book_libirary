const express = require('express');
const connectDB = require('./Db/connect');
const Books = require('./Routers/Books_Router');

const app = express();
const port = process.env.port || 3000;
app.use(express.json());
app.use('/api', Books);
app.set('views', './src/views');
app.set('view engine', 'ejs');
const start = async () => {
  try {
    // eslint-disable-next-line no-undef
    await connectDB(process.env.uri);
    // eslint-disable-next-line no-console
    app.listen(3000, () => console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
app.get('/', (req, res) => {
  res.render('index');
});
start();
