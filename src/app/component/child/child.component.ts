import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  imports: [CommonModule, FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  title: string = 'Child Component';
  childId: string = '10';

  submitted: boolean = false;

  user: {
    username: string;
    email: string;
    password: string;
  } = {
    username : '',
    email: '',
    password : ''
  }

  constructor(private route: ActivatedRoute) {
    this.childId = this.route.snapshot.paramMap.get('id') ?? '10';
  }

  handleFormSubmit_2(event: Event){
    const formElement = event.target as HTMLFormElement;
    const formObject = new FormData(formElement);
    const formData = Object.fromEntries(formObject.entries());
    const user = JSON.parse(JSON.stringify(formData));
    console.log(user);
  }

  handleFormSubmit(){
    this.submitted = true;
  }

  handleFormSubmit_3(){

  }

  close(){
    this.submitted = false;
  }

}
