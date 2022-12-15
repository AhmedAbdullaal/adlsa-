import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html'
})
export class RootComponent implements OnInit  {
  // @ts-ignore
  mobileQuery: MediaQueryList;
  header: boolean = true;
  constructor( private media: MediaMatcher) {}

  ngOnInit(): void {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
  }
}
