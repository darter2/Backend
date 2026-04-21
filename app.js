// at 1:20:00 in the tutorial video 
//setup.. this is similar to when we use our default tags in html
const express = require('express')
//we have to use cors in order to host a front end and backend on the same device
var cors = require('cors')


//active or tell this app variable to be an express server 
const app = express()
app.use(cors())


//start the web server... app.listen(portnumber, function)
const router = express.Router()

//making an api using routes
//routes are used to handle browser requests. they look like URLs.
//the difference is that when a browser requests a route, it is dynamically handled by using a function.

router.get("/songs", function(req, res){
    const songs = [
        { 
        title: "Uptown Funk", 
        artist: "Bruno Mars",
        popularity: 10,
        genre: ["funk", "boogie"]
        },
        {
        title: "Downtown Funk", 
        artist: "Bruno Mars",
        popularity: 10,
        genre: ["funk", "boogie"]
        },
        {
        title: "Sidetown Funk", 
        artist: "Bruno Mars",
        popularity: 10,
        genre: ["funk", "boogie"]
        }   
     ];

    res.json(songs)
})

    // all requests that usually use an api start with /api... so the url would be localhost:3000/api/songs
    app.use("/api", router)
    app.listen(3000)