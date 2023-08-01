import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBoxComponent } from './form-box.component';

describe('FormBoxComponent', () => {
  let component: FormBoxComponent;
  let fixture: ComponentFixture<FormBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBoxComponent]
    });
    fixture = TestBed.createComponent(FormBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
