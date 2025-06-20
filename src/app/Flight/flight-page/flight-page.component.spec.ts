import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightPageComponent } from './flight-page.component';

describe('FlightPageComponent', () => {
  let component: FlightPageComponent;
  let fixture: ComponentFixture<FlightPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
