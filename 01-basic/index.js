const express = require('express')

let app = express ();

// ADD ROUTES HERE
// INDEX ROUTE
app.get('/', function(req,res){
    res.send("<h1>Hello World Express</h1>")
})

// ADD A PARAMETERISED ROUTE
app.get('/hello/:name', (req,res)=>{
    let name = req.params.name;
    res.send("Hi, "+ name);
})

// 3000 refers to the POP
app.listen (3000, ()=>{
    console.log('server started')
})
// no codes to be after .listen