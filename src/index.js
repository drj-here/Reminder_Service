const express=require('express')
const bodyParser=require('body-parser')
const {PORT}=require('./config/serverConfig')
const {sendBasicEmail}=require('./services/email-service')

const setupAndStartServer=()=>{
    const app=express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    
    app.listen(PORT,()=>{
        console.log(`Server started on PORT ${PORT}`)
    })

    sendBasicEmail(
        'drj09003@gmail.com',
        'drj09003@gmail.com',
        'Testing',
        'reminder service done successfully'
    )
}

setupAndStartServer()