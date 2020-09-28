const express = require('express')
const hbs = require('hbs')
const wax = require('wax-on')

// 1A SET UP EXPRESS
let app = express ();
// 1B SET UP VIEW ENGINE
app.set('view engine', 'hbs');

// 1C SET UP STATIC FOLDER
app.use(express.static('public'));

// 1D. SETUP WAX ON (FOR TEMPLATE INHERITANCE)
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

// 1E enable forms
app.use(
    express.urlencoded({
        extended:false
    })
);

// 1F. Setup handlebar helpers
require("handlebars-helpers")({
    handlebars: hbs.handlebars,
});


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

app.get('/add_food', (req,res)=>{
    res.render('add_food')
})
app.post('/add_food', (req,res)=>{
    console.log(req.body);
    res.send(req.body)
})

// 3. RUN SERVER : 3000 refers to the POP
app.listen (3000, ()=>{
    console.log('server started')
})
// no codes to be after .listen