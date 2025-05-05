import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNgrxComponent } from './employee-ngrx.component';

describe('EmployeeNgrxComponent', () => {
  let component: EmployeeNgrxComponent;
  let fixture: ComponentFixture<EmployeeNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeNgrxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
