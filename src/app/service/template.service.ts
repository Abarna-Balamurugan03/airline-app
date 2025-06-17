import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface NotificationTemplate{
  id?:number;
  templateId:number;
  templateName:String;
  content:String;
}

@Injectable({
  providedIn: 'root'
})

export class TemplateService {
  private baseUrl='http://localhost:3000/notification/template';
  constructor( private  http: HttpClient) { }

  addTemplate(notification:NotificationTemplate):Observable<NotificationTemplate>{
     return this.http.post<NotificationTemplate>(`${this.baseUrl}/add`,notification);
  }

  viewTemplate(id:number):Observable<NotificationTemplate>{
    return this.http.get<NotificationTemplate>(`${this.baseUrl}/${id}`);
  }

  getAllTemplates():Observable<NotificationTemplate[]>{
    return this.http.get<NotificationTemplate[]>(`${this.baseUrl}/all`);
  }

}

