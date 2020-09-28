const express = require('express')

let app = express ();

// add routes here
app.get('/', function(req,res){
    res.send("<h1>Hello World Express</h1>")
})

// 3000 refers to the POP
app.listen (3000, ()=>{
    console.log('server started')
})
// no codes to be after .listen