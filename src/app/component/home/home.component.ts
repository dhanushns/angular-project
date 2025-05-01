import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PlayGroundComponent } from '../play-ground/play-ground.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule,PlayGroundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  fruitList: string[] =['Apple','Banana','Orange'];

  addFruit(fruitName: string){
    this.fruitList = [...this.fruitList,fruitName]
  }
}
