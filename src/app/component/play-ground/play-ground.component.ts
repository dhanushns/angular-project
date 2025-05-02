import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { CurrencyConverterComponent } from '../currency-converter/currency-converter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-play-ground',
  imports: [CurrencyConverterComponent, CommonModule, FormsModule],
  templateUrl: './play-ground.component.html',
  styleUrl: './play-ground.component.css',
  standalone: true,
})
export class PlayGroundComponent
  implements OnChanges, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
{
  @Input() inputMessage: string = '';

  @Input() fruits: string[] = [];

  usdAmount: number = 10;

  @ViewChild(ChildComponent) child !: ChildComponent;

  constructor() {
    console.log('PlayGroundComponent Constructor Initialized');
  }

  ngOnInit() {
    console.log('PlayGroundComponent ngOnInit Triggered');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('PlayGroundComponent ngOnChanges Triggered');
    console.log(changes);
  }

  ngAfterContentInit() {
    console.log('PlayGroundComponent ngAfterContentInit Triggered');
  }

  ngAfterContentChecked(){
    console.log('PlayGroundComponent ngAfterContentChecked Triggered');
  }

  ngAfterViewInit(){
    console.log("Child Title : ",this.child.title);
  }

  ngAfterViewChecked() {
    console.log('PlayGroundComponent ngAfterViewChecked Triggered');
  }

}
