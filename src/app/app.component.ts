import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { EventsService } from './services/events.service';

import { routerTransition } from './router.animations';

@Component({
  selector: 'sl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ]
})
export class AppComponent implements OnInit {

  routingArray = [
    'slide1',
    'slide2'
  ];

  constructor(
    private events: EventsService,
    private router: Router,
    private aRoute: ActivatedRoute) {  }

  ngOnInit(): void {
    this.events.LeftArrow.subscribe(_ => this.gotoSlide(-1));
    this.events.RightArrow.subscribe(_ => this.gotoSlide(1));
  }

  gotoSlide(delta: number) {
    const curUrl = this.router.url.replace('/', '');
    let nUrlI = this.routingArray.findIndex(v => v === curUrl) + delta;
    nUrlI = [0, nUrlI, this.routingArray.length - 1].sort()[1];
    const nUrl = this.routingArray[nUrlI];
    this.router.navigate([nUrl]);
  }

  getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state;
  }
}
