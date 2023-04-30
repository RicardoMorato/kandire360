import { Server } from "socket.io";
import { ClientGRPC } from '../../gRPC/src/client';
import { Kandire360Repository } from "../../../infrastructure/repository/kandire_360";

const io = new Server();

const PORT = 3000

function timeIntervalAwait(ms: number) {
    return new Promise((resolve) => {
        setTimeout(async () => {
            resolve(0)
        }, ms)
    })
}

function initWebSocketServer() {
    console.log(`Websocket Server on ${PORT}`)

    const grpc = new ClientGRPC();

    io.on("connection", (socket) => {
        console.log(`socket ${socket.id} connected`)

        socket.on("kandire:payload", async (data) => {
            if (data) {
                const { codMunicipio, token } = data
                if(grpc.doAuthentication(token)){
                    const repository = new Kandire360Repository()
                    let initial = 2010
                    const response: any = await repository.getMunicipioByCodMunicipio(codMunicipio, initial)
                    socket.emit('kandire:data', response)
                    if (response) {
                        const maxLoop = 10
                        for (let index = 0; index < maxLoop; index++) {
                            await timeIntervalAwait(5000)
                            initial++
                            const resp = await repository.getMunicipioByCodMunicipio(codMunicipio, initial)
                            socket.emit('kandire:data', resp)
                        }

                        socket.emit("kandire:data", 'end-stream')
                    } else {
                        socket.emit("kandire:data", 'end-stream')
                    }
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