import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-msgiconbtn',
  templateUrl: './msgiconbtn.component.html',
  styleUrls: ['./msgiconbtn.component.css']
})
export class MsgIconBtnComponent {
  @Input() number: string | undefined;
  @Input() icon: string | undefined;
}
