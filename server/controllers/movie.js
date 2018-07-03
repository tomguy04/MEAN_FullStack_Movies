const Movie = require('mongoose').model('Movie');
const Review = require('mongoose').model('Review');

module.exports = {
    createMovie(request, response) {
        Movie.create(request.body)
        .then(movie => response.json(movie))
        .catch(error => console.log(error));
    },

    createReview(request, response) {
        var review = new Review();
        review.name = request.body.name;
        review.stars = request.body.stars;
        review.review = request.body.review
        console.log('the reqbody ', request.body._id);
        console.log('review in moviejs create', review);
        review._movie = request.body._id;
            Movie.findOne({_id:request.body._id})
            .then(foundMovie=>{
                console.log('foundMovie ', foundMovie);
                foundMovie.reviews.push(review);
                foundMovie.save(function(err){
                    if (err){console.log('error while saving post and comment');}
                })
            })
            .catch(error => console.log(error));
            review.save(function (err) {
                if (err) { console.log(err) }
                else {
                    response.json(review); 
                }
            })

            },


    index(request, response) {
        Movie.find({})
        .then(movies => response.json(movies))
        .catch(error => console.log('find movies fail ', error));
    },

    reviewIndex(request,response){
        Review.find({_movie:request.params.movieId})
        .then(reviews => response.json(reviews))
        .catch(error => console.log('find reviews fail ', error));
    },

    showMovie(req, res) {
        console.log('movie id in showMovie ', req.params.movieId)
        Movie.findOne({_id: req.params.movieId})
        .populate('reviews')
        .then(movie => res.json(movie))
        .catch(error => res.status(400).json(error))
    },

    destroy(request, response) {
        Movie.findByIdAndRemove(request.params.movieId)
          .then(movie => response.json(movie))
          .catch(console.log);
      },

    destroyReview(request, response) {
    Review.findByIdAndRemove(request.params.reviewId)
        .then(review => response.json(review))
        .catch(console.log);
    },
   
    update1st(request, response, review) {
        User.findById(request.params.userID)//.populate('bike')
        .then(user =>{
            if (!user){
                throw Error();
            }
        //.catch??
            console.log('found the listing user ', user )
            //return user
            user.bike.push(review);
            console.log('pushed on ', user);
            user.save(function (err) {
                
                    if (err) { console.log(err) }
                    else {
                        res.json(user);
                        //res.json({ message: "Success!" })
                    }
                })
            //response.json(user)
            }
        )
        .catch(() =>{
            console.log('findOne fail');
        })
    },




    findOne(request, response){
        console.log(request.params.userID);
        User.findById(request.params.userID)//.populate('bike')
        .then(user =>{
            if (!user){
                throw Error();
            }
            //console.log('found the listing user ', user )
            //return user
            response.json(user)
            }
        )
        .catch(() =>{
            console.log('findOne fail');
        })
    },
    
    // show(request, response) {
    //     Book.findById(request.params.bookID)
    //       .then(book => response.json(book))
    //       .catch(console.log);
    //   },


    //
    show(req, res) {
        console.log(req.session.user._id, "do you exist here?");
        if (req.session.user._id === undefined) {
            res.json({session: false})
        }
        else {
            User.findOne({_id: req.session.user._id})
            .populate('bike')
            .then(user => res.json(user))
            .catch(error => res.status(400).json(error))
        }
    },

    login(request, response) { 
        console.log('login', request.body);

        User.findOne({ email: request.body.username})
        .then(user =>{
            if(!user) { throw Error(); }

            return User.validatePassword(request.body.password, user.password).then(
                ()=>{
                    //login
                    completeLogin(request, response, user);
                }
            );
        })
        .catch(() => {
            response.status(400).json({ message: 'email/password combo not found'});
        });
    },
    register(request, response) {
        console.log('reg', request.body);

        User.create(request.body)
            .then(user => {
                //send conf email 
                //login
                completeLogin(request, response, user);
            })
            .catch(error => console.log)       
    },


    logout(request, response) { 
        console.log('logging out');

        request.session.destroy();

        response.clearCookie('userID');
        response.clearCookie('expiration');

        //response.json(true);
        response.json({message: "You have been logged out!"});
    }
};

function completeLogin(request, response, user){
    // console.log('in the complete login');
    // request.session.user = user.toObject();
    // delete request.session.user.password; //password is gone so it can't be monitored or hacked and then copied.

    // //create cookie
    // response.cookie('userID', user._id.toString()) //turn object into string
    // response.cookie('expiration', Date.now() + 864000 * 1000);

    response.json(user);
}