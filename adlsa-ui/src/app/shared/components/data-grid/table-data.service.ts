import { Injectable } from '@angular/core';
import {Column} from "../../../shared/components/data-grid/column";

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  columns: Column[] = [];
  displayedColumns: string[] = [];
  constructor() { }


  get tableColumns() {
    return this.columns;
}

   get displayColumns() {
    return this.displayedColumns;
}
}
