const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const {UserRouter, AuthRouter, FilmRouter} = require('./routes')

const app = express();



require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())


app.use('/authorization', UserRouter)
app.use('/auth', AuthRouter)
app.use('/about-film', FilmRouter)



app.use((err, req, res, next) => {
    res.status(404).json(err.message || "Here must be massage from Error")
})

app.listen(5000, () => {
    mongoose.connect('mongodb://localhost:27017/Last_Project')
    console.log("Server has started");
})

