import { Categoria } from './categoria';
import { Endereco } from './endereco';

export class Evento {
  id!: number;
  nome!: string;
  precoDoIngresso!: number;
  quantidade!: number;
  data!: Date;
  descricao!: string;
  endereco!: Endereco;
  categories!: Set<Categoria>;
}
