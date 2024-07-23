import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    TranslateModule,
    NgForOf
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

}
