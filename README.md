# Kandire 360
Um projeto criado em Hackathon visando trazer insights sobre o Pib de cidades do Brasil

## Para rodar os serviços:

### Para o Frontend
```
cd frontend
npm install
npm run dev
```

### Para o serviço de Login
```
cd login-service
npm install
node index.js
```

### Para o serviço de Stream de dados
```
cd stream-service
npm install
npm run dev
```

### Para o serviço de envio de e-mail
```
cd email-service
npm install
npm run dev
```

## Importante, sobre variáveis de ambiente
### No serviço de stream de dados
- É necessário adicionar uma conexão válida com o banco de dados no arquivo de configurações (`/stream-service/src/infrastructure/database/postgres/config/connect.ts`)

### No serviço de envio de e-mails
- É necessário adicionar uma API KEY válida do SendGrid no arquivo principal (`email-service/sendEmail.js`)
