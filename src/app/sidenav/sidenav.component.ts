import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild, OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {

  @ContentChild('customContent', {read: TemplateRef})

  // #contentBlock -это шаблон ng-template   в app.component
  public contentBlock!: TemplateRef<HTMLElement>;

  // contentPlace - место в которое вставляем шаблон sidenave.comp
  @ViewChild('contentPlace', {read: ViewContainerRef})
  public contentPlace!: ViewContainerRef;

  constructor() {

  }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {

    console.log('ngOnChanges', changes);
  }
  ngAfterViewInit(): void {
    console.log(this.contentPlace);
    // createEmbeddedView добавить contentBlock в contentPlace
    this.contentPlace.createEmbeddedView(this.contentBlock);
      }

  ngAfterContentInit(): void {
    console.log(this.contentBlock);

  }



}
