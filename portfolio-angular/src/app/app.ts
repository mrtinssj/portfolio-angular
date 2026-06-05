import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'; // Importante para o contato
import { MatInputModule } from '@angular/material/input';         // Importante para o contato
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatToolbarModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Agora o TS vai reconhecer o signal abaixo:
  protected readonly title = signal('Meu Portfólio');
  protected readonly nome = signal('Joice');
  protected readonly subnome = signal('Estudante do Instituto Federal do Paraná');

  protected readonly meusProjetos = signal([
    {
      nome: 'Noimann Imports',
      descricao: 'Aplicativo para loja de importados desenvolvido para projeto escolar.',
      tech: 'Mobile / E-commerce',
      link: 'https://github.com/mrtinssj/AppTemplate2026'
    },
    {
      nome: 'Agência de Marketing',
      descricao: 'Projeto da minha futura agência focada em soluções digitais.',
      tech: 'Marketing Digital / Web',
      link: 'https://github.com/mrtinssj/agencia'
    },
    {
      nome: 'Projeto PHP',
      descricao: 'Sistema desenvolvido no trimestre passado utilizando PHP e Banco de Dados.',
      tech: 'PHP / Backend',
      link: 'https://github.com/mrtinssj/2026-DWII'
    },
    {
      nome: 'Runora Template',
      descricao: 'Interface de aplicativo exclusiva para Smartwatch.',
      tech: 'UI/UX / Smartwatch',
      link: 'https://github.com/mrtinssj/RunoraTemplate'
    }
  ]);

  enviarMensagem() {
    alert('Mensagem enviada com sucesso!');
  }
} 