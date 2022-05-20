import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodelabOverviewComponent } from './codelab-overview.component';

describe('CodelabOverviewComponent', () => {
  let component: CodelabOverviewComponent;
  let fixture: ComponentFixture<CodelabOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodelabOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodelabOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
