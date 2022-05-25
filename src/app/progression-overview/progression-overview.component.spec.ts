import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressionOverviewComponent } from './progression-overview.component';

describe('ProgressionOverviewComponent', () => {
  let component: ProgressionOverviewComponent;
  let fixture: ComponentFixture<ProgressionOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressionOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
