import { Component, OnInit } from '@angular/core';
import { Review } from '../review';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ObjectService } from '../object.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../movie';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
  movie = new Movie();
  movieId : string;
  myMovie: Movie;
  sub: Subscription;
  
  constructor(private _service:ObjectService, private _activatedRoute:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.movieId = (params['id']);
      console.log('create review component recd movieId ', this.movieId);
      })
      //to get the movie name to display
      this._service.getMovie(this.movieId).subscribe(movie => {
        console.log('movie came back to review-list', movie);
        this.myMovie = movie;
      })
  }
  onSubmit(formData:NgForm){
    event.preventDefault();
    const {value, valid} = formData;
    console.log('submitted', this.movie);
    this.movie._id = this.movieId
    console.log('the movie with id and review data attached ', this.movie._id)
    //now create the review
    this._service.createReview(this.movie).subscribe(review=>{
      console.log('create review in register', review);
      formData.reset();
      this._router.navigateByUrl(`/movies/${this.movieId}`)

    })

;

      formData.reset();

    }
  onCancel(){
    this._router.navigateByUrl(`/`)
  }    

}
