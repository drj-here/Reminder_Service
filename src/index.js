const express=require('express')
const bodyParser=require('body-parser')
const {PORT}=require('./config/serverConfig')
const {sendBasicEmail}=require('./services/email-service')
const jobs=require('./utils/job')
const {createChannel}=require('./utils/messageQueue')
const TicetController=require('./controller/ticket-controller')

const setupAndStartServer=async()=>{
    const app=express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    
    // const channel=await createChannel()
    app.post('/api/v1/tickets',TicetController.create)
    app.listen(PORT,()=>{
        console.log(`Server started on PORT ${PORT}`)
        jobs()
    })

    // sendBasicEmail(
    //     'drj09003@gmail.com',
    //     'drj09003@gmail.com',
    //     'Testing',
    //     'reminder service done successfully'
    // )

    
}

setupAndStartServer()