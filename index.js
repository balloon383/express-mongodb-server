import express from 'express'
import mongoose from 'mongoose';
import router from './router.js';


console.log('SERVER IS STARTING')

const PORT = 5000
const DB_URL = "mongodb+srv://balloon383:jokkeer228@myfirstserver-db.zi2kr6b.mongodb.net/";
const app = express()

app.use(express.json())
app.use('/api', router)
//app.use('/api', users)

app.get("/", (req, res) => {
  res.status(200).json('SERVER IS WORKING');
});   


async function startApp() {
  try {

    await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})

    app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));

  } catch (e) {
    console.log(e)
  }
}

startApp()