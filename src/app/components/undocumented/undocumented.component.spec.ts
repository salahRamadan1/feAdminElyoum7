import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndocumentedComponent } from './undocumented.component';

describe('UndocumentedComponent', () => {
  let component: UndocumentedComponent;
  let fixture: ComponentFixture<UndocumentedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UndocumentedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UndocumentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
