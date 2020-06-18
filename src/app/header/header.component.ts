import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,  OnChanges {
  public title1 = 't';
  @Input() public title = 'title4587';

  @Output()
  onTitleClick: EventEmitter<string> = new EventEmitter<any>();


  constructor() {

    setTimeout(() => {
      console.log(this.title1='Hello');
    }, 10000);

    // setTimeout(() => {
    //   this.title = 'NEW TITLE';
    //   console.log('some change', this.title);
    //
    //
    // }, 5000);

  }
  ngOnChanges(changes: SimpleChanges): void {

    console.log('ngOnChangesH', changes);
  }
  ngOnInit(): void {
    // console.log('constructor', this.title);
  }



  sendData() {
this.onTitleClick.emit('MyDate');
  }
}
