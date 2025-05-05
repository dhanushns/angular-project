import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeeNgrxComponent } from './get-employee-ngrx.component';

describe('GetEmployeeNgrxComponent', () => {
  let component: GetEmployeeNgrxComponent;
  let fixture: ComponentFixture<GetEmployeeNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetEmployeeNgrxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetEmployeeNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
