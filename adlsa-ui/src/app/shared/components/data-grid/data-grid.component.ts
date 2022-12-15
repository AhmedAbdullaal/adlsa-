import {
  AfterViewInit,
  Component, ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Column} from "./column";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styles: [`
  .sticky-footer {
    position: relative;
    top: 50px;
    height: 20px !important;
  }
  `]
})
export class DataGridComponent<T> implements OnChanges, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ContentChild(TemplateRef) templateRef!: TemplateRef<unknown>;
  @ContentChild(TemplateRef) templateRefSummary!: TemplateRef<unknown>;
  @Input() data: T[] = [];
  @Input() displayedColumns!: string[];
  @Input() columns:  Column[] = [];
  @Input() totalRows = 0;
  @Input() page = 0;
  @Input() totalCost!: number;
  @Output() deleteRecord: EventEmitter<T> = new EventEmitter<T>()
  @Output() fetchRecord: EventEmitter<T> = new EventEmitter<T>()
  @Output() loadData: EventEmitter<PageEvent> = new EventEmitter<PageEvent>()
  dataSource!: MatTableDataSource<T>;
  size: number = 10;
  constructor() { }

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource<T>(this.data)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  pageChanged(event: PageEvent) {
    this.size = event.pageSize;
    this.page = event.pageIndex;
    this.loadData.emit(event);
  }
}
