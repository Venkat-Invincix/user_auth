const express = require('express')
const configureDB = require('./config/database')
const routes = require('./config/routes')
const app = express();
const PORT = 3050;
configureDB()

app.use(express.json());
app.use('/', routes)

app.listen(PORT, () => {
    console.log("server is running on port " + PORT)
})