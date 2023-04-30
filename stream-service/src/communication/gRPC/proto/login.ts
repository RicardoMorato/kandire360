import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { LoginClient as _loginPackage_LoginClient, LoginDefinition as _loginPackage_LoginDefinition } from './loginPackage/Login';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  loginPackage: {
    Login: SubtypeConstructor<typeof grpc.Client, _loginPackage_LoginClient> & { service: _loginPackage_LoginDefinition }
    authenticationData: MessageTypeDefinition
    loginItem: MessageTypeDefinition
    userData: MessageTypeDefinition
  }
}

