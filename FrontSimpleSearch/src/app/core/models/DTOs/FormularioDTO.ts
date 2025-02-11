export class FormularioDTO {
  descricao: string | undefined;
  dtCriacao: string | undefined;
  perguntas: Array<Pergunta> | undefined;
}

export class Pergunta {
  texto: string | undefined;
  ordem: number | undefined;
  opcoes: Array<Opcao> | undefined;
}

export class Opcao {
  texto: string | undefined;
  ordem: number | undefined;
}
