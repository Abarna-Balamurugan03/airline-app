import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Airport {
  airportId?: number;
  code: string;
  name: string;
  country: string;
  city: string;
}

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  private baseUrl = 'http://localhost:1000/flight/airport';

  constructor(private http: HttpClient) {}

  addAirport(airport: Airport): Observable<Airport> {
    return this.http.post<Airport>(`${this.baseUrl}/add`, airport);
  }

  getAirportById(id: number): Observable<Airport> {
    return this.http.get<Airport>(`${this.baseUrl}/${id}`);
  }

  getAllAirports(): Observable<Airport[]> {
    return this.http.get<Airport[]>(`${this.baseUrl}/all`);
  }
}

