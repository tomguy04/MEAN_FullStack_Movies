import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { MovieListComponent } from './movie-list/movie-list.component';
import { NewMovieComponent } from 'src/app/new-movie/new-movie.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { CanActivate }    from '@angular/router';

const routes: Routes = [{
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path:'movies',
    children: [
      {
        path:'new',
        pathMatch: 'full',
        component: NewMovieComponent
      },
      {
        path:'',
        component: MovieListComponent
      },
      {
        path: ':id',
        component : ReviewListComponent
      },
      {
        path: ':review/:id',
        component : NewReviewComponent
      }
    ],
    // canActivate: [AuthenticationGuard],
    runGuardsAndResolvers: 'always',
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
