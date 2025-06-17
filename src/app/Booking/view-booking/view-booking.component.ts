import { Component, OnInit } from '@angular/core';
import { Booking, BookingService } from '../../service/booking.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-booking',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './view-booking.component.html',
  styleUrl: './view-booking.component.css'
})


export class ViewBookingComponent implements OnInit {
  bookingId = 0;
  booking!: Booking;
  bookings: Booking[] = [];
  selectedBooking?: Booking;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.getAllBookings();
  }

  getAllBookings() {
    this.bookingService.getAllBookings().subscribe(data => {
      this.bookings = data;
    });
  }

  viewBooking() {
    this.bookingService.viewBooking(this.bookingId).subscribe(data => {
      this.booking = data;
    });
  }

  editBooking(booking: Booking) {
    this.selectedBooking = { ...booking }; // clone to avoid direct mutation
  }

  updateBooking() {
    if (this.selectedBooking && this.selectedBooking.bookingId) {
      this.bookingService.updateBooking(this.selectedBooking.bookingId, this.selectedBooking)
        .subscribe(() => {
          alert('Booking updated successfully!');
          this.getAllBookings();
          this.selectedBooking = undefined;
        });
    }
  }

  deleteBooking(id: number) {
    if (confirm('Are you sure you want to delete this booking?')) {
      this.bookingService.deleteBooking(id).subscribe(() => {
        alert('Booking deleted successfully!');
        this.getAllBookings();
      });
    }
  }
}
