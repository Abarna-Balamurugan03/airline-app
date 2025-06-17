import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface FrequentFlyer{
  flyerId?:number;
  membershipNumber:String;
  status:String;
  pointsEarned:number;
  tierExpiryDate:String;
  customer:Customer;
}

export interface Customer{
  customerId?:number;
}

@Injectable({
  providedIn: 'root'
})
export class FrequentFlyerService {
  private baseUrl='http://localhost:2000/customer/flyer';
  constructor(private http:HttpClient) { }

  addFlyer(flyer:FrequentFlyer):Observable<FrequentFlyer>{
    return this.http.post<FrequentFlyer>(`${this.baseUrl}/add`,flyer);
  }

  viewFlyer(id:number):Observable<FrequentFlyer>{
    return this.http.get<FrequentFlyer>(`${this.baseUrl}/${id}`);
  }

  getAllFlyer():Observable<FrequentFlyer[]>{
    return this.http.get<FrequentFlyer[]>(`${this.baseUrl}/all`);
  }
}
