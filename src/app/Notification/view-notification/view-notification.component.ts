import { Component, OnInit } from '@angular/core';
import { NotificationService,Notification } from '../../service/notification.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-view-notification',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './view-notification.component.html',
  styleUrl: './view-notification.component.css'
})
export class ViewNotificationComponent implements OnInit{
  notifications:Notification[]=[];
  notification!:Notification;
  notificationId=0;

  constructor(private notificationService:NotificationService){}

  ngOnInit(): void {
    this.notificationService.getAllNotifications().subscribe(data=>{
      this.notifications=data;
    })
    
  }

  viewNotification(){
    this.notificationService.viewNotification(this.notificationId).subscribe(data=>{
      this.notification=data;
    })
  }
  
}

