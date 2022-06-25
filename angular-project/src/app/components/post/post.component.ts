import { Component, Input, OnInit } from '@angular/core';
import { PostInfo } from './PostInfo';

const staticURL="http://localhost:5000/imgs/"

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: PostInfo;

  constructor() { }

  ngOnInit(): void {
  }

  hasImage(): boolean{
    return typeof this.post.img != "undefined";
  }

  getImageLink(): string{
    if (this.hasImage())
      return staticURL+this.post.img;
    else
      return "";
  }

}
