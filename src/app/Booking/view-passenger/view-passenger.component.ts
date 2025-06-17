import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Passenger, PassengerService } from '../../service/passenger.service';

@Component({
  selector: 'app-view-passenger',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './view-passenger.component.html',
  styleUrl: './view-passenger.component.css'
})
export class ViewPassengerComponent implements OnInit {
  passenger!: Passenger;
  passengers:Passenger[]=[];
  passengerId=0;

  constructor(private passengerService: PassengerService){}

  ngOnInit(): void {
    this.passengerService.getAllPassenger().subscribe(data=>{
      this.passengers=data;
    });
  }

  viewPassenger(){
    this.passengerService.viewPassenger(this.passengerId).subscribe(data=>{
       this.passenger=data;
    });
  }

}
