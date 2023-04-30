import { createServer } from "http";
import { Server } from "socket.io";
import { ClientGRPC } from "../../gRPC/src/client";
import { Kandire360Repository } from "../../../infrastructure/repository/kandire_360";
import { concatMap, from, interval, map, merge, mergeMap, take, tap } from "rxjs";
import { sendEmail } from "../../../domain/usecase/rabbitmq";
import { loginItem } from "../../gRPC/proto/loginPackage/loginItem";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

const PORT = 3333;

function initWebSocketServer() {
  console.log(`Websocket Server on ${PORT}`);

  const grpc = new ClientGRPC();

  io.on("connection", (socket) => {
    console.log(`socket ${socket.id} connected`);

    socket.on("kandire:payload", async (data) => {
      if (data) {
        const { codMunicipio, token } = data;
        const auth: any = await grpc.doAuthentication(token);
        if (auth && auth.status) {
          const repository = new Kandire360Repository();

          let totalPib: any[]  = []

          interval(2000)
            .pipe(
                take(10),
                map(e => e + 2010),
                mergeMap((year) =>
                  from(repository.getMunicipioByCodMunicipio(codMunicipio, year))
                ),
                tap(console.log),
            )
            .subscribe({
              next: value =>  {
                totalPib.push(value);
                socket.emit('kandire:data', value)
              },
              error: (err) => socket.emit("kandire:data", "end-stream") ,
              complete: async () => {
                socket.emit("kandire:data", "end-stream")
                const payload = {
                  data: totalPib,
                }
                sendEmail(auth.email, payload);
              },
            });

          } else {
            socket.emit("kandire:data", "end-stream");
          }
        } else {
          socket.emit("kandire:data", "end-stream");
        }
    });

    socket.on("disconnect", (reason) => {
      console.log(`socket ${socket.id} disconnected due to ${reason}`);
    });
  });

  io.listen(PORT);
}

export { initWebSocketServer };
