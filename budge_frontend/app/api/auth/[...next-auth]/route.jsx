import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt"


const handler = NextAuth({
    providers:[
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              email: { label: "email", type: "email", placeholder: "jsmith" },
              password: { label: "Password", type: "password" }
            },                     
            async authorize(credentials) {
              // Add logic here to look up the user from the credentials supplied
             if(!credentials?.email||!credentials?.password){
              throw new Error("Email and Password must be provided")
             } 

              const user = await prisma.user.findUnique({
                where: {
                  email: credentials.email
                }
              });
              if(!user ||!user.hashedPassword){
                throw new Error("Email does not exist")
              }         
              const isValidPassword = await bcrypt.compare(credentials.password,hashedPassword);
              if(!isValidPassword){
                throw new Error("Invalid password")
              }   
              pages:{
                logIn : '/auth'
              }
              debug: process.env.NODE_ENV !== 'developement'
              session:{
                strategy:'jwt'
              }
            }
          })
    ]
})