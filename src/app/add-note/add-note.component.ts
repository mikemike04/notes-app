import { Component, OnInit } from '@angular/core';
import { Note } from '../note/note.component';
import { NoteService } from '../services/note.service';
import { MatSelectModule } from '@angular/material/select';
import { FileDetector } from 'selenium-webdriver';
import { FilterService } from '../services/filter.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  noteTitle: string;
  noteDescription: string;
  selectedNoteCategory: string;

  categories: Category[];

  constructor(private noteService: NoteService, private filterService: FilterService) { }

  ngOnInit(): void {
    this.categories = this.filterService.getFilters();
  }

  addNote(): void {

    const note: Note = { id: "0", title: this.noteTitle, description: this.noteDescription, categoryId: this.selectedNoteCategory };
    alert(this.noteTitle + '\n' + this.noteDescription + '\n'  + this.selectedNoteCategory);
    this.noteService.addNote(note);
  }
}
