const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
config = require('./DB');
var passport = require('passport');
var cors = require('cors')

const app = express();
app.use(cors())

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://mongouser:<password>@cluster0-th4wg.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const businessRoute = require('./routes/business.route');
const userRoute = require('./routes/user.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Cannot connect to the database'+ err)}
);
var version=process.env.version || "1.0"


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'../dist/meanstack')));
app.use(passport.initialize());
app.get('/getversion',function(req,res){
  console.log('Version '+version);
  res.status(200).json({version:version})
});

app.use('/business', businessRoute);
app.use('/user', userRoute);

app.use('/',function(req,res){
  res.sendFile(path.join(__dirname,'../dist/meanstack','index.html'))
});


const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
  console.log('Version '+version);
});
