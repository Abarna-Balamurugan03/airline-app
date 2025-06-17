import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Payment, PaymentService } from '../../service/payment.service';

@Component({
  selector: 'app-view-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-payment.component.html',
  styleUrl: './view-payment.component.css'
})
export class ViewPaymentComponent implements OnInit {
  payment!: Payment;
  payments: Payment[] = [];
  paymentId = 0;

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.paymentService.getAllPayments().subscribe(data => {
      this.payments= data;
    });
  }

  viewPayment() {
    this.paymentService.viewPayment(this.paymentId).subscribe(data => {
      this.payment = data;
    });
  }
}

