import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { ObjectService } from './object.service'
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';// <-- Import HttpModule
import { HttpClientModule } from '@angular/common/http';
import { ReviewListComponent } from './review-list/review-list.component';
import { NewReviewComponent } from './new-review/new-review.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    NewMovieComponent,
    ReviewListComponent,
    NewReviewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ObjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }

