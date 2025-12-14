import { Router } from "express";
import {client} from "@repo/db";
import { userMiddleware } from "../../middleware/user.js";
import { AddElementSchema,CreateElementSchema,CreateSpaceSchema,DeleteElementSchema } from "../../types/index.js";
export const spaceRouter = Router();
spaceRouter.post("/",userMiddleware, async(req,res)=>{
    const parsedData=CreateSpaceSchema.safeParse(req.body)
    if(!parsedData.success){
        res.status(400).json({message: "Validation failed"})
        return
    }

    if(!parsedData.data.mapId){
        const space =await client.space.create({
            data:{
                name: parsedData.data.name,
                width
            }
        })
    }
})
