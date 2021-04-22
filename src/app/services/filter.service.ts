import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filterComponents: Category[] = [
    {
      name: "to do",
      id: "1"
    },

    {
      name: "doing",
      id: "2"
    },

    {
      name: "done",
      id: "3"
    }
  ];

  constructor() { }

  getFilters() {
    return this.filterComponents;
  }
}
