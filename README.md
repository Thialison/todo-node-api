### Todo Node API

API RESTFul com signup/login para você criar os seus TODOS.

#### Tecnologias
* Node
* HapiJS Framework
* MongoDB

#### Dependências
* Node v12.18.3 e NPM
* Docker
* Docker Compose

#### Configurando e rodando local
Renomeie o arquivo `.env.example` para `.env`. Crie sua SECRET_KEY e adicione o valor a variável `SECRET_KEY` no arquivo.


#### Rode os containers
```
docker-compose up -d
```

#### Faça o Signup

Após fazer o signup, você receberá um token com 1 hora de duração para criar os seus TODOS

```
POST 0.0.0.0:3000/api/v1/signup

{
  "username": "thialison@dbz.com",
  "password": "senha@123"
}
```

#### Criando TODO

Pegue o token gerado no signup ou login e crie os seus todos

```
POST 0.0.0.0:3000/api/v1/todos

{
  "title": "Assistir aula de programação", # REQUIRED
  "description": "Aprender sobre REST"
}
```

#### Visualizar todos os TODOS do seu usuário

Passe o token de autorização do seu usuário e faça uma requisição para visualizar os seus TODOS

```
GET 0.0.0.0:3000/api/v1/todos
```

#### Acessando logs
Para visualizar os logs, é necessário rodar o comando do docker para visualizar os logs do container.
```
docker logs -f todo-api
```
