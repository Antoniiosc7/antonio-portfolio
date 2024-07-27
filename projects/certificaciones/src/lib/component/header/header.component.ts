
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/authService';
import {window} from "rxjs";
import {CommonModule, Location} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, private location: Location) { } // Inyecta el servicio de sesión
  isAdmin = false;


  ngOnInit(): void {
    this.authService.checkTokenValidity().subscribe();
/*
    this.authService.isAdmin().subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    });

 */
  }


  reloadPage(): void {
    location.reload();
  }
  protected readonly window = window;
}
