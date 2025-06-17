import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Notification{
  id?:number;
  notificationId:number;
  customerId:number;
  message:String;
  type:String;
  sentStatus:String;
  sentDate:String;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseUrl='http://localhost:3000/notification'
  constructor(private http:HttpClient) { }


  addNotification(notification:Notification):Observable<Notification>{
    return this.http.post<Notification>(`${this.baseUrl}/add`,notification);
  }

  viewNotification(id:number):Observable<Notification>{
    return this.http.get<Notification>(`${this.baseUrl}/${id}`);
  }

  getAllNotifications():Observable<Notification[]>{
    return this.http.get<Notification[]>(`${this.baseUrl}/all`);
  }
}
