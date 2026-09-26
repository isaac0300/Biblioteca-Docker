# Sistema de Biblioteca com Docker

Atividade prática da disciplina de **Segurança e Hospedagem**, com foco na utilização do Docker para configurar e executar uma aplicação composta por **Frontend, Backend e MySQL**.

## Sobre o projeto

O projeto consiste em um sistema simples de biblioteca que permite cadastrar e visualizar livros.

A aplicação é composta por três partes:

* **Frontend:** página web desenvolvida com HTML, CSS e JavaScript, servida pelo Nginx.
* **Backend:** API desenvolvida em Node.js com Express.
* **Banco de dados:** MySQL, responsável pelo armazenamento dos livros.

O código da aplicação foi fornecido previamente pelo professor. Nesta atividade, o foco foi a configuração da infraestrutura utilizando Docker.

## Objetivo da atividade

Praticar conceitos de:

* Dockerfiles;
* Docker Compose;
* Containers;
* Redes Docker;
* Volumes;
* Persistência de dados;
* Comunicação entre containers.

## O que foi desenvolvido

Durante a atividade foram criados e configurados:

* `frontend/Dockerfile`
* `backend/Dockerfile`
* `docker-compose.yml`
* Volume Docker `dados_biblioteca`
* Rede Docker `rede-biblioteca`

Também foram realizados testes utilizando comandos do Docker para verificar os containers, a rede, o volume e a persistência dos dados.

## Estrutura do projeto

```text
biblioteca-docker/
├── frontend/
│   ├── Dockerfile
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── banco/
│   └── init.sql
│
├── docker-compose.yml
└── LEIA-ME.txt
```

## Portas utilizadas

| Serviço  | Porta do computador | Porta do container |
| -------- | ------------------: | -----------------: |
| Frontend |                8081 |                 80 |
| Backend  |                3001 |               3000 |
| MySQL    |                   — |               3306 |

O sistema pode ser acessado pelo navegador através de:

```text
http://localhost:8081
```

## Volume e persistência

Foi utilizado o volume:

```text
dados_biblioteca
```

O volume é montado no diretório:

```text
/var/lib/mysql
```

Essa configuração permite que os dados do banco continuem armazenados mesmo quando os containers são removidos com:

```bash
docker compose down
```

Ao utilizar:

```bash
docker compose down -v
```

o volume também é removido, causando a perda dos dados armazenados nele.

## Como executar

Na pasta do projeto, execute:

```bash
docker compose up -d --build
```

Depois, acesse:

```text
http://localhost:8081
```

Para verificar os containers:

```bash
docker ps
```

Para verificar a rede:

```bash
docker network inspect rede-biblioteca
```

Para verificar o volume:

```bash
docker volume inspect dados_biblioteca
```

Para parar os containers sem remover o volume:

```bash
docker compose down
```

Para parar os containers e remover o volume:

```bash
docker compose down -v
```

## Tecnologias e ferramentas

* Docker
* Docker Compose
* Nginx
* Node.js
* Express
* MySQL
* HTML
* CSS
* JavaScript

## Observação

O código do **Frontend, Backend e banco de dados** foi fornecido previamente pelo professor para a realização da atividade.

O trabalho realizado nesta atividade teve como foco a **configuração da infraestrutura Docker**, incluindo a criação dos Dockerfiles, configuração do Docker Compose, criação da rede e do volume e execução dos testes de persistência.
