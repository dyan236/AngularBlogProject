import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from 'src/app/NavItem';
import { MenuService } from 'src/app/services/menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  @Input() item: NavItem;
  showMenu: boolean;
  subscription: Subscription;

  constructor(private menuService:MenuService) {
    this.subscription=this.menuService.onToggle().subscribe(v => this.showMenu=v);

  }

  ngOnInit(): void {
  }

}
