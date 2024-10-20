export class Evento {
  id!: number;
  nome!: string;
  precoDoIngresso!: number;
  quantidade!: number;
  data!: Date;
  descricao!: string;
  endereco!: Endereco;
  categories!: Categoria[];
}

export class Endereco {
  id!: number;
  estado!: string;
  cidade!: string;
  rua!: string;
  numero!: string;
}

export class Categoria {
  id!: number;
  nome!: string;
}

