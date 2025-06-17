import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from '../../service/customer.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-customer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})
export class ViewCustomerComponent implements OnInit{
  customerId=0;
  customer!:Customer;
  customers:Customer[]=[]

  constructor(private customerService: CustomerService){}
  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(data=>{
      this.customers=data;
    });
  }

  viewCustomer(){
    this.customerService.viewCustomer(this.customerId).subscribe(data=>{
      this.customer=data;
    })
  }

}
