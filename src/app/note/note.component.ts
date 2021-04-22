import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  notes: Note[];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {

    this.notes = this.noteService.getNotes();
  }

}

export interface Note {
  id: string;
  title: string;
  description: string;
  category: string;
}

