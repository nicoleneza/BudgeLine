import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"

export async function Post(req,res){
    const body = await req.json()

    const user = await prisma.User.create({
        body:{
            email: body.email,
            password: await bcrypt.hash(body.password,10)
        }
    })
} 