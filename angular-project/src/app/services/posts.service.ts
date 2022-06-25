import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostInfo } from '../components/post/PostInfo';
//import { POSTS } from '../pages/posts-page/mock-posts';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = "http://localhost:5000/api/posts";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostInfo[]>{
    //const posts=of(POSTS);
    //return posts;
    return this.http.get<PostInfo[]>(this.apiUrl);
  }
}
