import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import { debounceTime, distinct, share, filter, map } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Injectable()
export class EventsService {

  eventsStream: Observable<any>;

  constructor() {
    this.eventsStream = merge(
      fromEvent(window, 'keyup'),
      fromEvent(document, 'click')
    ).pipe(
      debounceTime(50),
      distinct(),
      share()
    );
   }

   get events() {
     return this.eventsStream;
   }

   get LeftArrow() {
     return this.eventsStream.pipe(
       filter(e => e.code === 'ArrowLeft')
     );
   }

   get RightArrow() {
    return this.eventsStream.pipe(
      filter(e => e.code === 'ArrowRight')
    );
   }

   get CtrlKeys() {
    return this.eventsStream.pipe(
      filter(e => e.ctrlKey),
      map(e => e.key)
    );
   }

}
