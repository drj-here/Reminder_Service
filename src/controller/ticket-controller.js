const TicketService=require('../services/email-service')

const create=async(req,res)=>{
    try{
        const response=await TicketService.createNotification(req.body)
        return res.status(201).json({
            success:true,
            message:'successfully registered an email reminder',
            err:{},
            data:response
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'Unable to register an email reminder',
            err:error,
            data:{}
        })
    }
}

module.exports={create}