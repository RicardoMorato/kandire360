import { loadPackageDefinition, credentials } from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/login';
import { loginItem } from '../proto/loginPackage/loginItem';
import path from 'path';

const port = '4000'
const host = `0.0.0.0:${port}`;
const packageDefinition = loadSync(path.resolve(__dirname, '../proto/login.proto'));
const proto = loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType

class ClientGRPC {
  client: any;

  constructor() {
    this.client = new proto.loginPackage.Login(
      host,
      credentials.createInsecure()
    );

    console.log(`gRPC Client on ${port}`)
  }

  doAuthentication(token: string) {
    return this.client.authenticate({
      token
    }, (err: any, response: loginItem) => {
      return response.status;
    });
  }

  doLogin(email: string) {
    return this.client.login({
      email
    }, (err: any, response: loginItem) => {
      return response.token;
    });
  }
}

export { ClientGRPC };