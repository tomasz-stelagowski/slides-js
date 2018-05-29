import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'sl-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {
  @HostBinding('class.transform-pass') someField = true;
}
