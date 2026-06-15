import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-projetos',
  imports: [MatCardModule, MatChipsModule, MatIconModule, MatButtonModule],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css',
})
export class Projetos {
  projetos = [
    {
      nome: 'Noimann Imports',
      descricao: 'Aplicativo para loja de importados desenvolvido para projeto escolar.',
      tech: 'Mobile / E-commerce',
      icone: 'smartphone',
      link: 'https://github.com/mrtinssj/AppTemplate2026',
    },
    {
      nome: 'Agência de Marketing',
      descricao: 'Projeto da minha futura agência focada em soluções digitais.',
      tech: 'Marketing Digital / Web',
      icone: 'campaign',
      link: 'https://github.com/mrtinssj/agencia',
    },
    {
      nome: 'Projeto PHP',
      descricao: 'Sistema desenvolvido no trimestre passado utilizando PHP e Banco de Dados.',
      tech: 'PHP / Backend',
      icone: 'storage',
      link: 'https://github.com/mrtinssj/2026-DWII',
    },
    {
      nome: 'Runora Template',
      descricao: 'Interface de aplicativo exclusiva para Smartwatch.',
      tech: 'UI/UX / Smartwatch',
      icone: 'watch',
      link: 'https://github.com/mrtinssj/RunoraTemplate',
    },
  ];
}