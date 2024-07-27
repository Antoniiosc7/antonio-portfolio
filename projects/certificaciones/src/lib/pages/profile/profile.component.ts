import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { AuthService } from "../../services/authService";
import { ActivatedRoute } from "@angular/router";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import { ResultadoService } from "../../services/resultadoService"; // Adjust the path as needed
import { ExamenService } from "../../services/examen.service"; // Adjust the path as needed
import {combineLatest, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator} from "@angular/material/paginator";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatInput} from "@angular/material/input";
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgIf,
    DatePipe,
    NgForOf,
    MatTableModule,
    MatPaginator,
    MatFormField,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatInput,
    MatLabel,
    FormsModule
  ],
  providers: [ {provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit, OnDestroy {
  user: any;
  filterChapter: string = '';
  startDateFilter: Date | null = null;
  endDateFilter: Date | null = null;
  resultadosConDetalles = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['capituloExamen', 'nombreExamen', 'resultado', 'fechaDeInicio', 'fechaFin'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('picker1') datePicker1!: MatDatepicker<Date>;
  @ViewChild('picker2') datePicker2!: MatDatepicker<Date>;

  private subscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private resultadoService: ResultadoService,
    private examenService: ExamenService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const username = localStorage.getItem('username');
    const id = localStorage.getItem('idUser');

    this.subscription.add(this.loadUserExamResults(Number(id)));

    if (username) {
      this.subscription.add(this.authService.getUserProfile(username).subscribe({
        next: (data) => {
          this.user = data;
        },
        error: (e) => console.error(e)
      }));
    }
  }

  ngAfterViewInit(): void {
    this.resultadosConDetalles.paginator = this.paginator;
  }

  loadUserExamResults(userId: number): Subscription {
    return combineLatest([
      this.resultadoService.getResultadosByUserId(userId),
      this.examenService.getAllExamenes()
    ]).pipe(
      map(([resultados, examenes]) => {
        return resultados.map((resultado: any) => {
          const examenInfo = examenes.find(examen => examen.examenId === resultado.examenId);
          return {
            ...resultado,
            nombreExamen: examenInfo ? examenInfo.nombre : 'Desconocido',
            capituloExamen: examenInfo ? examenInfo.chapter : 'Desconocido'
          };
        });
      })
    ).subscribe(resultadosConDetalles => {
      this.resultadosConDetalles.data = resultadosConDetalles;
      // Asegúrate de que esta línea se ejecute después de que los datos se hayan cargado y asignado
      this.resultadosConDetalles.paginator = this.paginator;
    });
  }
  openDatePicker1() {
    this.datePicker1.open();
  }

  openDatePicker2() {
    this.datePicker2.open();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase(); // Normalize filter value
    if (!filterValue) {
      // If no filter value, reload original data
      this.loadUserExamResults(Number(localStorage.getItem('idUser')));
    } else {
      // Filter the resultadosConDetalles data
      const filteredData = this.resultadosConDetalles.data.filter(item =>
        item.capituloExamen.toLowerCase().includes(filterValue)
      );
      this.resultadosConDetalles.data = filteredData; // Update the table's data source
    }
  }

  applyFilters($event: any) {
    this.applyFilter(this.filterChapter);
    // Asume que applyDateFilter ya maneja ambos filtros de fecha
    this.applyDateFilter(this.startDateFilter, 'start');
    this.applyDateFilter(this.endDateFilter, 'end');
  }
  applyDateFilter(date: Date | null, type: 'start' | 'end') {
    if (type === 'start') {
      this.startDateFilter = date;
    } else {
      this.endDateFilter = date;
    }
    this.loadUserExamResults(Number(localStorage.getItem('idUser')));
  }
}
