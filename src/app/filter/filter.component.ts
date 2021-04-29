import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { FilterService } from '../services/filter.service';
import { EventEmitter, Output } from "@angular/core";
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() emitSelectedFilter = new EventEmitter<string>();
  @Output() emitSelectedSearchWord = new EventEmitter<string>();

  searchWord: string;
  categories: Category[] = [];


  constructor(private filterService: FilterService) { }

  ngOnInit(): void {

    this.categories = this.filterService.getFilters();
  }

  selectFilter(id: string) {
    this.emitSelectedFilter.emit(id);
  }

  searchByWord() {
   this.emitSelectedSearchWord.emit(this.searchWord);
  }
}
