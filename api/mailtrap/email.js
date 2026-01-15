import {EMAIL_VERIFICATION_TEMPLATE} from "./emailTemplate.js"
import { mailTrapClient } from "./mailtrap.config.js"





export const sendVerificationEmail = async(email, verificationToken)=>{

    const recipient = [{email}]


    try {

        const response =  await mailTrapClient.send({

            from   : sender,
            to : recipient,
            subject : "verify your email",
            category : "email verification",

            html  : EMAIL_VERIFICATION_TEMPLATE.replace("{verificationCode}", verificationToken)


        })

        console.log("verification email sent successfully", response)

    }
    catch(error){

        console.log("error sending email" , error)
        throw new Error(`error sending email : ${error}`)



    }





}

export const sendWelcomeEmail = async(email,name)=>{

    const recipient = [{email}]

    try  {

      const response =  await mailTrapClient.send({


      from : sender,
      to: recipient,
      template_uuid: "51f0ade8-d897-4aaf-bf37-4cd29fd2e331",
      template_variables: {
      "company_info_name": "Auth Test Co.",
      "name": name
    
    }

    })

    console.log("welcome email sent successfully", response)

    }

    catch(err){

        console.log("error sending welcome email")

        throw new err(`error sending welcome email : ${err}`)


    }





}