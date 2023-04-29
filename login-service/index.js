const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const http = require('http');
const { app, login, authenticate } = require('./app');

const packageDef = protoLoader.loadSync('login.proto', {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const { loginPackage } = grpcObject;

const serverGRPC = new grpc.Server();
serverGRPC.addService(loginPackage.Login.service, { login, authenticate });

serverGRPC.bindAsync('0.0.0.0:4000', grpc.ServerCredentials.createInsecure(), () => serverGRPC.start());

const server = http.createServer(app);

server.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${3000}`);
});
