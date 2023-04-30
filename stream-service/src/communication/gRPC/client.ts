import  grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './proto/login';
import { loginItem } from './proto/loginPackage/loginItem';

function initGrpcClient() {
  const host = '0.0.0.0:4000';
  const packageDefinition = protoLoader.loadSync('./proto/login/proto');
  const proto = grpc.loadPackageDefinition(
    packageDefinition
  ) as unknown as ProtoGrpcType;

  const client = new proto.loginPackage.Login(
    host,
    grpc.credentials.createInsecure()
  );

  function doAuthentication() {
    client.authenticate({
      token: ''
    }, (err, response) => {
      console.log(response);
    });
  }

  function doLogin() {
    client.login({
      email: ''
    }, (err, response) => {
      console.log(response);
    });
  }
}

export { initGrpcClient };