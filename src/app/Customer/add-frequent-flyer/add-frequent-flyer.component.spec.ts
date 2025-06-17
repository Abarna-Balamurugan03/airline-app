import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFrequentFlyerComponent } from './add-frequent-flyer.component';

describe('AddFrequentFlyerComponent', () => {
  let component: AddFrequentFlyerComponent;
  let fixture: ComponentFixture<AddFrequentFlyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFrequentFlyerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFrequentFlyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
