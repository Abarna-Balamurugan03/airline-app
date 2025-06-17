import { Component, OnInit } from '@angular/core';
import { NotificationTemplate, TemplateService } from '../../service/template.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-template',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-template.component.html',
  styleUrl: './add-template.component.css'
})
export class AddTemplateComponent implements OnInit{
  templates:NotificationTemplate[]=[];
  newTemplate:NotificationTemplate={templateId:0,templateName:'',content:''};

  constructor( private notificationTemplateService:TemplateService){}

  ngOnInit(): void {
  }

  addTemplate(){
    this.notificationTemplateService.addTemplate(this.newTemplate).subscribe(data=>{
      this.templates.push(this.newTemplate);
      this.newTemplate={templateId:0,templateName:'',content:''};
    });
  }


}
