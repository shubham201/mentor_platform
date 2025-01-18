// import nodemailer from "nodemailer";

// export default async function handler(req,res){
//     if(req.method!=="POST"){
//         return res.status(405).json({error:"Method not allowed"});
//     }

//     const {name,email,course,grade}=req.body;
//     if(!name || !email || !course){
//         return res.status(400).json({error:"missing required fields"});
//     }

//     if((course=="English" || course=="Maths") && !grade){
//         return res.status(400).json({error:"missing required grade"});
//     }

//     try{
//         const transporter=nodemailer.createTransport({
//             service:"gmail",
//             auth:{
//                 user:"jamwalmansi16@gmail.com",

//             }
//         })
//     }

// }