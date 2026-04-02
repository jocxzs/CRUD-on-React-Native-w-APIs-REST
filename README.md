# React Native CRUD com JSON Server 

Este projeto é uma aplicação mobile desenvolvida em **React Native** que implementa as operações básicas de **CRUD** (Create, Read, Update, Delete) consumindo uma API simulada através do **JSON Server**.

##  Funcionalidades

- **Listar itens:** Busca dados da API fake e renderiza em uma lista.
- **Adicionar:** Formulário para cadastrar novos registros.
- **Editar:** Atualização de informações existentes.
- **Remover:** Exclusão de registros com atualização em tempo real na interface.

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [JSON Server](https://github.com/typicode/json-server) (Backend Mock)
- [React Navigation](https://reactnavigation.org/) (Navegação entre telas)

##  Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
- **Node.js**
- **Expo CLI** (ou ambiente React Native CLI configurado)
- Um emulador (Android/iOS) ou um dispositivo físico.

##  Configuração e Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/jocxzs/CRUD-on-React-Native-w-APIs-REST/edit/main/README.md
````
### 2. Instale as dependências
````bash
npm install
````

### 3. Inicie o JSON server
Na pasta onde o db.json estiver
````bash
npx json-server --watch db.json --port 3000
````

### 4. Inicie o Projeto
Na pasta onde o app.js estiver
````bash
npm run start
````
### 5. Utilize o app
- Leia o QR code com o celular no aplicativo do ExpoGO
- Ou utilize em web/emulador
