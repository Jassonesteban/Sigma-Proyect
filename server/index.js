const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT} !`);
})


mongoose.connect("mongodb+srv://admin_sigmauser:pfaDKIJyPF@sigma.fpeqe.mongodb.net/sigma?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('DB connected!')
});