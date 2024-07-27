import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RegisterData} from "../../../models/registerData.model";
import {AuthService} from "../../../services/authService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  message!: string;
  messageType!: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      profileImg: ['',]
    });
  }

  ngOnInit(): void {
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      const userData: RegisterData = this.registerForm.value;
      this.authService.register(userData).subscribe(
        response => {
          this.message = response.message || 'Registro exitoso';
          this.messageType = 'success';
          this.router.navigate(['/login']);
        },
        error => {
          // Assuming the server might return a JSON object with a 'message' field
          // or a plain text response
          const errorMessage = error.error.message || error.error || 'Error durante el registro';
          this.message = errorMessage;
          this.messageType = 'danger';
        }
      );
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
