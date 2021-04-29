import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  @Input() receivedMesssage: string;
  title: string = "Add note ";
  titleColor: string = "red";
  noteContent: string = "test content";
  currentDate: Date = new Date(2021, 4, 1);

  array = ['lmao', 'lol', 'murature'];

  constructor() { }

  setTitle() { this.title = "new title test" }

  ngOnInit(): void {
    alert(this.receivedMesssage);
  }

}
