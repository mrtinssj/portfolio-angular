import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TecnologiaService, Tecnologia } from '../tecnologia.service';

@Component({
  selector: 'app-catalogo',
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo implements OnInit {
  private service = inject(TecnologiaService);
  private cdr = inject(ChangeDetectorRef);
  tecnologias: Tecnologia[] = [];
  carregando = true;
  erro = '';

  ngOnInit() {
    this.service.listar().subscribe({
      next: (lista) => {
        this.tecnologias = lista;
        this.carregando = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.erro = 'Falha ao carregar o catálogo.';
        this.carregando = false;
        this.cdr.detectChanges();
      }
    });
  }
}
