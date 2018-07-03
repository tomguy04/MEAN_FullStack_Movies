import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// import { AuthService } from '../../auth.service';

import { Movie } from '../movie';
import { Review } from '../review';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { ObjectService } from '../object.service';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {
  movie = new Movie();
  registrationErrors: string[] = [];

  constructor(
    // private _auth: AuthService, 
    private _router: Router, 
    private _service : ObjectService
  ) { }

  ngOnInit() {
  }

  onSubmit(formData:NgForm){
    event.preventDefault();
    const {value, valid} = formData;
    console.log('submitted', this.movie);
    this._service.createMovie(this.movie).subscribe(movie=>{
      console.log('created movie in new-movie afer controller', movie)
      
      // now create the review
      this._service.createReview(movie).subscribe(review=>{
        console.log('create review in register', review);
        formData.reset();
      })
      this.movie = new Movie()
      this._router.navigateByUrl("/")
    })
  }

  onCancel(){
    this._router.navigateByUrl("/")
  }


}
