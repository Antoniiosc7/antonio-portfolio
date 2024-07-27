import {Component, OnInit} from '@angular/core';
import {Examen} from "../../models/examen.model";
import {ExamenService} from "../../services/examen.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-examen-page',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './examen-page.component.html',
  styleUrl: './examen-page.component.css'
})
export class ExamenPageComponent implements OnInit {
  examenes: Examen[] = [];

  constructor(private examenService: ExamenService) { }

  ngOnInit(): void {
    this.examenService.getAllExamenes().subscribe(data => {
      this.examenes = data;
    });
  }
}
