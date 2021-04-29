import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  messageToSend: string = "message sent from parent";
  categoryId: string;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {

    this.noteService.serviceCall();

  }

  receiveCategory(catId: string) {
    this.categoryId = catId;
    alert(this.categoryId);
  }
}
