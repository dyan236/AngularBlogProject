import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  shouldFold(): boolean{
    return (this.router.url !== '/') && (this.router.url !== '/contact');
  }

}
