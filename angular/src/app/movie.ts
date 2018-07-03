import { Review } from "./review";

export class Movie {
    _id: string;
    title: string;

    name:string = '';
    stars: number;
    review: string;

    reviews:Review[];
}