const express = require('express')
const hbs = require('hbs')

// 1A SET UP EXPRESS
let app = express ();
// 1B SET UP VIEW ENGINE
app.set('view engine', 'hbs');



// 2. ADD ROUTES HERE

// INITIAL INDEX ROUTE
// app.get('/', function(req,res){
//     res.send("<h1>Hello World Express</h1>")
// })

// NEW INDEX ROUTE FOR TEMPLATE
app.get ('/', function(req,res){
    res.render('index');
})


// ADD A PARAMETERISED ROUTE
app.get('/hello/:name', (req,res)=>{
    let name = req.params.name;
    res.send("Hi, "+ name);
})

// 



// 3. RUN SERVER : 3000 refers to the POP
app.listen (3000, ()=>{
    console.log('server started')
})
// no codes to be after .listen