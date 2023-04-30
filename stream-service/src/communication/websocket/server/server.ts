import { Server } from "socket.io";
import { ClientGRPC } from '../../gRPC/src/client';

const io = new Server();

const PORT = 3000

function initWebSocketServer() {
    console.log(`Websocket Server on ${PORT}`)

    /************ EXEMPLO **********************/
    const grpc = new ClientGRPC();
    grpc.doAuthentication('');
    grpc.doLogin('');
    /************ EXEMPLO **********************/

    io.on("connection", (socket) => {
        console.log(`socket ${socket.id} connected`)

        // send an event to the client
        socket.emit("foo", "bar")

        socket.on("foobar", () => {
            // an event was received from the client
        })

        // upon disconnection
        socket.on("disconnect", (reason) => {
            console.log(`socket ${socket.id} disconnected due to ${reason}`);
        })
    })

    io.listen(PORT)
}

export {
    initWebSocketServer
}