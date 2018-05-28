import { Component } from '@angular/core';
import { NgxEditorModel } from 'ngx-monaco-editor';

@Component({
  selector: 'sl-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sl';
  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code = 'function x() {\n\tconsole.log("Hello world!");\n}';
  jsonCode = [
    '{',
    '    "p1": "v3",',
    '    "p2": false',
    '}'
  ].join('\n');

  model: NgxEditorModel = {
    value: this.jsonCode,
    language: 'json',
    uri: 'foo.json'
  };
  public onInit(editor) {
      const line = editor.getPosition();
      console.log(line);
    }
}




