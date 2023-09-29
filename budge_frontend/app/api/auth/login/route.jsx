import prisma from '@/lib/prisma'

export async function post(req) {

    const body = await req.json()
    const user = await prisma.User.findFirst({
        where:{
            email:body.email,
            password:body.password
        }
    })
    if(user &&(await bcrypt.compare(body.password,user.password))){
    //     const token = jwt.sign({
    //         id:user.id,
    //         email:user.email
    //     },process.env.JWT_SECRET,{
    //         expiresIn:3600
    //     })
    //     res.json({token})
    // }else{
const { password,...userWithoutPass } = user
return new Response(JSON.stringify(userWithout))
}
else return new Response(JSON.stringify(null))
}
