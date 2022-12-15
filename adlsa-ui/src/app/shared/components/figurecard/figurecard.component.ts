import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-figurecard',
  templateUrl: './figurecard.component.html',
  styleUrls: ['./figurecard.component.css']
})
export class FigurecardComponent {
  @Input() headerIcon!: string;
  @Input() category!: string;
  @Input() title!: string;
  @Input() footerIcon!: string;
  @Input() footContent!: string;
  @Input() linearColor!: string;
  @Input() boxShadow!: string;
  @Input() path!: string;
}
