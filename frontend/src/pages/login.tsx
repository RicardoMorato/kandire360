import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

import styles from "@/styles/Login.module.css";

export default function Login() {
  const router = useRouter();
  const [, setCookie] = useCookies(["session"]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (email: string) => {
    setIsLoading(true);

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });

    const data = await response.json();

    setCookie("session", JSON.stringify(data.token), {
      path: "/",
      maxAge: 3600, // Expires after 1hr
      sameSite: true,
    });

    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Kandire 360 - Login</title>
        <meta
          name="description"
          content="Login no dashboard que lhe mostra o PIB de cidades do Brasil entre 2010 e 2019"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={`${styles.section}`}>
        <main className={`${styles.main}`}>
          <div className={`${styles.formGrid}`}>
            <h1 className={`${styles.title}`}>Kandire 360</h1>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                const [[, email]] = [...data.entries()];
                handleSubmit(email);
              }}
              className={`${styles.form}`}
            >
              <label htmlFor="email" className={`${styles.label}`}>
                Insira um e-mail válido para visualizar os dados
              </label>

              <input
                type="email"
                name="email"
                id="email"
                className={`${styles.input}`}
                placeholder="mail@mail.com"
              />

              <button
                type="submit"
                className={`${styles.button}`}
                disabled={isLoading}
              >
                Entrar
              </button>
            </form>
          </div>

          <div className={`${styles.abstract}`}>
            <Image
              src="/growth.svg"
              alt="Ilustração representando uma pessoa correndo e buscando seu crescimento"
              width={499}
              height={320}
            />
          </div>
        </main>
      </section>
    </>
  );
}
