const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://sivani_r_anil:siva123@ac-0k7dbum-shard-00-00.ojotgu3.mongodb.net:27017,ac-0k7dbum-shard-00-01.ojotgu3.mongodb.net:27017,ac-0k7dbum-shard-00-02.ojotgu3.mongodb.net:27017/evchargedb?ssl=true&replicaSet=atlas-gxc29u-shard-0&authSource=admin&appName=Cluster0").then(
    () => {
        console.log("MongoDb connected")
    }
).catch(
    (error) => {
        console.log("error")
    }
)



const book =mongoose.model("Bookings", new mongoose.Schema(
    {
        id:String,
        name:String,
        email:String,
        phone:String,
        regNo:String,
        brand:String,
        model:String,
        battery:String,
        connector:String,
        date:String,
        slot:String,
        estimatedUnit:String,
        chargingBayNo:String
    }
))


app.post("/add-vehicle",async (req,res) =>{
    await book.create(req.body)
    res.json({"status":"success"})
})


app.post("/view-bookings",async(req,res)=>{
    const bookings=await book.find()
    res.json(bookings)
})



app.listen(3000, () => {
    console.log("Server started")
})