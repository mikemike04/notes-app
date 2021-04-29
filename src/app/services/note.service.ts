import { Injectable } from '@angular/core';
import { Note } from '../note/note.component';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[] = [
    {
      id: "Id1",
      title: "First note",
      description: "This is the description for the first note",
      categoryId: "2"
    },
    {
      id: "Id2",
      title: "Second note",
      description: "This is the description for the second note",
      categoryId: "1"
    }
  ];


  constructor() { }

  serviceCall() {
    console.log("this is a service call ");
  }

  getNotes() {
    return this.notes;
  }

  addNote(note: Note) {

    this.notes.push(note);
  }

  getFilteredNotes(filteredId: string): Note[] {
    //console.log(this.notes);
    return this.notes.filter((note) => { note.categoryId === filteredId });
  }
}
