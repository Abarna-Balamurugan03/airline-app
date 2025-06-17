import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../service/notification.service';
import { Notification } from '../../service/notification.service';


@Component({
  selector: 'app-add-notification',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-notification.component.html',
  styleUrl: './add-notification.component.css'
})
export class AddNotificationComponent implements OnInit{
  notifications:Notification[]=[];
  newNotification:Notification={notificationId:0,customerId: 0,message:'',type:'',sentStatus:'',sentDate:''};

  constructor(private notificationService:NotificationService){}

  ngOnInit(): void {}
  addNotification(){
    this.notificationService.addNotification(this.newNotification).subscribe(data=>{
        this.notifications.push(data);
        this.newNotification={notificationId:0,customerId:0,message:'',type:'',sentStatus:'',sentDate:''};
  });
  }
}

