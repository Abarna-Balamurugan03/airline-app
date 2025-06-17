import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Payment {
  paymentId?: number;
  amount: number;
  paymentDate: string;
  paymentMethod: string;
  paymentStatus: string;
}


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl='http://localhost:4000/booking/payment'
  constructor(private http:HttpClient) { }

  addPayment(payment: Payment):Observable<Payment>{
    return this.http.post<Payment>(`${this.baseUrl}/add`,payment)
  }

  viewPayment(id:number):Observable<Payment>{
    return this.http.get<Payment>(`${this.baseUrl}/${id}`);
  }

  getAllPayments():Observable<Payment[]>{
    return this.http.get<Payment[]>(`${this.baseUrl}/all`)
  }
}
