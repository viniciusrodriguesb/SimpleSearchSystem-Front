import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { FormularioService } from '../../core/services/formulario.service';
import { FormularioDTO } from '../../core/models/DTOs/FormularioDTO';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, HttpClientModule, LoaderComponent, RouterModule],
  providers: [FormularioService],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent implements OnInit {
  public formulario: FormularioDTO | undefined;
  public isLoading: boolean = false;

  constructor(
    private _formularioService: FormularioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.carregarFormulario();
  }

  carregarFormulario() {
    this.isLoading = true;

    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (isNaN(id)) {
      this.isLoading = false;
      console.error('Ocorreu um erro na requisição deste formulario.');
    } else {
      this._formularioService.obterFormularioPorId(id).subscribe(
        (dto: FormularioDTO) => {
          this.formulario = dto;
          this.isLoading = false;
          console.log(this.formulario);
        },
        (error) => {
          console.error('Erro ao obter os formulários.', error);
          this.isLoading = false;
        }
      );
    }
  }
}
