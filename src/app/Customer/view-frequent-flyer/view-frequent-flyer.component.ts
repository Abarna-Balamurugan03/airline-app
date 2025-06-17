import { Component, OnInit } from '@angular/core';
import { FrequentFlyer, FrequentFlyerService } from '../../service/frequent-flyer.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-frequent-flyer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './view-frequent-flyer.component.html',
  styleUrl: './view-frequent-flyer.component.css'
})
export class ViewFrequentFlyerComponent implements OnInit{
  
  flyerId=0;
  flyer!:FrequentFlyer;
  flyers:FrequentFlyer[]=[];
  
  constructor(private flyerService:FrequentFlyerService){}

  ngOnInit(): void {
    this.flyerService.getAllFlyer().subscribe(data=>{
      this.flyers=data;
    });
  }

  viewFlyer(){
    this.flyerService.viewFlyer(this.flyerId).subscribe(data=>{
      this.flyer=data;
    });
  }
}
