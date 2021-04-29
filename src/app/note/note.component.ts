import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, OnChanges {

  @Input() selectedCategoryId: string;

  notes: Note[];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {

    this.notes = this.noteService.getNotes();
  }

  ngOnChanges(): void {

    alert(this.selectedCategoryId);
    this.notes = this.noteService.getFilteredNotes(this.selectedCategoryId);
    console.log(this.notes);
  }
}

export interface Note {
  id: string;
  title: string;
  description: string;
  categoryId: string;
}