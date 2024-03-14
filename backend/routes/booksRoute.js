import  express from "express";
import { book } from "../models/book.model.js";

const router=express.Router()


router.post('/',async (req,res)=>{
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear)
        {
            return res.status(400).send("Send all the required fields")
        }

        const newBook={
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear
        }

        const Book=await book.create(newBook);

        return res.status(200).json(Book)
    } catch (error) {
        console.log(`message: ${error.message}`)

        return res.status(500).send({message:error.message})
    }
})

router.get('/',async (req,res)=>{
    try {
        const Book= await book.find({});

        return res.status(200).send({
            count:Book.length,
            data:Book
        });
    } catch (error) {
        console.log(error.message)
        return res.status(500).send({message:error.message})
    }
})

router.get('/:id',async (req,res)=>{
    try {

        const {id}=req.params;
        const Book= await book.findById(id);
        
        return res.status(200).send({
            count:Book.length
            ,data:Book
        });
    } catch (error) {
        console.log(error.message)
        return res.status(500).send({message:error.message})
    }
})

router.put('/:id',async (req,res)=>{
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear)
        {
            return res.status(200).send("Send all the required fields");
        }

        const {id}=req.params;
        const Book= await book.findByIdAndUpdate(id,req.body);

        if(!Book)
        {
            return res.send(404).send("Book not found");
        }

        return res.status(200).json({message:"Book update Successfully"});
    } catch (error) {
        console.log(error.message)
        return res.status(500).send({message:error.message})
    }
})

router.delete('/:id',async (req,res)=>{
    try {
        const {id}=req.params;

        const Book=await book.findByIdAndDelete(id);
        console.log(Book)
        if(!Book)
        {
            return res.status(404).json({message:"Book not found"});
        }
        
        return res.status(200).json({message:"Books delete successfully"});

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message:error.message})
    }
})

export default router
