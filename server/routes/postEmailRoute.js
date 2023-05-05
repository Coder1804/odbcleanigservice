const express = require('express');
const router = express.Router();
const emailjs = require('@emailjs/nodejs');
const {EmailJSResponseStatus} = require("@emailjs/nodejs");


router.post('/sendemail' , async (req,res)=>{
    const {username , phone , message } = req.body;
    console.log(username)
    // const templateParams =  {
    //         from_name: 'Orzubek',
    //         to_name: "ODB CLEANING SERVICE GA",
    //         from_phone:'nomer:931809123809',
    //         message: 'Bu mening xabarim xabar',
    //         from_date:String(new Date())
    //     };
    // try {
    //     await emailjs.send(
    //         process.env.SERVICE_ID,
    //         process.env.TEMPLATE_ID,
    //         templateParams,
    //         {
    //             publicKey: process.env.PUBLIC_KEY,
    //             privateKey: process.env.PRIVATE_KEY, // optional, highly recommended for security reasons
    //         },
    //     );
    //     console.log('SUCCESS!');
    //     res.status(200).json({success:true})
    // } catch (err) {
    //     if (err instanceof EmailJSResponseStatus) {
    //         console.log('EMAILJS FAILED...', err);
    //         res.status(500).json({success:false})
    //
    //     }
    //
    //     console.log('ERROR', err);
    // }

    res.status(200).json({success:true , username})
})



module.exports = router;