import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { useCookies } from "react-cookie";
import { io } from "socket.io-client";
import styles from "@/styles/Home.module.css";
import Mapa from "@/components/Mapa";

const socket = io("http://localhost:3333/", { reconnectionAttempts: 2 });

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  socket.on("connect", () => {
    socket.emit("kandire:payload", { codMunicipio: 2600054, ano: 2011 });

    socket.on("kandire:data", (data) => {
      console.log("rebendo...", data);
      if (data === "end-stream") {
        console.log("fechando conexao");
        socket.close();
      }
    });
  });

  const router = useRouter();
  const [cookies] = useCookies(["session"]);

  useEffect(() => {
    if (!cookies.session) router.push("/login");
  }, [cookies.session, router]);

  return (
    <>
      <Head>
        <title>Kandire 360</title>
        <meta
          name="description"
          content="Um dashboard que lhe mostra a variação do PIB de cidades do Brasil entre 2010 e 2019"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Mapa />
      </main>
    </>
  );
}
