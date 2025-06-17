import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Booking{
  bookingId?:number;
}

export interface Passenger{
  passengerId?:number;
  name:String;
  gender:String;
  age:number;
  passportNumber:String;
  nationality:String;
  booking:Booking;
}

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  private baseUrl='http://localhost:4000/booking/passenger'
  constructor(private http:HttpClient){};
  addPassenger(passenger:Passenger):Observable<Passenger>{
    return this.http.post<Passenger>(`${this.baseUrl}/add`,passenger);
  }

  viewPassenger(id:number):Observable<Passenger>{
    return this.http.get<Passenger>(`${this.baseUrl}/${id}`);
  }

  getAllPassenger():Observable<Passenger[]>{
    return this.http.get<Passenger[]>(`${this.baseUrl}/all`);
  }

}
