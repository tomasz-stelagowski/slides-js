import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sl-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  fontSize: number = 12;
  editorOptions = {
    theme: 'vs-dark',
    language: 'javascript',
    fontSize: this.fontSize
  };
  @Input() code = 'function x() {\nconsole.log("Hello world!");\n}';
  @Input() snippets: Array<any> = [];


  constructor() { }

  ngOnInit() {
  }

}
