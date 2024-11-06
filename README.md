# To-Do List - Estrutura MVC

Este é um projeto de uma aplicação de lista de tarefas (To-Do List) desenvolvido utilizando Node.js com a arquitetura MVC (Model-View-Controller). A aplicação usa o Express como framework web, Handlebars como template engine e Sequelize como ORM para facilitar a interação com o banco de dados MySQL.

## 📋 Descrição

A aplicação permite ao usuário:
- Adicionar tarefas à lista.
- Marcar tarefas como concluídas.
- Remover tarefas.
- Visualizar todas as tarefas cadastradas.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento para executar o JavaScript no servidor.
- **Express**: Framework web para Node.js.
- **Handlebars**: Template engine para a renderização dinâmica de páginas HTML.
- **MySQL2**: Cliente MySQL para Node.js.
- **Sequelize**: ORM para Node.js que facilita o trabalho com bancos de dados relacionais.
- **Nodemon**: Ferramenta que reinicia automaticamente o servidor ao detectar mudanças no código.

## 🏗️ Arquitetura

O projeto segue a arquitetura MVC:
- **Model**: Define os modelos de dados e a interação com o banco de dados utilizando Sequelize.
- **View**: Páginas HTML geradas dinamicamente com Handlebars.
- **Controller**: Contém a lógica de controle e manipulação das requisições.

## 📦 Dependências

As principais dependências usadas no projeto são:

```json
{
  "express": "^4.21.1",
  "express-handlebars": "^7.1.3",
  "mysql2": "^3.11.3",
  "nodemon": "^3.1.7",
  "sequelize": "^6.37.5"
}
```

📄 Como Executar o Projeto:

  - 1. Clone o repositório: ``` git clone https://github.com/seu-usuario/seu-repositorio.git ```

  - 2. Instale as dependências: ```npm install express express-handlebars mysql2 nodemon sequelize```


  - 3. Configure o banco de dados:

    - Certifique-se de ter o MySQL instalado e crie um banco de dados para a aplicação.
    - Configure as credenciais do banco de dados no projeto.
  
  - 4. Inicie a aplicação: ```npm start```

  - A aplicação será executada em http://localhost:3000.

📌 Autor
  - João Matheus Magalhães.

📜 Licença
Este projeto é licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
