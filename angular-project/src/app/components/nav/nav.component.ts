import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/NavItem';
import { NavItems } from './NavItems';
import { MenuService } from 'src/app/services/menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  items: NavItem[] = NavItems;
  showMenu: boolean;
  subscription: Subscription;

  constructor(private menuService: MenuService) {
    this.subscription=this.menuService.onToggle().subscribe(v => this.showMenu=v);
  }

  ngOnInit(): void {
  }

}
