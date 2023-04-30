import { createServer } from "http";
import { Server } from "socket.io";
import { ClientGRPC } from "../../gRPC/src/client";
import { Kandire360Repository } from "../../../infrastructure/repository/kandire_360";
import { concatMap, from, interval, map, merge, mergeMap, take, tap } from "rxjs";

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
        if (grpc.doAuthentication(token)) {
          const repository = new Kandire360Repository();
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
              next: value => socket.emit('kandire:data', value),
              error: (err) => socket.emit("kandire:data", "end-stream") ,
              complete: () => socket.emit("kandire:data", "end-stream"),
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
