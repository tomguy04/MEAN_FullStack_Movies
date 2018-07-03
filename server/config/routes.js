const movieController = require('../controllers/movie');

const router = require('express').Router();
    router

    //movies
    .post('/movie', movieController.createMovie)
    .get('/movies', movieController.index) //get all the movies
    .get('/movie/:movieId', movieController.showMovie)
    .delete('/movie/:movieId', movieController.destroy) //delete a bike
    //.get('/movie', movieController.show) //get the movie
    
    // .get('/user/logout',userController.logout)//logout
    
    //reviews
    .post('/review', movieController.createReview)
    .delete('/review/:reviewId', movieController.destroyReview)
    .get('/reviews/:movieId',movieController.reviewIndex)
    
    // .get('/movie/:movieId', bikeController.showMovie)

    // .post('/bikes',bikeController.create) //add a bike/review
    // .get('/bikes', bikeController.index) //get all bikes
    // .delete('/bikes/:bikeID', bikeController.destroy) //delete a bike
    // .put('/bikes/:bikeID', bikeController.update) //update a bike
    // .put('/addreviewstart/:movieID', userController.update1st) //attach review to movie from 1st form
    // .post('/bikeOnly', bikeController.createBikeOnly)
    
    
    //user 
 

    
    module.exports = router;