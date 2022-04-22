import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>codein.ca</title>
        <meta name="description" content="codein.ca" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a href="https://codein.ca">🇨🇦 codein.ca</a>
        <h1 style={{ textAlign: "center" }}>This is under construction</h1>

        <Image
          src="/codein-logo.png"
          alt="codein.ca photo"
          width={500}
          height={500}
        />

        <h3>
          Made with love by{" "}
          <span>
            ️👨‍👩‍👧‍👦 <a href="https://linkedin.ca/in/brasileiro">Daniel @LinkedIn</a>
          </span>
        </h3>

        <Image
          src="/daniel_IMG_0655-with-certs.png"
          alt="Daniel LinkedIn profile photo"
          width={234}
          height={234}
        />
      </main>
    </div>
  );
}
