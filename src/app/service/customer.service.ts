import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Customer{
  customerId?:number;
  firstName:String;
  lastName:String;
  email:String;
  phone:String;
  dateOfBirth:String;
  loyaltyPoints:String;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl="http://localhost:2000/customer";

  constructor(private http:HttpClient) { }

  addCustomer(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(`${this.baseUrl}/add`,customer);
  }

  viewCustomer(id:number):Observable<Customer>{
    return this.http.get<Customer>(`${this.baseUrl}/${id}`);
  }

  getAllCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.baseUrl}/all`);
  }

  deleteCustomer(id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`)
  }

  

}
