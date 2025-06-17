import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer, CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})

export class AddCustomerComponent implements OnInit{
  customers:Customer[]=[];
  newCustomer:Customer={firstName:'',lastName:'',email:'',phone:'',dateOfBirth:'',loyaltyPoints:''};
  constructor(private customerService:CustomerService){}
  
  ngOnInit(): void {
  }

  addCustomer(){
    this.customerService.addCustomer(this.newCustomer).subscribe(data=>{
      this.customers.push(data);
      this.newCustomer={firstName:'',lastName:'',email:'',phone:'',dateOfBirth:'',loyaltyPoints:''};
    })
  }

  
}
