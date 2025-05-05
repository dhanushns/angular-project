import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeNgrxComponent } from './add-employee-ngrx.component';

describe('AddEmployeeNgrxComponent', () => {
  let component: AddEmployeeNgrxComponent;
  let fixture: ComponentFixture<AddEmployeeNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmployeeNgrxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeeNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
