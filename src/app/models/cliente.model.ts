export interface ICliente {
  id?: number;
  nome: string;
  sexo: string;
  cpf?: string;
  dataNascimento: string;
  enderecoCadastrado?: boolean;
}
