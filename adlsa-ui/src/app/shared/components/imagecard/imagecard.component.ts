import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagecard',
  templateUrl: './imagecard.component.html',
  styleUrls: ['./imagecard.component.css']
})
export class ImagecardComponent {
  @Input() title: string | undefined;
  @Input() desc: string | undefined;
  @Input() footerTitle: string | undefined;
  @Input() position: string | undefined;
  @Input() image: string | undefined;
}
