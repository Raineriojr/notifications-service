# Serviço de notificações (Ignite Lab)

## **Descrição**
Desenvolvimento de um serviço de notificações utilizando NestJS e Prisma, contendo os métodos para
- Criar notificações
- Cancelar notificação
- Marcar notificação como lida
- Marcar notificação como não lida
- Listar todas as notificações do usuário
- Contagem de notificaçõs do usuário

## **Conceitos aplicados**
- Utilização de classes
- OOP
- Design de software
- Estrutura de projeto (repositórios, entidades, casos de uso....)
- Mappers
- In memory pattern
- View models
- Helpers
- Factory pattern
- Testes unitários

## **Recursos Utilizados**
- Typescript
- NestJS (Decorators, Inversão e Injeção de dependência...)
- Prisma
- Jest
- Kafka
- Upstash

#### **OBS: Deve ser criado um projeto a parte para ser o Producer do kafka com o Upstash**

Primeiramente você deve ter criado um cluster no Upstash no link <https://upstash.com> para utilizar o kafka. Após configurá-lo no seu projeto você deve criar outro projeto para ser o Producer do kafka. 

Crie novo projeto node: 
``` 
node init -y
```

Instale o kafka:
```
npm i kafkajs
```
Crie um novo documento .js. Exemplo: ```producer.js```. Cole o código que está no arquivo ```codeProducer.txt``` na raiz do projeto e edite os dados do techo de codigo abaixo com suas credenciais do Upstash.

```
const kafka = new Kafka({
    clientId: 'kafka-producer',
    brokers: ['frank-coyote-5302-us1-kafka.upstash.io:9092'],
    sasl: {
      mechanism: 'scram-sha-256',
      username: '*********',
      password: '*********',
    },
    ssl: true,
  })
```

E após isso é só executar seu arquivo .js para gerar uma nova notificação no serviço de notificações.

