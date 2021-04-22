import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  categories: Category[] = [];

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {

    this.categories = this.filterService.getFilters();
  }

}
