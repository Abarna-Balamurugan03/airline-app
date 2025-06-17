import { Routes } from '@angular/router';
import { AddBookingComponent } from './Booking/add-booking/add-booking.component';
import { AddPaymentComponent } from './Booking/add-payment/add-payment.component';
import { AddPassengerComponent } from './Booking/add-passenger/add-passenger.component';
import { ViewBookingComponent } from './Booking/view-booking/view-booking.component';
import { HomeComponent } from './home/home.component';
import { BookingPageComponent } from './Booking/booking-page/booking-page.component';
import { ViewPaymentComponent } from './Booking/view-payment/view-payment.component';
import { ViewPassengerComponent } from './Booking/view-passenger/view-passenger.component';
import { AddFlightComponent } from './Flight/add-flight/add-flight.component';
import { ViewFlightComponent } from './Flight/view-flight/view-flight.component';
import { AddAirportComponent } from './Flight/add-airport/add-airport.component';
import { ViewAirportComponent } from './Flight/view-airport/view-airport.component';
import { FlightPageComponent } from './Flight/flight-page/flight-page.component';
import { AddCustomerComponent } from './Customer/add-customer/add-customer.component';
import { ViewCustomerComponent } from './Customer/view-customer/view-customer.component';
import { AddFrequentFlyerComponent } from './Customer/add-frequent-flyer/add-frequent-flyer.component';
import { ViewFrequentFlyerComponent } from './Customer/view-frequent-flyer/view-frequent-flyer.component';
import { CustomerPageComponent } from './Customer/customer-page/customer-page.component';
import { NotificationPageComponent } from './Notification/notification-page/notification-page.component';
import { AddNotificationComponent } from './Notification/add-notification/add-notification.component';
import { ViewNotificationComponent } from './Notification/view-notification/view-notification.component';
import { AddTemplateComponent } from './Notification/add-template/add-template.component';
import { ViewTemplateComponent } from './Notification/view-template/view-template.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'booking', component:BookingPageComponent},
    {path:'flight', component:FlightPageComponent},
    {path:'add-booking', component:AddBookingComponent},
    {path:'view-booking',component:ViewBookingComponent},
    {path:'add-payment', component:AddPaymentComponent},
    {path:'view-payment',component:ViewPaymentComponent},
    {path:'add-passenger', component:AddPassengerComponent},
    {path:'view-passenger',component:ViewPassengerComponent},
    {path:'add-flight',component:AddFlightComponent},
    {path:'view-flight',component:ViewFlightComponent},
    {path:'add-airport',component:AddAirportComponent},
    {path:'view-airport',component:ViewAirportComponent},
    {path:'customer',component:CustomerPageComponent},
    {path:'add-customer',component:AddCustomerComponent},
     {path:'view-customer',component:ViewCustomerComponent},
    {path:'add-flyer',component:AddFrequentFlyerComponent},
    {path:'view-flyer',component:ViewFrequentFlyerComponent},
    {path:'notification',component:NotificationPageComponent},
    {path:'add-notification',component:AddNotificationComponent},
    {path:'view-notification',component:ViewNotificationComponent},
    {path:'add-template',component:AddTemplateComponent},
    {path:'view-template',component:ViewTemplateComponent}

    
    
];
