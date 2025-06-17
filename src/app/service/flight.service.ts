import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Flight{
  flightId?:number;
  flightNumber:number;
  departureTime:String;
  arrivalTime:String;
  seatCapacity:String;
  availableSeats:String;
  status:String;
  departureAirport:Airport;
  arrivalAirport: Airport;

}

export interface Airport{
  airportId:number;

}

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private baseUrl='http://localhost:1000/flight';
  constructor(private http: HttpClient) { }

  addFlight(flight: Flight):Observable<Flight>{
    return this.http.post<Flight>(`${this.baseUrl}/add`,flight);
  }

  viewFlight(id:number):Observable<Flight>{
    return this.http.get<Flight>(`${this.baseUrl}/${id}`)
  }

  getAllFlight():Observable<Flight[]>{
    return this.http.get<Flight[]>(`${this.baseUrl}/all`)
  }
}
