import { Component, OnInit } from '@angular/core';
import { FlightService, Flight } from '../../service/flight.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-flight',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './view-flight.component.html',
  styleUrl: './view-flight.component.css'
})
export class ViewFlightComponent implements OnInit {

  flightId: number = 0;
  flight: Flight | null = null;
  flights: Flight[] = [];

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.getAllFlights();
  }

  viewFlight() {
    this.flightService.viewFlight(this.flightId).subscribe(data => {
      this.flight = data;
    });
  }

  getAllFlights() {
    this.flightService.getAllFlight().subscribe(data => {
      this.flights = data;
    });
  }
}

