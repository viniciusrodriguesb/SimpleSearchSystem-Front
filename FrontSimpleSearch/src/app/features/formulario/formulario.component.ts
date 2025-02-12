import { RespostaFormularioDTO } from './../../core/models/DTOs/RespostaFormularioDTO';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { FormularioService } from '../../core/services/formulario.service';
import { FormularioDTO } from '../../core/models/DTOs/FormularioDTO';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RespostaService } from '../../core/services/resposta.service';

@Component({
  selector: 'app-formulario',
  imports: [
    CommonModule,
    HttpClientModule,
    LoaderComponent,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [FormularioService, RespostaService],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent implements OnInit {
  public formulario: FormularioDTO | undefined;
  public isLoading: boolean = false;
  public questionario!: FormGroup;
  //Todo: quando for inserido o login pegar o ID do usuário logado.
  public idUsuario: number = 1;

  constructor(
    private _formularioService: FormularioService,
    private _respostaService: RespostaService,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.carregarFormulario();
  }

  carregarFormulario() {
    this.isLoading = true;

    const id = Number(this._route.snapshot.paramMap.get('id'));

    if (isNaN(id)) {
      this.isLoading = false;
      console.error('Ocorreu um erro na requisição deste formulario.');
    } else {
      this._formularioService.obterFormularioPorId(id).subscribe(
        (dto: FormularioDTO) => {
          this.formulario = dto;
          this.gerarFormulario();
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

  gerarFormulario() {
    let formControls: any = {};

    this.formulario?.perguntas?.forEach((perg: any) => {
      formControls[perg.id] = [''];
    });

    this.questionario = this._formBuilder.group(formControls);
  }

  enviarRespostas() {
    const respostas = this.questionario.value;

    const repostaFormulario: RespostaFormularioDTO = {
      dadosFormulario: {
        idFormulario: this.formulario?.id,
        idUsuario: this.idUsuario,
      },
      dadosResposta: Object.keys(respostas).map((idPergunta) => ({
        idPergunta: Number(idPergunta),
        idOpcao: Number(respostas[idPergunta]),
      })),
    };

    this._respostaService.salvarRespostas(repostaFormulario).subscribe(
      (response) => {
        console.log('Retorno:', response);
      },
      (error) => {
        console.log('Erro ao enviar a requisição', error);
      }
    );
  }
}
