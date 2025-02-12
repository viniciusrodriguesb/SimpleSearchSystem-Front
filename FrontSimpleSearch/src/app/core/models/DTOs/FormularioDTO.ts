export class FormularioDTO {
  id: number | undefined;
  descricao: string | undefined;
  dtCriacao: string | undefined;
  perguntas: Array<Pergunta> | undefined;
}

export class Pergunta {
  id: number | undefined;
  texto: string | undefined;
  ordem: number | undefined;
  opcoes: Array<Opcao> | undefined;
}

export class Opcao {
  id: number | undefined;
  texto: string | undefined;
  ordem: number | undefined;
}
