import { Component, OnInit } from '@angular/core';
import { PostInfo } from 'src/app/components/post/PostInfo';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {
  posts: PostInfo[] = [];
  debugPost: PostInfo;

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => (this.posts=posts));
  }

  isEmpty(): boolean{
    return this.posts.length === 0;
  }

}
