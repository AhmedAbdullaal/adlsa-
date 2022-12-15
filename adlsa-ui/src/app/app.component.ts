import { Component, OnInit } from '@angular/core';
import { UnitLocationRepository } from './domain/unit-location/unit-location.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private unitLocationRepository: UnitLocationRepository) { }
  ngOnInit(): void {
    this.unitLocationRepository.getAllUnitLocation().subscribe(res => {
      console.log(res)
    })
  }
  title = 'adlsa-ui';
}
