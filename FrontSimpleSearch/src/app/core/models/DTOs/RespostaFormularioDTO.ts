export class RespostaFormularioDTO {
  dadosFormulario: DadosFormularioDTO | undefined;
  dadosResposta: Array<DadosRespostaDTO> | undefined;
}

export class DadosFormularioDTO {
  idFormulario: number | undefined;
  idUsuario: number | undefined;
}

export class DadosRespostaDTO {
  idPergunta: number | undefined;
  idOpcao: number | undefined;
}
