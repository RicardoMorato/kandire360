import  grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/login';

const host = '0.0.0.0:4000';
const packageDefinition = protoLoader.loadSync('./proto/login/proto');
const proto = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

class ClientGRPC { 
  client: any;

  constructor() {
    this.client = new proto.loginPackage.Login(
      host,
      grpc.credentials.createInsecure()
    );
  }

  doAuthentication(token: string) {
    this.client.authenticate({
      token
    }, (err: any, response: any) => {
      console.log(response);
    });
  }

  doLogin(email: string) {
    this.client.login({
      email
    }, (err: any, response: any) => {
      console.log(response);
    });
  }
}

export { ClientGRPC };