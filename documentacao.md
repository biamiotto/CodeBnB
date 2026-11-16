## Requisitos

### 1.1 Requisitos Funcionais do Sistema

| ID | Requisito | Descrição |
| --- | --- | --- |
| RF01 | Realizar Login | Permitir que usuários acessem o sistema informando e-mail e senha. |
| RF02 | Exibir Tela Principal | Apresentar os imóveis disponíveis, destaques e opções de navegação. |
| RF03 | Cadastrar | Permitir que novos usuários criem uma conta informando seus dados pessoais. |
| RF04 | Consultar | Permitir que usuários consultem informações dos imóveis cadastrados. |
| RF05 | Atualizar | Permitir que usuários atualizem seus dados pessoais e informações do perfil. |
| RF06 | Pesquisar Imóveis | Permitir que usuários pesquisem imóveis por localização, data e quantidade de hóspedes. |
| RF07 | Visualizar Detalhes | Exibir informações completas dos imóveis, incluindo fotos, descrição, endereço, comodidades e preço. |
| RF08 | Cadastrar Imóvel | Permitir que proprietários cadastrem imóveis para aluguel, informando características, fotos e valores. |
| RF09 | Realizar Reserva | Permitir que clientes reservem imóveis disponíveis, selecionando datas de entrada e saída. |
| RF10 | Gerenciar Reservas | Permitir que usuários consultem e acompanhem suas reservas realizadas ou recebidas. |
| RF11 | Excluir | Permitir que proprietários removam imóveis cadastrados e que usuários excluam suas contas. |
| RF12 | Encerrar Login | Permitir que usuários encerrem sua sessão com segurança. |

### 1.2 Requisitos Não Funcionais

| ID | Requisito | Descrição |
| --- | --- | --- |
| RNF01 | Proteção de Dados | Garantir a segurança das informações pessoais e dos dados dos usuários. |
| RNF02 | Integridade dos Dados | Garantir que as informações de usuários, imóveis e reservas sejam armazenadas corretamente. |
| RNF03 | Controle de Acesso | Permitir acesso às funcionalidades conforme o tipo de usuário, como cliente e proprietário. |

## 2 Requisitos de Infraestrutura

| Tecnologia | Versão / ambiente |
| --- | --- |
| JavaScript | Node.js 24 |
| Next.js | 16 |
| React e React DOM | 19 |
| bcryptjs | 3 |
| jsonwebtoken | 9 |
| node:crypto | Integrado ao Node.js |
| PostgreSQL | 18 |
| Prisma e Prisma Client | 6 |
| Ant Design | 6 |