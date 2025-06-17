import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlightService, Flight } from '../../service/flight.service';

@Component({
  selector: 'app-add-flight',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './add-flight.component.html',
  styleUrl: './add-flight.component.css'
})
export class AddFlightComponent implements OnInit {

  flights: Flight[] = [];
  newFlight: Flight = {
    flightNumber: 0,
    departureTime: '',
    arrivalTime: '',
    seatCapacity: '',
    availableSeats: '',
    status: '',
    departureAirport: { airportId: 0 },
    arrivalAirport: { airportId: 0 }
  };

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {}

  addFlight() {
    this.flightService.addFlight(this.newFlight).subscribe(data => {
      this.flights.push(data);
      this.newFlight = {
        flightNumber: 0,
        departureTime: '',
        arrivalTime: '',
        seatCapacity: '',
        availableSeats: '',
        status: '',
        departureAirport: { airportId: 0 },
        arrivalAirport: { airportId: 0 }
      };
    });
  }
}

