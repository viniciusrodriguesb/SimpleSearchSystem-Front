import { FormularioPaginadoDTO } from './../../core/models/DTOs/FormularioPaginadoDTO';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../../core/services/formulario.service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, LoaderComponent, RouterModule],
  providers: [FormularioService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public formularios: FormularioPaginadoDTO[] | undefined;
  public isLoading: boolean = false;

  constructor(
    private _formularioService: FormularioService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.carregarFormularios();
  }

  carregarFormularios() {
    this.isLoading = true;
    this._formularioService.obterFormulariosMaisRespondidos().subscribe(
      (dto: Array<FormularioPaginadoDTO>) => {
        this.formularios = dto;
        this.isLoading = false;
      },
      (error) => {
        console.error('Erro ao obter os formulários.', error);
        this.isLoading = false;
      }
    );
  }

  navegarParaFormulario(id: number | undefined) {
    console.log('entrou', id);
    
    if (id != null || id != undefined) {
      this._router.navigate(['formulario', id]);
    }
  }
}
