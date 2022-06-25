import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-btn',
  templateUrl: './menu-btn.component.html',
  styleUrls: ['./menu-btn.component.scss']
})
export class MenuBtnComponent implements OnInit {
  showMenu: boolean;
  subscription: Subscription;
  burger = this.ref.nativeElement.querySelector("menu-btn_burger");

  constructor(private menuService: MenuService, private ref: ElementRef) {
    this.subscription=this.menuService.onToggle().subscribe(v => this.showMenu=v);
   }

  ngOnInit(): void {
  }

  onClick(){
    this.menuService.toggleShowMenu();
  }

}
