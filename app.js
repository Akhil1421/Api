require('dotenv').config()
const express = require("express")
const app = express()
const port = 5000
const router = require("./routes/router")
const {connectdb} = require('./db/connect')
app.use(express.json())
app.get("/", (req,res)=>{
    res.send('<h1>API</h1><a href="/api/v1/all">Products Route</a>')
})
app.use("/api/v1",router)
const start = async()=>{
    try {
        await connectdb(process.env.MONGO_URI)
        app.listen(port, 
            console.log(`Listening at the port ${port}...`)
        )
    } catch (error) {
        console.log(error)
    }
}

start()
