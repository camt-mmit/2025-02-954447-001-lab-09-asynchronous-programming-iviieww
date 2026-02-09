import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsSectionView } from './dynamics-section-view';

describe('DynamicsSectionView', () => {
  let component: DynamicsSectionView;
  let fixture: ComponentFixture<DynamicsSectionView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicsSectionView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicsSectionView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
