import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Booking, BookingService } from '../../service/booking.service';

@Component({
  selector: 'app-add-booking',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './add-booking.component.html',
  styleUrl: './add-booking.component.css'
})
export class AddBookingComponent implements OnInit {
  
  bookings: Booking[] = [];
  newBooking: Booking = {bookingDate: '',seatNumber: '',status: '',customerId: 0,flightId: 0,payment: { paymentId: 0 }};
  updateBookingData: Booking = { bookingId: 0, bookingDate: '',seatNumber: '',status: '',customerId: 0,flightId: 0,payment: { paymentId: 0 } };

  constructor(private bookingService:BookingService){}
  ngOnInit(): void {
  }

  addBooking() {
    this.bookingService.addBooking(this.newBooking).subscribe(data=> {
      this.bookings.push(data);
      this.newBooking = {bookingDate: '',seatNumber: '',status: '',customerId: 0,flightId: 0,payment: { paymentId: 0 }};
    });
  }
}
