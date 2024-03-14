import express from "express"
import { PORT,mongoDBURL } from "./config.js"
import mongoose from "mongoose"
import BooksRoute from "./routes/booksRoute.js"
import cors from "cors"
const app=express()

app.use(express.json())
app.use('/books',BooksRoute)
app.use(cors({
    origin:"http://localhost:5173"
    //,methods:['GET','POST','DELETE','PUT'],
    //allowedHeaders: ['Content-Type']
}))
mongoose.connect(mongoDBURL)
.then(()=>{
    console.log(`Connect to database`);
    app.listen(PORT,()=>{
        console.log(`App is listen to: http://localhost:${PORT}`);
    })
}).catch(
  (error)=>{
    console.log(`Some error has occured: ${error}`)
  }
)


app.get('/',(req,res)=>{
    console.log(req);

    return res.status(200).json('Its Ok')
})


