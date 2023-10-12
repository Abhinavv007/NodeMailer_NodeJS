import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const mailTransporter = nodemailer.createTransport({
    "service": "gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.EMAIL_PASS

    }

})
const details = {
    from:process.env.EMAIL,
    to:"sotatex971@dixiser.com",
    subject:"Just A Temp mail",
    text:"Hello this is temp mail"
}
mailTransporter.sendMail(details,(err)=>{
    if(err){
        console.log("Some error occured")

    }
    else{ 
        console.log("Mail sent successfully")
    }
})