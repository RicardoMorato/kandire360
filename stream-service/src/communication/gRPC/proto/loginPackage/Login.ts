// Original file: proto/login.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { authenticationData as _loginPackage_authenticationData, authenticationData__Output as _loginPackage_authenticationData__Output } from '../loginPackage/authenticationData';
import type { loginItem as _loginPackage_loginItem, loginItem__Output as _loginPackage_loginItem__Output } from '../loginPackage/loginItem';
import type { userData as _loginPackage_userData, userData__Output as _loginPackage_userData__Output } from '../loginPackage/userData';

export interface LoginClient extends grpc.Client {
  authenticate(argument: _loginPackage_authenticationData, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_loginPackage_loginItem__Output>): grpc.ClientUnaryCall;
  authenticate(argument: _loginPackage_authenticationData, metadata: grpc.Metadata, callback: grpc.requestCallback<_loginPackage_loginItem__Output>): grpc.ClientUnaryCall;
  authenticate(argument: _loginPackage_authenticationData, options: grpc.CallOptions, callback: grpc.requestCallback<_loginPackage_loginItem__Output>): grpc.ClientUnaryCall;
  authenticate(argument: _loginPackage_authenticationData, callback: grpc.requestCallback<_loginPackage_loginItem__Output>): grpc.ClientUnaryCall;
  authenticate(argument: _loginPackage_authenticationData, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_loginPackage_loginItem__Output>): grpc.ClientUnaryCall;
  authenticate(argument: _loginPackage_authenticationData, metadata: grpc.Metadata, callback: grpc.requestCallback<_loginPackage_loginItem__Output>): grpc.ClientUnaryCall;
  authenticate(argument: _loginPackage_authenticationData, options: grpc.CallOptions, callback: grpc.requestCallback<_loginPackage_loginItem__Output>): grpc.ClientUnaryCall;
  authenticate(argument: _loginPackage_authenticationData, callback: grpc.requestCallback<_loginPackage_loginItem__Output>): grpc.ClientUnaryCall;
  
  login(argument: _loginPackage_userData, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_loginPackage_loginItem__Output>): grpc.ClientUnaryCall;
  login(argument: _loginPackage_userData, metadata: grpc.Metadata, callback: grpc.requestCallback<_loginPackage_loginItem__Output>): grpc.ClientUnaryCall;
  login(argument: _loginPackage_userData, options: grpc.CallOptions, callback: grpc.requestCallback<_loginPackage_loginItem__Output>): grpc.ClientUnaryCall;
  login(argument: _loginPackage_userData, callback: grpc.requestCallback<_loginPackage_loginItem__Output>): grpc.ClientUnaryCall;
  login(argument: _loginPackage_userData, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_loginPackage_loginItem__Output>): grpc.ClientUnaryCall;
  login(argument: _loginPackage_userData, metadata: grpc.Metadata, callback: grpc.requestCallback<_loginPackage_loginItem__Output>): grpc.ClientUnaryCall;
  login(argument: _loginPackage_userData, options: grpc.CallOptions, callback: grpc.requestCallback<_loginPackage_loginItem__Output>): grpc.ClientUnaryCall;
  login(argument: _loginPackage_userData, callback: grpc.requestCallback<_loginPackage_loginItem__Output>): grpc.ClientUnaryCall;
  
}

export interface LoginHandlers extends grpc.UntypedServiceImplementation {
  authenticate: grpc.handleUnaryCall<_loginPackage_authenticationData__Output, _loginPackage_loginItem>;
  
  login: grpc.handleUnaryCall<_loginPackage_userData__Output, _loginPackage_loginItem>;
  
}

export interface LoginDefinition extends grpc.ServiceDefinition {
  authenticate: MethodDefinition<_loginPackage_authenticationData, _loginPackage_loginItem, _loginPackage_authenticationData__Output, _loginPackage_loginItem__Output>
  login: MethodDefinition<_loginPackage_userData, _loginPackage_loginItem, _loginPackage_userData__Output, _loginPackage_loginItem__Output>
}
