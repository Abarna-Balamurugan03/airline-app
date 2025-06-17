import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export interface Payment {
  paymentId: number;
}

export interface Booking {
  bookingId?: number;
  bookingDate: string;
  seatNumber: string;
  status: string;
  customerId: number;
  flightId: number;
  payment: Payment;
}


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseUrl = 'http://localhost:4000/booking';
  constructor(private http: HttpClient) { }

  addBooking(booking: Booking): Observable<Booking> {
  return this.http.post<Booking>(`${this.baseUrl}/add`, booking);
  }

  viewBooking(id:number):Observable<Booking>{
    return this.http.get<Booking>(`${this.baseUrl}/${id}`);
  }

  getAllBookings():Observable<Booking[]>{
    return this.http.get<Booking[]>(`${this.baseUrl}/all`);
  }

  updateBooking(id:number,booking:Booking):Observable<Booking>{
    return this.http.put<Booking>(`${this.baseUrl}/update/${id}`,booking);
  }

  
deleteBooking(id: number): Observable<string> {
  return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
}


}
