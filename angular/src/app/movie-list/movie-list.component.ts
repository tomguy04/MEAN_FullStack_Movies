import { Component, OnInit } from '@angular/core';
import { ObjectService } from '../object.service';
import { Movie } from '../movie'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[]=[];

  constructor(private _service: ObjectService) { }

  ngOnInit() {
    console.log('in movie-list read')
    this._service.getMovies().subscribe(
      movies => {
        this.movies = movies,
        console.log('the movies in movie-list comp ', this.movies)
      }
    );
  }

}
