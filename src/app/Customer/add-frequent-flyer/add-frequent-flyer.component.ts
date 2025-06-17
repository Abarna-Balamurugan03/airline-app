import { Component, OnInit } from '@angular/core';
import { FrequentFlyer, FrequentFlyerService } from '../../service/frequent-flyer.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-frequent-flyer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-frequent-flyer.component.html',
  styleUrl: './add-frequent-flyer.component.css'
})
export class AddFrequentFlyerComponent implements OnInit{
  flyers:FrequentFlyer[]=[]
  newFlyer:FrequentFlyer={membershipNumber:'',status:'',pointsEarned:0,tierExpiryDate:'',customer:{customerId:0}};
  ngOnInit(): void {
  }

  constructor(private frequentFlyerService:FrequentFlyerService){}

  addFlyer(){
    this.frequentFlyerService.addFlyer(this.newFlyer).subscribe(data=>{
      this.flyers.push(data);
      this.newFlyer={membershipNumber:'',status:'',pointsEarned:0,tierExpiryDate:'',customer:{customerId:0}};
    })
  }


}
