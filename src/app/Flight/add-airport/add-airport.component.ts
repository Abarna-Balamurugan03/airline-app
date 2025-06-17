import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AirportService, Airport } from '../../service/airport.service';

@Component({
  selector: 'app-add-airport',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './add-airport.component.html',
  styleUrl: './add-airport.component.css'
})
export class AddAirportComponent implements OnInit {

  airports: Airport[] = [];
  newAirport: Airport = { code: '', name: '', country: '', city: '' };

  constructor(private airportService: AirportService) {}

  ngOnInit(): void {}

  addAirport() {
    this.airportService.addAirport(this.newAirport).subscribe(data => {
      this.airports.push(data);
      this.newAirport = { code: '', name: '', country: '', city: '' };
    });
  }
}
