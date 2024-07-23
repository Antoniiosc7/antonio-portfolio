import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {window} from "rxjs";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tfg',
  standalone: true,
  templateUrl: './tfg.component.html',
  styleUrl: './tfg.component.css',
  imports: [CommonModule, TranslateModule, TranslateModule]
})
export class TfgComponent {

  title: string = 'Modelado y Prueba de TPAs en el marco de DORA';
  grade: string = '9,5';
  description: string = `En mi TFG, he desarrollado un microservicio que se integra en el ecosistema de Bluejay para facilitar la creación de métricas.
  Este proyecto ha sido una experiencia enriquecedora, permitiéndome aplicar conocimientos teóricos en un entorno práctico y dinámico.
  He trabajado en la mejora de la documentación y funcionalidades de Bluejay, así como en la integración de tecnologías como Grafana para la visualización de datos.
  Entre los desafíos abordados se incluye la necesidad de configurar microservicios localmente, diseñar una página de Testing Automático flexible y desarrollar plugins personalizados para visualizaciones específicas.
  A través de un enfoque iterativo y colaborativo, hemos superado estos obstáculos, mejorando la calidad del producto final.`;
  pdfUrl: string = 'tfg/TFG_AntonioSaborido.pdf';  // Asegúrate de colocar el archivo PDF en esta ubicación

  constructor() {
  }
  downloadPDF() {
    const win = window as any;
    win.open(this.pdfUrl, '_blank');
  }


}
