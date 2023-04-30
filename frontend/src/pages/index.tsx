import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { useCookies } from "react-cookie";
import styles from "@/styles/Home.module.css";
import Mapa from "@/components/Mapa";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
