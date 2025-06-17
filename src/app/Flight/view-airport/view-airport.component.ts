import { Component, OnInit } from '@angular/core';
import { AirportService, Airport } from '../../service/airport.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-airport',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './view-airport.component.html',
  styleUrl: './view-airport.component.css'
})
export class ViewAirportComponent implements OnInit {

  airportId: number = 0;
  airport!: Airport ;
  airports: Airport[] = [];

  constructor(private airportService: AirportService) {}

  ngOnInit(): void {
    this.getAllAirports();
  }

  viewAirport() {
    this.airportService.getAirportById(this.airportId).subscribe(data => {
      this.airport = data;
    });
  }

  getAllAirports() {
    this.airportService.getAllAirports().subscribe(data => {
      this.airports = data;
    });
  }
}

