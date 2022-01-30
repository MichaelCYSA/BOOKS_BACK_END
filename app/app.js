const express = require('express')
const cors = require('cors')
const application = express()

const { router } =  require('./router/app.routes')

const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || 'localhost'

application.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
})); 

application.use('/api' , router)

const server = () => {
    try {
        application.listen(
            PORT, 
            () => console.log(`Server running on http://${HOST}:${PORT} !`)
        );
    } catch (e) {
        console.log(e)
    }
}
server()