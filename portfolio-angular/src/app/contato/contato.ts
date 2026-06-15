import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-contato',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', Validators.required],
    });
  }

  enviar() {
    if (this.form.valid) {
      const { nome, email, mensagem } = this.form.value;
      const mailto = `mailto:martinss.joice2009@gmail.com?subject=Contato de ${nome}&body=${mensagem}%0A%0ADe: ${email}`;
      window.location.href = mailto;
      this.form.reset();
    }
  }
}