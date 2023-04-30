import { Server } from "socket.io";
import { ClientGRPC } from '../../gRPC/src/client';
import { Kandire360Repository } from "../../../infrastructure/repository/kandire_360";

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

        socket.on("kandire:payload", async (data) => {
            if (data) {
                const { codMunicipio, ano } = data
                const repository = new Kandire360Repository()
                const response = await repository.getMunicipioByCodMunicipio(codMunicipio, ano)

                if (response) {
                    socket.emit("kandxire:data", response)
                } else {
                    socket.emit("kandire:data", 'end-stream')
                }
            }
        })

        socket.on("disconnect", (reason) => {
            console.log(`socket ${socket.id} disconnected due to ${reason}`);
        })
    })

    io.listen(PORT)
}

export {
    initWebSocketServer
}