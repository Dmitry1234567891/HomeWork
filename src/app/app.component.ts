import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit{
  public title5 = {tmp5: 'red', t6: 'green'};
  constructor() { }

  public getData($event) {
    console.log($event);
  }
  ngOnChanges(changes: SimpleChanges): void {

    console.log('ngOnChangesAPP', changes);
  }

  ngOnInit(): void {
   /// console.log('Oninit');
  }

}
