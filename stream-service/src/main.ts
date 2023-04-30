import { initGrpcClient } from './communication/gRPC/client'
import { initRestServer } from './communication/rest/server/server'
import { initWebSocketServer } from './communication/websocket/server/server'

initGrpcClient()

initRestServer()

initWebSocketServer()
