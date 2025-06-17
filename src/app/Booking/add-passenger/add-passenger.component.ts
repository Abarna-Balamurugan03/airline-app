import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Passenger, PassengerService } from '../../service/passenger.service';

@Component({
  selector: 'app-add-passenger',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './add-passenger.component.html',
  styleUrl: './add-passenger.component.css'
})
export class AddPassengerComponent implements OnInit {
  passengers:Passenger[]=[];
  newPassenger:Passenger={name:'',gender:'',age:0,passportNumber:'',nationality:'',booking:{bookingId:0}};

  constructor(private passengerService:PassengerService){};

  ngOnInit(): void {
  }
  addPassenger(){
    this.passengerService.addPassenger(this.newPassenger).subscribe(data=>{
      this.passengers.push(data);
      this.newPassenger={name:'',gender:'',age: 0,passportNumber:'',nationality:'',booking: { bookingId: 0 }};

    })
  }

  

}
