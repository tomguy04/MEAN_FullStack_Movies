import { Component, OnInit } from '@angular/core';
import { ObjectService } from '../object.service';
import {Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';
import { Movie } from '../movie';
import { Review } from '../review';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  movieId : String;
  myMovie : Movie;
  movies : Movie[]=[];
  myReviews : Review[]=[];

  constructor(private _service:ObjectService, private _activatedRoute:ActivatedRoute, private _router: Router,
     
  ) {      
    // override the route reuse strategy
    // this._router.routeReuseStrategy.shouldReuseRoute = function(){
    //    return false;
    //   }
    //   this._router.events.subscribe((evt) => {
    //     if (evt instanceof NavigationEnd) {
    //        // trick the Router into believing it's last link wasn't previously loaded
    //        this._router.navigated = false;
    //        // if you need to scroll back to top, here is the right place
    //        window.scrollTo(0, 0);
    //     }
    // });
    }



  ngOnInit() {

 

    this._activatedRoute.params.subscribe((params: Params) => {
      this.movieId = (params['id']);
      console.log('reviewlist component recd movieId ', this.movieId);
      })

    this._service.getMovie(this.movieId).subscribe(movie => {
      console.log('movie came back to review-list', movie);
      this.myMovie = movie;
      console.log('this.myMovie ', this.myMovie);
    })

    this._service.getReviews(this.movieId).subscribe(reviews =>{
      console.log('reviews came back to review-list',reviews);
      this.myReviews = reviews;
      console.log('this.myReviews', this.myReviews);
    })

    
  }
  //   this._service.getMovies().subscribe(
  //     movies => {
  //       this.movies = movies,
  //       console.log('the bikes in read comp ', this.movies)
  //     }
  //   );
  // }

  onDelete(id: string) {
    console.log('delete movie', id);
    this._service.deleteMovie(id)
    .subscribe( returnedMovie=> {
      console.log('Returned Movie to delete ', returnedMovie)
       this.movies = this.movies.filter(p => p._id !== returnedMovie._id);
       console.log(this.movies);
       this._router.navigateByUrl("/")
    });
  }

  onDeleteReview(id: string) {
    console.log('delete review', id);
    this._service.deleteReview(id)
    .subscribe( returnedReview => {
      console.log('Returned Review to delete ', returnedReview)
        this.myReviews = this.myReviews.filter(p => p._id !== returnedReview._id);
      //  console.log(this.movies);
      // this._router.navigateByUrl(`/movies/${this.movieId}`)
    });
  }
     

  // onDeleteReview(id: string) {
  //   console.log('delete review', id);
  //   this._service.deleteReview(id)
  //   .subscribe( returnedReview=> {
  //     console.log('Returned Review to delete ', returnedReview)
  //     //  this.movies = this.movies.filter(p => p._id !== returnedReview._id);
  //     //  console.log(this.movies);
  //      this._router.navigateByUrl(`/movies/${this.movieId}`)
  //   });
  // }
     
  

  // onEdit(id: String){
  //   console.log('edit review ', id);
   
  // }

}
