import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProjetoService, Projeto } from '../projeto.service';

@Component({
  selector: 'app-projetos',
  imports: [MatCardModule, MatChipsModule, MatIconModule, MatButtonModule],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css',
})
export class Projetos implements OnInit {
  private service = inject(ProjetoService);
  private cdr = inject(ChangeDetectorRef);
  projetos: Projeto[] = [];
  carregando = true;
  erro = '';

  ngOnInit() {
    this.service.listar().subscribe({
      next: (lista) => {
        this.projetos = lista;
        this.carregando = false;
        this.cdr.detectChanges();
      },
      error: (e) => {
        this.erro = 'Falha ao carregar os projetos.';
        this.carregando = false;
        this.cdr.detectChanges();
      }
    });
  }
}
