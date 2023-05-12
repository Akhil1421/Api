const express = require("express")
const app = express()
const port = 3000
const router = require("./routes/router")
const {connectdb} = require('./db/connect')
require('dotenv').config()

app.get("/", (req,res)=>{
    res.send('<h1>API</h1><a href="/api/v1/all">Products Route</a>')
})
app.use(express.json())
app.use("/api/v1",router)

const start = async()=>{
    try {
        await connectdb(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log(`Listening at the port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
