import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public allForms!: {
    descricao: string;
    dtCriacao: string;
    autor: string;
    icAtivo: boolean;
  }[];

  public forms!: {
    descricao: string;
    dtCriacao: string;
    autor: string;
    icAtivo: boolean;
  }[];

  public filteredForms!: {
    descricao: string;
    dtCriacao: string;
    autor: string;
    icAtivo: boolean;
  }[];

  paginaAtual: number = 1;
  pageSize: number = 3;
  totalPaginas: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.allForms = [
      {
        descricao: 'Formulário Vinicius',
        dtCriacao: '01/01/2025 10:00:01',
        autor: 'Vinicius Bastos',
        icAtivo: true,
      },
      {
        descricao: 'Formulário João',
        dtCriacao: '02/01/2025 11:30:15',
        autor: 'João Silva',
        icAtivo: true,
      },
      {
        descricao: 'Formulário Maria',
        dtCriacao: '03/01/2025 14:45:30',
        autor: 'Maria Souza',
        icAtivo: true,
      },
      {
        descricao: 'Formulário Ana',
        dtCriacao: '04/01/2025 09:20:45',
        autor: 'Ana Paula',
        icAtivo: true,
      },
      {
        descricao: 'Formulário Carlos',
        dtCriacao: '05/01/2025 16:10:05',
        autor: 'Carlos Santos',
        icAtivo: true,
      },
      {
        descricao: 'Formulário Pedro',
        dtCriacao: '06/01/2025 13:55:42',
        autor: 'Pedro Henrique',
        icAtivo: true,
      },
      {
        descricao: 'Formulário Julia',
        dtCriacao: '07/01/2025 08:40:15',
        autor: 'Julia Ferreira',
        icAtivo: true,
      },
      {
        descricao: 'Formulário Bruno',
        dtCriacao: '08/01/2025 17:25:50',
        autor: 'Bruno Almeida',
        icAtivo: true,
      },
      {
        descricao: 'Formulário Fernanda',
        dtCriacao: '09/01/2025 12:00:30',
        autor: 'Fernanda Costa',
        icAtivo: true,
      },
      {
        descricao: 'Formulário Rafael',
        dtCriacao: '10/01/2025 15:35:20',
        autor: 'Rafael Lima',
        icAtivo: true,
      },
    ];

    this.totalPaginas = Math.ceil(this.allForms.length / this.pageSize);
    this.carregarFormularios();
  }

  carregarFormularios(): void {
    const start = (this.paginaAtual - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.forms = this.allForms.slice(start, end);
  }

  mudarPagina(novaPagina: number): void {
    if (novaPagina >= 1 && novaPagina <= this.totalPaginas) {
      this.paginaAtual = novaPagina;
      this.carregarFormularios();
    }
  }
}
