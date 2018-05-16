const express = require('express')
const app = express()
import ReactDOM from 'react-dom/server'
import React from 'react'
import {Home} from "./client/component/Home";


app.use(express.static(__dirname,'public'))

app.get('/',(req,res)=>{
    const content = ReactDOM.renderToString(<Home />)
    const html = `
        <html>
        <body>
            <div id="root">${content}</div>
        </body>
        </html>        
    `
    res.send(content)
})





app.listen(3000,()=>{
    console.log("listening to 3000")
})