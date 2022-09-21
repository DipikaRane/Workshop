var express=require('express');
var app=express();
var dotenv=require('dotenv');
var mongo=require('mongodb');
var MongoClient=mongo.MongoClient;
dotenv.config();
const mongoUrl='mongodb+srv://Deepika:cake@cluster0.3ariifz.mongodb.net/?retryWrites=true&w=majority';
var cors=require('cors');
const bodyParser=require('body-parser');

var port=process.env.PORT || 8425;
var db;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,response)=>{
    response.send("<h1>This is The cake Studio</h1>");
})

app.get('/cake',(req,res)=>{
    db.collection('cake').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
//connect with mongodb
MongoClient.connect(mongoUrl,(err,client)=>{
    if(err) console.log("Error while connection");
    db=client.db('cakeData');
    app.listen(port,()=>{
        console.log(`listening on port ${port}`)
    })
})