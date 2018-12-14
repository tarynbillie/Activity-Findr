const express = require('express');
const bodyParser = require('body-parser');
const RapidAPI = require('rapidapi-connect');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 8080;
const rapid = new RapidAPI("default-application_5beda1abe4b0d1763ed6f67c", "fd1b0b7e-80a5-4887-9c1d-dd5af98e1ad6");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

dotenv.config(); 

const PORT = process.env.PORT || 8080;


///////// GET Businesses ///////////

let businesses = [];

app.post('/getbusinesses', (req, res)=>{  
    businesses = [];
    rapid.call('YelpAPI', 'getBusinesses', {
        'accessToken': process.env.YELP_ACCESS,
        ...req.body
        
        
    }).on('success', (payload) => {
        businesses = payload;
    }).on('error', (payload) => {
        console.error(payload);    
    });
    res.status(201).json({msg: 'your post was successful'});
});

app.get('/results', (req, res) =>{
    res.json(businesses);
});

///////// GET Businesses Reviews ///////////

app.post('/getbusinessreviews', (req, res) => {
    rapid.call('YelpAPI', 'getBusinessReviews', {
        'accessToken': process.env.YELP_ACCESS,
        ...req.body

    }).on('success', (payload) => {
        res.json(payload);
    }).on('error', (payload) => {
        console.error(payload);
    });
})

////////////////////////////////////////////

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`server is listening on ${PORT}...be careful what you say!`)
})
