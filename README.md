# IcatuTesteFrontEnd
Projeto Angular desenvolvido como parte de solução para processo seletivo da Icatu.


### Sobre o Desenvolvimento do Projeto
Projeto foi gerado com Angular CLI versão 6.2.1.  Para visualizar o código fonte, deve-se fazer um clone do projeto através do GitHub.  Após o término do clone, navegar até a pasta inicial do projeto e executar o comando `npm install` para que as referências utilizadas no desenvolvimento sejam instaladas.


### Pré-requisitos
Este projeto utiliza uma API como backend cujo código fonte encontra-se no repositório do GitHub frianelli-lopes/IcatuTeste.  É necessário clonar o projeto desta API, compilá-lo e executá-lo.  Verificar em qual porta a API está sendo executada e alterar o arquivo `src/app/util/constantes.ts`.
```
export const API = "https://localhost:44364/api";
```

### Execução
Para executar este projeto, navegar até a pasta inicial e executar o comando `ng serve`.  Após compilação, abrir o navegador de preferência e digitar a URL `http://localhost:4200`.  Ao abrir a página de Login, informar valores iguais para o usuário e para a senha.


### Autor/Data
Flavio Rianelli
Abril/2019
