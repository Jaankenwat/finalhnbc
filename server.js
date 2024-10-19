const dotenv = require('dotenv');
dotenv.config(); // Load environment variables
const express = require('express')
const app = express()
const path=require('path')
const postmodel =require('./models/post')
const { redirect } = require('express/lib/response')
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,"public")))
app.set('view engine','ejs');


app.get('/',async function(req, res){
    let users = await postmodel.find();
    res.render('index',{users});
})
app.post('/create',async function(req,res){
    let{content}=req.body;
    await postmodel.create({
        content:content
    })
    res.redirect('/')
})
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
