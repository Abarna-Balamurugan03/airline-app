import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AddBookingComponent } from './Booking/add-booking/add-booking.component';
import { AddPaymentComponent } from './Booking/add-payment/add-payment.component';
import { AddPassengerComponent } from './Booking/add-passenger/add-passenger.component';
import { ViewBookingComponent } from './Booking/view-booking/view-booking.component';
import { HomeComponent } from './home/home.component';
import { BookingPageComponent } from './Booking/booking-page/booking-page.component';
import { ViewPassengerComponent } from './Booking/view-passenger/view-passenger.component';
import { ViewPaymentComponent } from './Booking/view-payment/view-payment.component';
import { AddAirportComponent } from './Flight/add-airport/add-airport.component';
import { ViewAirportComponent } from './Flight/view-airport/view-airport.component';
import { AddFlightComponent } from './Flight/add-flight/add-flight.component';
import { ViewFlightComponent } from './Flight/view-flight/view-flight.component';
import { FlightPageComponent } from './Flight/flight-page/flight-page.component';
import { AddCustomerComponent } from './Customer/add-customer/add-customer.component';
import { ViewCustomerComponent } from './Customer/view-customer/view-customer.component';
import { AddFrequentFlyerComponent } from './Customer/add-frequent-flyer/add-frequent-flyer.component';
import { ViewFrequentFlyerComponent } from './Customer/view-frequent-flyer/view-frequent-flyer.component';
import { CustomerPageComponent } from './Customer/customer-page/customer-page.component';
import { NotificationPageComponent } from './Notification/notification-page/notification-page.component';
import { AddNotificationComponent } from './Notification/add-notification/add-notification.component';
import { AddTemplateComponent } from './Notification/add-template/add-template.component';
import { ViewNotificationComponent } from './Notification/view-notification/view-notification.component';
import { ViewTemplateComponent } from './Notification/view-template/view-template.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule, CommonModule,HomeComponent,BookingPageComponent, AddBookingComponent, ViewBookingComponent,AddPaymentComponent,ViewPaymentComponent,AddPassengerComponent,ViewPassengerComponent,AddAirportComponent,ViewAirportComponent,AddFlightComponent,ViewFlightComponent,FlightPageComponent,AddCustomerComponent,ViewCustomerComponent,AddFrequentFlyerComponent,ViewFrequentFlyerComponent,CustomerPageComponent,NotificationPageComponent,AddNotificationComponent,AddTemplateComponent,ViewNotificationComponent,ViewTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'airline-app';
}
