const { type } = require('express/lib/response');

const mongoose =require('mongoose');
// const DB = "mongodb+srv://jaankenwat:jaan143kenwat@cluster0.n21u2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// mongoose.connect(DB).then(()=>{
//     console.log('connection success')
// }).catch((err)=> console.log('no connection'))

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const postSchema=mongoose.Schema({
    content:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model('post',postSchema);