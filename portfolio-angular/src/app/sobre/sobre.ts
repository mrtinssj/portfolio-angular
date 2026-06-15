import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-sobre',
  imports: [MatCardModule, MatChipsModule, MatIconModule, MatDividerModule],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {}