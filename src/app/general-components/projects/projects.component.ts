import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgForOf,
    MatCardModule,
    MatButton
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Jump Marius',
      description: 'Juego de plataformas en 2D realizado con la librería de Python, Pygame.',
      repoUrl: 'https://github.com/Antoniiosc7/JumpMarius',
      isTFG: false,
    },
    {
      title: 'Jersey Detection',
      description: 'Detección de texto en imagenes, principalmente basado en camisetas de futbol que detectan el jugador. Hecho en Python.',
      repoUrl: 'https://github.com/Antoniiosc7/JerseyDetection',
      isTFG: false,
    },
    {
      title: 'Twitch Clips',
      description: ' Integración de la api de twitch en una página svelte que permite ver los clips más populares de los streamers de League of Legends. Realizado con Svelte.',
      repoUrl: 'https://github.com/Antoniiosc7/TwitchClips',
      isTFG: false,
    },
    {
      title: 'Api Tennis',
      description: 'Este repositorio crea una API usando Javascript y Expressjs sobre estadisticas de tenis. Hecho en JavaScript',
      repoUrl: 'https://github.com/Antoniiosc7/TFG-Server',
      isTFG: false,
    },
    {
      title: 'Juego de la Serpiente',
      description: 'Es una recreación del clásico juego de la serpiente que tiene que comer manzanas evitando chocarse tanto con los bordes como con los obstáculos intermedio. Hecho usando Haskell.',
      repoUrl: 'https://github.com/Antoniiosc7/TFG-Server',
      isTFG: false,
    },

    {
      title: 'TFG - Modelado y Prueba de TPAs en el marco de DORA',
      description: 'he desarrollado un microservicio que se integra en el ecosistema de Bluejay para facilitar la creación de métricas.',
      tfgLink: '/proyectos/tfg',
      repoUrl: 'https://github.com/Antoniiosc7/tp-tester',
      isTFG: true,
    }
  ];
}
