import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeNgrxComponent } from './update-employee-ngrx.component';

describe('UpdateEmployeeNgrxComponent', () => {
  let component: UpdateEmployeeNgrxComponent;
  let fixture: ComponentFixture<UpdateEmployeeNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEmployeeNgrxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmployeeNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
