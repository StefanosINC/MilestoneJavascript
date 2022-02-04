const express = require('express');
const bodyParser = require('body-parser');

// import the post route
const postRoute = require('./src/routes/post.route');
const { deletePost } = require('./src/models/post.model');


// create expresss = app 
const app = express();


// setup the server port. 

const port = 5000;


// parse request data content
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json

app.use(bodyParser.json());

// Define the root route 
app.get('/', (req, res)=>{
    res.send('Hello test World');
});

// create post route
app.use('/api/post', postRoute);
 
// delete post route
app.use('/api/post', deletePost);

// list to the port incomming
app.listen(port, ()=>{
    console.log('Express server test is running at port' + port);

});