import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.scss']
})
export class CounterPageComponent implements OnInit {
  counter: number;
  subscription: Subscription;

  constructor(private counterService: CounterService) {
    this.subscription=this.counterService.onChange().subscribe(v => this.counter=v);
  }

  ngOnInit(): void {
    this.counter=this.counterService.getCounter();
  }

  onClick(): void{
    this.counterService.increment();
  }

}
