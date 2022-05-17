import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>codein.ca</title>
        <meta name="description" content="codein.ca" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href={"blog"} passHref>
          <Image
            src="/codein-logo.png"
            alt="codein.ca photo"
            width={500}
            height={500}
          />
        </Link>

        <h3>🚧 under development in 🇨🇦</h3>
      </main>
    </div>
  );
}
