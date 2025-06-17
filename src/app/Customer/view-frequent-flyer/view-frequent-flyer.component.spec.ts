import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFrequentFlyerComponent } from './view-frequent-flyer.component';

describe('ViewFrequentFlyerComponent', () => {
  let component: ViewFrequentFlyerComponent;
  let fixture: ComponentFixture<ViewFrequentFlyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewFrequentFlyerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewFrequentFlyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
