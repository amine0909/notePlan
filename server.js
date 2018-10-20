const express = require("express")
const bodyParser = require("body-parser")
const path = require('path');
const mongoose = require("mongoose")
const cors = require('cors')
const app = express();

const index = require('./routes/index');
const objectifs = require('./routes/objectifs');
const register = require('./routes/register');
const login = require('./routes/login');

// mongoDB CONFIG WITH MLAB CLOUD
mongoose.connect("mongodb://amine_notes_db:amin1997@ds141872.mlab.com:41872/notes_amine", {useNewUrlParser: true})

// CONFIG PORT
const port = process.env.PORT | 3000;

// Set static folder
app.use(express.static(path.join(__dirname,'public')))


// ALLOW CROSS ORIGIN
app.use(cors())


// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', objectifs);
app.use('/api',register);
app.use('/api', login);

app.listen(port, function(){
    console.log('Server started on port '+port);
});

