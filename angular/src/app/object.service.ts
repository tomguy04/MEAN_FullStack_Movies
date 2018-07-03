import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; 
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Http } from '@angular/http';
import { Movie } from './movie';
import { Review } from './review';

@Injectable()
  export class ObjectService {
    
      constructor(private _http:HttpClient) { }

      //Get a list of reviews
      getReviews(id:String):Observable<Review[]>{
        console.log('in get reviews service');
        return this._http.get<Review[]>(`api/reviews/${id}`);
      }
      
      //Delete review
      deleteReview(id: string): Observable<Review> {
        console.log('in delete review service');
        return this._http.delete<Review>(`api/review/${id}`);
      }
    
      //Delete movie
      deleteMovie(id: string): Observable<Movie> {
        console.log('in delete service');
        return this._http.delete<Movie>(`api/movie/${id}`);
      }

      //Get a movie
      getMovie(movieId:String):Observable<Movie>{
        console.log('service get a Movie');
        return this._http.get<Movie>(`api/movie/${movieId}`);
      }

      //Create Review
      createReview(review:Review):Observable<Review>{
        console.log('service create review', review);
        return this._http.post<Review>('/api/review', review);
      }
    

      //Create Movie
      createMovie(movie:Movie):Observable<Movie>{
        console.log('service create movie', movie);
        return this._http.post<Movie>('/api/movie', movie);
      }
    
 
      //get all the movies
      getMovies():Observable<Movie[]>{
        console.log('service getMovies');
        return this._http.get<Movie[]>('/api/movies')
      }
    
    
    }
    
