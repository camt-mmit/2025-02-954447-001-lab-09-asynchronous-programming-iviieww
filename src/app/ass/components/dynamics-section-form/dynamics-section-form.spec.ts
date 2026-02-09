import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsSectionForm } from './dynamics-section-form';

describe('DynamicsSectionForm', () => {
  let component: DynamicsSectionForm;
  let fixture: ComponentFixture<DynamicsSectionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicsSectionForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicsSectionForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
