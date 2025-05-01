import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-currency-converter',
  imports: [CommonModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css'
})
export class CurrencyConverterComponent implements OnChanges, OnInit {

  @Input() amount: number = 0;
  converted: number = 0;

  constructor(){
    console.log("Constructor amount : ",this.amount);
  }

  ngOnChanges(changes : SimpleChanges){
    if(changes['amount']){
      this.converted = this.amount * 83;
    }
  }

  ngOnInit(){
    console.log("ngOnInit function : ",this.amount);
  }

}
