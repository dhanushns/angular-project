import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeeNgrxComponent } from './delete-employee-ngrx.component';

describe('DeleteEmployeeNgrxComponent', () => {
  let component: DeleteEmployeeNgrxComponent;
  let fixture: ComponentFixture<DeleteEmployeeNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteEmployeeNgrxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEmployeeNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
