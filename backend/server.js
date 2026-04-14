import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/database.js'
connectDB()
dotenv.config()
const PORT=process.env.PORT ||5000
const app=express()
app.use(cors())
app.use(express.json({}))
app.use(express.urlencoded({
    extended:true
}))
app.get('/',(req,res)=>{
    res.send("server runing ...")
})
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})