import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotificationTemplate, TemplateService } from '../../service/template.service';

@Component({
  selector: 'app-view-template',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './view-template.component.html',
  styleUrl: './view-template.component.css'
})
export class ViewTemplateComponent implements OnInit{
  templates:NotificationTemplate[]=[];
  template!:NotificationTemplate;
  templateId=0;

  constructor(private templateService: TemplateService){}

  ngOnInit(): void {
    this.templateService.getAllTemplates().subscribe(data=>{
      this.templates=data;
    });
  }

  viewTemplate(){
    this.templateService.viewTemplate(this.templateId).subscribe(data=>{
      this.template=data;
    })
  }

}
